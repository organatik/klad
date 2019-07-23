import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../types/user';
import { RegisterDTO } from '../auth/auth.dto';
import { LoginDTO } from '../auth/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) { }

  private sanitizeUser(user: User) {
    return user.depopulate('password');
  }

  async create(userDto: RegisterDTO) {

    const { username } = userDto;
    const user = await this.userModel.findOne({ username });

    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const createdUser = new this.userModel(userDto);
    createdUser.save();
    return  createdUser.toObject();
  }

  async findByLogin(userDto: LoginDTO) {
    const { username, password } = userDto;
    const user = await this.userModel.findOne({ username }).lean();

    if (!user) {
      throw new HttpException('Invalid credentionals', HttpStatus.UNAUTHORIZED);
    }

    if (await bcrypt.compare(password, user.password)) {
      return user;
    } else {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
  }

  async findByPayload(payload: any) {
    const {username} = payload;
    return await this.userModel.findOne({username});
  }

  async findAll() {
    return await this.userModel.find().select('-password').exec();
  }
}
