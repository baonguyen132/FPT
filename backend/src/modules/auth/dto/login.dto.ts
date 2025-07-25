// src/modules/auth/dto/login.dto.ts
import { IsString, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ description: 'Username for login', example: 'admin' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ description: 'Password for login', example: 'admin123', minLength: 6 })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}