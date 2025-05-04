import { Module } from '@nestjs/common';
import { GoogleAPIService } from './google-api.service';

@Module({
  providers: [GoogleAPIService],
  exports: [GoogleAPIService],
})
export class GoogleAPIModule {}
