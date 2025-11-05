/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { CreateVibeDto } from './dto/create-vibe.dto';
import { UpdateVibeDto } from './dto/update-vibe.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Vibe } from './schemas/vibe.schema';
import { Readable } from 'stream';
import { GoogleAPIService } from 'src/google/google-api.service';
import { Response } from 'express';
import { LikeVibeDto } from './dto/like-vibe.dto';
import { Like } from '../../libs/common/like.dto';
import * as afterVibeSentences from '../../assets/after-vibe-sentences.json';

@Injectable()
export class VibeService {
  private readonly logger = new Logger(VibeService.name);
  constructor(
    @InjectModel(Vibe.name) private readonly vibeModel: Model<Vibe>,
    private readonly googleService: GoogleAPIService,
  ) {}

  async create(createVibeDto: CreateVibeDto): Promise<string> {
    const vibe: Vibe = new Vibe(createVibeDto);
    await new this.vibeModel(vibe).save();
    const items: string[] = afterVibeSentences as any;
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }

  async createPicture(file: Express.Multer.File): Promise<string> {
    if (!file || !file?.buffer) {
      throw new HttpException('File cannot be empty', HttpStatus.BAD_REQUEST);
    }

    const bufferStream: Readable = new Readable();
    bufferStream.push(file?.buffer);
    bufferStream.push(null);

    const response = await this.googleService.googleDriveAPI.files.create({
      requestBody: {
        name: file.originalname,
        parents: [this.googleService.googleDriveFolderId],
      },
      media: {
        body: bufferStream,
      },
    });

    return response.data.id!;
  }

  async findAll() {
    const pipeline = [
      {
        $lookup: {
          from: 'users',
          localField: 'userId',
          foreignField: '_id',
          as: 'user',
        },
      },
      { $unwind: '$user' },
      { $set: { badges: '$user.roles' } },
      { $unset: 'user' },
      { $sort: { creationTimestamp: -1 as const } },
    ];
    const vibes: Vibe[] = await this.vibeModel.aggregate(pipeline);
    if (!vibes) {
      throw new HttpException('No vibes found', HttpStatus.NOT_FOUND);
    }
    return vibes.map((vibe) => {
      return {
        ...vibe,
        imageUrl: `https://drive.google.com/uc?id=${vibe.fileId}`,
      };
    });
  }

  async findOne(id: string): Promise<any> {
    const pipeline = [
      {
        $match: { _id: new Types.ObjectId(id) },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'userId',
          foreignField: '_id',
          as: 'user',
        },
      },
      { $unwind: '$user' },
      { $set: { badges: '$user.roles' } },
      { $unset: 'user' },
      {
        $limit: 1,
      },
    ];

    const results = await this.vibeModel.aggregate(pipeline);
    const vibe = results[0];

    if (!vibe) {
      throw new HttpException('Vibe not found', HttpStatus.NOT_FOUND);
    }

    const returnValue = {
      ...vibe,
      imageUrl: `https://drive.google.com/uc?id=${vibe.fileId}`,
    };

    return returnValue;
  }

  async update(id: string, updateVibeDto: UpdateVibeDto) {
    return await this.vibeModel.findByIdAndUpdate(id, updateVibeDto);
  }

  async remove(id: string) {
    const vibe: Vibe | null = await this.vibeModel.findById(id);
    if (!vibe) {
      return null;
    }
    await this.googleService.googleDriveAPI.files.delete({
      fileId: vibe.fileId,
    });
    return await this.vibeModel.findByIdAndDelete(id);
  }

  async getImage(id: string, res: Response) {
    const vibe: Vibe | null = await this.vibeModel.findById(id).lean();
    if (!vibe) {
      return null;
    }
    const driveResponse = await this.googleService.googleDriveAPI.files.get(
      {
        fileId: vibe.fileId,
        alt: 'media',
      },
      { responseType: 'stream' },
    );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    res.setHeader('Content-Type', driveResponse.headers['content-type']);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    res.setHeader('Content-Length', driveResponse.headers['content-length']);
    driveResponse.data.pipe(res);
    return;
  }

  async setLike(body: LikeVibeDto, res: Response): Promise<void> {
    const { userId, vibeId, isLiked } = body;

    if (!userId || !vibeId) {
      this.logger.error('User ID or Vibe ID is missing in the request body');
      throw new HttpException(
        'User ID and Vibe ID are required',
        HttpStatus.BAD_REQUEST,
      );
    }

    const vibe: Vibe | null = await this.vibeModel.findById(vibeId);
    if (!vibe) {
      this.logger.error(`Vibe with ID ${vibeId} not found`);
      throw new HttpException('Vibe not found', HttpStatus.NOT_FOUND);
    }

    if (!vibe.likes) {
      this.logger.log(`Initializing likes array for vibe with ID ${vibeId}`);
      vibe.likes = [];
    }

    const existingLikeIndex = vibe.likes.findIndex(
      (like) => like.userId === userId,
    );

    if (existingLikeIndex > -1) {
      // User has already liked the vibe, update the like status
      vibe.likes[existingLikeIndex].isLiked = isLiked;
      vibe.likes[existingLikeIndex].timestamp = new Date();
    } else {
      // User has not liked the vibe yet, add a new like
      const newLike = new Like(userId, isLiked);
      vibe.likes.push(newLike);
    }

    await this.vibeModel.updateOne({ _id: vibeId }, { likes: vibe.likes });
    this.logger.log(
      `Like status for user ${userId} on vibe ${vibeId} updated to ${isLiked}`,
    );
    res
      .status(HttpStatus.OK)
      .send({ message: 'Like status updated successfully' });
  }
}
