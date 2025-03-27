import { Injectable } from '@nestjs/common';
import { CreateVibeDto } from './dto/create-vibe.dto';
import { UpdateVibeDto } from './dto/update-vibe.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IVibe } from './interface/vibe.interface';
import { Vibe } from './schemas/vibe.schema';

@Injectable()
export class VibeService {
  constructor(@InjectModel(Vibe.name) private vibeModel: Model<IVibe>) {}

  async create(createVibeDto: CreateVibeDto): Promise<IVibe> {
    const newVibe = await new this.vibeModel(createVibeDto).save();
    return newVibe;
  }

  findAll() {
    return `This action returns all vibe`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vibe`;
  }

  update(id: number, updateVibeDto: UpdateVibeDto) {
    return `This action updates a #${id} vibe`;
  }

  remove(id: number) {
    return `This action removes a #${id} vibe`;
  }
}
