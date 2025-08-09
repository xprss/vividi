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
  Res,
  Logger,
} from '@nestjs/common';
import { VibeService } from './vibe.service';
import { CreateVibeDto } from './dto/create-vibe.dto';
import { UpdateVibeDto } from './dto/update-vibe.dto';
import { ApiBody, ApiConsumes, ApiParam } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { LikeVibeDto } from './dto/like-vibe.dto';

@Controller('vibe')
export class VibeController {
  private readonly logger = new Logger(VibeController.name);
  constructor(private readonly vibeService: VibeService) {}

  @Post()
  async create(@Body() createVibeDto: CreateVibeDto) {
    return await this.vibeService.create(createVibeDto);
  }

  @Post('picture')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multidata/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async createPicture(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<string> {
    return await this.vibeService.createPicture(file);
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

  @Get('image/:id')
  @ApiParam({
    name: 'id',
    description: 'The id of the Vibe',
  })
  getImage(@Param('id') id: string, @Res() res: Response) {
    return this.vibeService.getImage(id, res);
  }

  @Post('like')
  @ApiConsumes('application/json')
  @ApiBody({
    type: LikeVibeDto,
    description: 'Set like for a vibe',
  })
  setLike(@Body() body: LikeVibeDto, @Res() res: Response) {
    this.logger.log(
      `Setting like for userId: ${body.userId}, vibeId: ${body.vibeId}, isLiked: ${body.isLiked}`,
    );
    return this.vibeService.setLike(body, res);
  }
}
