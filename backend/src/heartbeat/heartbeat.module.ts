import { Module } from '@nestjs/common';
import { HeartbeatService } from './heartbeat.service';
import { HeartbeatController } from './heartbeat.controller';

@Module({
  controllers: [HeartbeatController],
  providers: [HeartbeatService],
})
export class HeartbeatModule {}
