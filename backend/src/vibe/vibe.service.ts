import { Injectable } from '@nestjs/common';
import { CreateVibeDto } from './dto/create-vibe.dto';
import { UpdateVibeDto } from './dto/update-vibe.dto';

@Injectable()
export class VibeService {
  create(createVibeDto: CreateVibeDto) {
    return 'This action adds a new vibe';
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
