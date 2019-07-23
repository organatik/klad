import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import {MongooseModule} from '@nestjs/mongoose';
import { UserSchema } from '../schemas/user.schema';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),
    DatabaseModule,
  ],
  providers: [UserService],
  exports: [UserService],
})
export class SharedModule {}
