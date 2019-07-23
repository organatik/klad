import { Controller, Get, Post, Body, UseInterceptors, UseGuards } from '@nestjs/common';
import { UserService } from '../shared/user.service';
import { AuthService } from './auth.service';
import { LoginDTO } from './login.dto';
import { Payload } from '../types/payload';
import { RegisterDTO } from './auth.dto';
import { PasswordTransformInterceptor } from '../shared/password-exclude.interceptor';
import { ApiBearerAuth, ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private userService: UserService, private authService: AuthService) {}
  
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Get()
  async getAllUSer() {
    return this.userService.findAll();
  }

  @UseInterceptors(PasswordTransformInterceptor)
  @Post('login')
  async login(@Body() loginDTO: LoginDTO) {
    const user = await this.userService.findByLogin(loginDTO);

    const payload: Payload = {
      username: user.username,
    };

    const token = await this.authService.signPayload(payload);
    return ({user, token});
  }

 @UseInterceptors(PasswordTransformInterceptor)
  @Post('register')
  async register(@Body() registerDTO: RegisterDTO) {
    const user = await this.userService.create(registerDTO);
    const payload = {
      username: user.username,
    };

    const token = await this.authService.signPayload(payload);
    return {user, token};
  }
}
