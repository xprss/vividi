import { Module } from '@nestjs/common';
import { PictureService } from './picture/picture.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PictureController } from './picture/picture.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/27017/vividi')],
  controllers: [
    PictureController,
    UserController
  ],
  providers: [
    PictureService,
    UserService
  ],
})
export class AppModule { }
