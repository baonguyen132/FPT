import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
}
