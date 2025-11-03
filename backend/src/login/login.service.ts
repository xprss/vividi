import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

@Injectable()
export class LoginService {
  private readonly logger = new Logger(LoginService.name);
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async retrieveUser(email: string) {
    const users = (await this.userModel.find()).filter((user) => {
      return user.email === email;
    });
    this.logger.log(`Found ${users.length} users with email ${email}`, users);
    if (users.length > 0) {
      return users[0];
    }
    this.logger.warn(`No user found with email ${email}`);
    return null;
  }
}
