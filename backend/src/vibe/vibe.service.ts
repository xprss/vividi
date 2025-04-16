import { Injectable } from '@nestjs/common';
import { CreateVibeDto } from './dto/create-vibe.dto';
import { UpdateVibeDto } from './dto/update-vibe.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vibe } from './schemas/vibe.schema';

@Injectable()
export class VibeService {
  constructor(@InjectModel(Vibe.name) private vibeModel: Model<Vibe>) {}

  async create(createVibeDto: CreateVibeDto): Promise<Vibe> {
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
