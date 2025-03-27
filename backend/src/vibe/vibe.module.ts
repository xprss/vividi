import { Module } from '@nestjs/common';
import { VibeService } from './vibe.service';
import { VibeController } from './vibe.controller';

@Module({
  controllers: [VibeController],
  providers: [VibeService],
})
export class VibeModule {}
