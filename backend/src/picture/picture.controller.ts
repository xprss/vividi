import { Controller, Get } from '@nestjs/common';
import { PictureService } from '../picture/picture.service';
import { Picture } from './picture.dto';

@Controller("picture")
export class PictureController {
  constructor(private readonly pictureService: PictureService) {}

  @Get()
  public getHello(): Picture {
    return this.pictureService.getHello();
  }
}
