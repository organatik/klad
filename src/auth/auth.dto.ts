import {Allow, IsBoolean, IsNotEmpty, MinLength, ValidateIf} from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class RegisterDTO {
  @ApiModelProperty()
  username: string;

  @Exclude()
  @ApiModelProperty()
  password: string;

  @ApiModelProperty()
  email: string;

  @ApiModelProperty()
  telegram: string;
}
