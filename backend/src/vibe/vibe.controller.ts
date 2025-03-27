import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VibeService } from './vibe.service';
import { CreateVibeDto } from './dto/create-vibe.dto';
import { UpdateVibeDto } from './dto/update-vibe.dto';

@Controller('vibe')
export class VibeController {
  constructor(private readonly vibeService: VibeService) {}

  @Post()
  create(@Body() createVibeDto: CreateVibeDto) {
    return this.vibeService.create(createVibeDto);
  }

  @Get()
  findAll() {
    return this.vibeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vibeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVibeDto: UpdateVibeDto) {
    return this.vibeService.update(+id, updateVibeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vibeService.remove(+id);
  }
}
