import { Injectable } from '@nestjs/common';
import { CreateVibeDto } from './dto/create-vibe.dto';
import { UpdateVibeDto } from './dto/update-vibe.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vibe } from './schemas/vibe.schema';
import { google, drive_v3 } from 'googleapis';

@Injectable()
export class VibeService {
  private readonly drive: drive_v3.Drive;

  constructor(@InjectModel(Vibe.name) private vibeModel: Model<Vibe>) {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI,
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    this.drive = google.drive({
      version: 'v3',
      auth: oauth2Client,
    });
  }

  async create(createVibeDto: CreateVibeDto): Promise<Vibe> {
    await this.drive.files.create({
      requestBody: {
        name: 'pictureFile',
        mimeType: 'image/jpeg',
      },
      media: {
        mimeType: 'image/jpeg',
        body: createVibeDto.pictureFile,
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
