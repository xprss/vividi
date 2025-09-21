import { Module } from '@nestjs/common';
import { VibeModule } from './vibe/vibe.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HeartbeatModule } from './heartbeat/heartbeat.module';
import { ConfigModule } from '@nestjs/config';
import { LoginModule } from './login/login.module';
import { QuizModule } from './quiz/quiz.module';

@Module({
  imports: [
    VibeModule,
    UserModule,
    MongooseModule.forRoot(
      'mongodb://root:example@mongodb:27017/vividi?authSource=admin',
    ),
    HeartbeatModule,
    ConfigModule.forRoot({
      envFilePath: 'backend/.env',
      isGlobal: true,
    }),
    LoginModule,
    QuizModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
