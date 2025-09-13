import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('')
  retrieveUser(@Body() body: { email: string }) {
    return this.loginService.retrieveUser(body.email);
  }
}
