import {Document} from 'mongoose';
import { Exclude } from 'class-transformer';

export interface User extends Document {
  username: string;
  password: string;
  telegram: string;
  seller: boolean;
  created: Date;
}
