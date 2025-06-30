import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HeartbeatService } from './heartbeat.service';
import { CreateHeartbeatDto } from './dto/create-heartbeat.dto';
import { UpdateHeartbeatDto } from './dto/update-heartbeat.dto';

@Controller('heartbeat')
export class HeartbeatController {
  constructor(private readonly heartbeatService: HeartbeatService) {}

  @Post()
  create(@Body() createHeartbeatDto: CreateHeartbeatDto) {
    return this.heartbeatService.create(createHeartbeatDto);
  }

  @Get()
  findAll() {
    return this.heartbeatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.heartbeatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHeartbeatDto: UpdateHeartbeatDto) {
    return this.heartbeatService.update(+id, updateHeartbeatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.heartbeatService.remove(+id);
  }
}
