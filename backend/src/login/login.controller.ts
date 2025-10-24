import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { ApiBody } from '@nestjs/swagger';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: { type: 'string', example: 'test@example.com' },
      },
      required: ['email'],
    },
  })
  retrieveUser(@Body() body: { email: string }) {
    return this.loginService.retrieveUser(body.email);
  }
}
