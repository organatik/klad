import { Exclude } from 'class-transformer';

export class AuthResponce {
  @Exclude()
  password: string;

  constructor(partial: Partial<AuthResponce>) {
    Object.assign(this, partial);
  }
}
