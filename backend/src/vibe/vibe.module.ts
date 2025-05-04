import { Module } from '@nestjs/common';
import { VibeService } from './vibe.service';
import { VibeController } from './vibe.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vibe, VibeSchema } from './schemas/vibe.schema';
import { GoogleAPIModule } from 'src/google/google-api.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vibe.name, schema: VibeSchema }]),
    GoogleAPIModule,
  ],
  controllers: [VibeController],
  providers: [VibeService],
})
export class VibeModule {}
