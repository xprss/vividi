import { Injectable } from '@nestjs/common';
import { CreateVibeDto } from './dto/create-vibe.dto';
import { UpdateVibeDto } from './dto/update-vibe.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vibe } from './schemas/vibe.schema';
import { Readable } from 'stream';
import { GoogleAPIService } from 'src/google/google-api.service';

@Injectable()
export class VibeService {
  constructor(
    @InjectModel(Vibe.name) private readonly vibeModel: Model<Vibe>,
    private readonly googleService: GoogleAPIService,
  ) {}

  async create(
    file: Express.Multer.File,
    createVibeDto: CreateVibeDto,
  ): Promise<Vibe> {
    if (!file || !file?.buffer) {
      throw new Error('No file provided');
    }

    const bufferStream: Readable = new Readable();
    bufferStream.push(file?.buffer);
    bufferStream.push(null);

    const response = await this.googleService.googleDriveAPI.files.create({
      requestBody: {
        name: file.originalname,
        mimeType: 'image/jpeg',
        parents: [this.googleService.googleDriveFolderId],
      },
      media: {
        mimeType: 'image/jpeg',
        body: bufferStream,
      },
    });

    return await new this.vibeModel(createVibeDto).save();
  }

  async findAll() {
    return await this.vibeModel.find();
  }

  async findOne(id: string) {
    return await this.vibeModel.findById(id);
  }

  async update(id: string, updateVibeDto: UpdateVibeDto) {
    return await this.vibeModel.findByIdAndUpdate(id, updateVibeDto);
  }

  async remove(id: string) {
    return await this.vibeModel.findByIdAndDelete(id);
  }
}
