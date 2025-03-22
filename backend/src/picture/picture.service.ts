import { Injectable } from '@nestjs/common';
import { Picture } from './picture.dto';
import { MomentType } from 'libs/common/moment.enum';

@Injectable()
export class PictureService {
  public getHello(): Picture {
    return new Picture("1", Date.now().toString(), "user_1", MomentType.CERIMONY);
  }
}
