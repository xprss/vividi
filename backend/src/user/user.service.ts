import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    return await new this.userModel(createUserDto).save();
  }

  async findAll() {
    return await this.userModel.find();
  }

  async findOne(email: string) {
    const users = (await this.userModel.find()).filter((user) => {
      return user.email === email;
    });
    if (users.length > 0) {
      return users[0];
    }
    return null;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndDelete(id);
  }
}
