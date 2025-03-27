import { Module } from '@nestjs/common';
import { VibeModule } from './vibe/vibe.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    VibeModule,
    UserModule,
    MongooseModule.forRoot(
      'mongodb://root:example@mongodb:27017/vividi?authSource=admin',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
