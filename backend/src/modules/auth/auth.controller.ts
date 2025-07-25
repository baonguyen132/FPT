// src/modules/auth/auth.controller.ts
import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Log in to the application and get a JWT token' })
  @ApiResponse({ status: 200, description: 'Login successful, returns JWT access token.', schema: { example: { access_token: 'eyJhbGciOiJIUzI1Ni...' } } })
  @ApiResponse({ status: 401, description: 'Invalid credentials.' })
  @ApiBody({ type: LoginDto, description: 'User credentials for login' })
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}