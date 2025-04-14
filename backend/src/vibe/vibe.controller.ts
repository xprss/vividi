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
import { ApiParam } from '@nestjs/swagger';

@Controller('vibe')
export class VibeController {
  constructor(private readonly vibeService: VibeService) {}

  @Post()
  async create(@Body() createVibeDto: CreateVibeDto) {
    return await this.vibeService.create(createVibeDto);
  }

  @Get()
  async findAll() {
    return await this.vibeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vibeService.findOne(+id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    description: 'The id of the Vibe',
  })
  update(@Param('id') id: string, @Body() updateVibeDto: UpdateVibeDto) {
    return this.vibeService.update(+id, updateVibeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vibeService.remove(+id);
  }
}
