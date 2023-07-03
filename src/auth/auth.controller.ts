import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard, Public,  } from 'src/guards/auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() SingnInDto: Record<string, any>) {
    return this.authService.signIn(SingnInDto.username, SingnInDto.password);
  }

  // @UseGuards(AuthGuard)
  @Public()  //ab sirf id dy ga jab haty ga to pora obj dy ga
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}

