import { Module } from '@nestjs/common';
import { VibeModule } from './vibe/vibe.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HeartbeatModule } from './heartbeat/heartbeat.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    VibeModule,
    UserModule,
    MongooseModule.forRoot(
      'mongodb://root:example@mongodb:27017/vividi?authSource=admin',
    ),
    HeartbeatModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
