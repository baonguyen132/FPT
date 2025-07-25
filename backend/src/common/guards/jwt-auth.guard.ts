// src/common/guards/jwt-auth.guard.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info) {
    // You can throw an exception based on the "info" object, e.g. "token expired"
    if (err || !user) {
      throw err || new UnauthorizedException('Authentication required.');
    }
    return user;
  }
}