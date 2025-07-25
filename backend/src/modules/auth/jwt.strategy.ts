// src/modules/auth/jwt.strategy.ts
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtPayload } from './interfaces/jwt-payload.interface'; // <-- Đảm bảo đường dẫn đúng

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('jwt.secret'), // Lấy từ cấu hình 'jwt.secret'
    });
  }

  async validate(payload: JwtPayload) {
    // Trong ứng dụng thực tế, bạn có thể kiểm tra xem userId này có tồn tại trong DB không
    // hoặc lấy thông tin người dùng đầy đủ hơn từ database.
    // Ví dụ: const user = await this.usersService.findById(payload.userId);
    // if (!user) { throw new UnauthorizedException(); }
    // return user;
    return { userId: payload.userId, username: payload.username };
  }
}