import { Module } from '@nestjs/common';
import { VibeService } from './vibe.service';
import { VibeController } from './vibe.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vibe, VibeSchema } from './schemas/vibe.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vibe.name, schema: VibeSchema }]),
  ],
  controllers: [VibeController],
  providers: [VibeService],
})
export class VibeModule {}
