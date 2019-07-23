import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { databaseProviders } from './database.provider';

@Module({
  imports: [ MongooseModule.forRoot('mongodb://localhost:27017/klad', {useNewUrlParser: true})],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
