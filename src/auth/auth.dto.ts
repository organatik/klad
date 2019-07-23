
import { ApiModelProperty } from '@nestjs/swagger';

export class RegisterDTO {
  @ApiModelProperty()
  username: string;

  @ApiModelProperty()
  password: string;

  @ApiModelProperty()
  email: string;

  @ApiModelProperty()
  telegram: string;
}
