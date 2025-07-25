// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configuration } from './config/configuration';
import { validate } from './config/validation';
import { TypeOrmConfigService } from './database/typeorm.config';
import { ProductsModule } from './modules/products/products.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { HealthModule } from './modules/health/health.module';
import { AuthModule } from './modules/auth/auth.module'; // <-- Đảm bảo dòng này có

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validate,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
      inject: [ConfigService],
    }),
    ProductsModule,
    CategoriesModule,
    HealthModule,
    AuthModule, // <-- Đảm bảo AuthModule nằm trong đây
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}