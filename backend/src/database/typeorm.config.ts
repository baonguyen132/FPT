// src/database/typeorm.config.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Product } from './entities/product.entity'; // <-- Đảm bảo đã import
import { Category } from './entities/category.entity'; // <-- Đảm bảo đã import

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get<string>('database.host'),
      port: this.configService.get<number>('database.port'),
      username: this.configService.get<string>('database.username'),
      password: this.configService.get<string>('database.password'),
      database: this.configService.get<string>('database.database'),
      entities: [Product, Category], // <-- Đảm bảo entities được liệt kê ở đây
      synchronize: this.configService.get<boolean>('database.synchronize'),
      logging: this.configService.get<boolean>('database.logging'),
    };
  }
}