import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

@Injectable()
export class LoginService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async retrieveUser(email: string) {
    const users = (await this.userModel.find()).filter((user) => {
      return user.email === email;
    });
    if (users.length > 0) {
      return users[0];
    }
    return null;
  }
}
