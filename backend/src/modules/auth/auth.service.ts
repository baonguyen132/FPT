// src/modules/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface'; // <-- Đảm bảo đường dẫn đúng

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    // Đây là logic xác thực giả lập.
    // Trong ứng dụng thực tế:
    // 1. Lấy người dùng từ database (ví dụ: usersService.findByUsername(username)).
    // 2. So sánh mật khẩu băm (bcrypt.compare(pass, user.password)).
    // Nếu thành công, trả về user object (trừ mật khẩu).
    if (username === 'admin' && pass === 'admin123') { // Ví dụ: username/password cố định
      return { userId: '12345', username: 'admin' };
    }
    return null;
  }

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto.username, loginDto.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload: JwtPayload = { userId: user.userId, username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}