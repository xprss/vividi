import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { VibeService } from './vibe.service';
import { CreateVibeDto } from './dto/create-vibe.dto';
import { UpdateVibeDto } from './dto/update-vibe.dto';
import { ApiBody, ApiConsumes, ApiParam } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { Moment } from 'libs/common/moment.enum';

@Controller('vibe')
export class VibeController {
  constructor(private readonly vibeService: VibeService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
        userId: { type: 'string' },
        userFullName: { type: 'string' },
        description: { type: 'string' },
        moment: { type: 'enum', enum: Object.values(Moment) },
      },
    },
  })
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createVibeDto: CreateVibeDto,
  ) {
    return await this.vibeService.create(file, createVibeDto);
  }

  @Get()
  async findAll() {
    return await this.vibeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vibeService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    description: 'The id of the Vibe',
  })
  update(@Param('id') id: string, @Body() updateVibeDto: UpdateVibeDto) {
    return this.vibeService.update(id, updateVibeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vibeService.remove(id);
  }
}
