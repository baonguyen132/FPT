// src/main.ts
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder, ApiExtraModels } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { Product } from './database/entities/product.entity';
import { Category } from './database/entities/category.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*', // hoặc '*' nếu đang dev nhanh, nhưng không nên dùng ở production
    credentials: true, // nếu bạn dùng cookie hoặc cần gửi credentials
  });
  // Áp dụng ValidationPipe toàn cục để xử lý DTOs và validation đầu vào
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Loại bỏ các thuộc tính không có trong DTO
    forbidNonWhitelisted: true, // Ném lỗi nếu có thuộc tính không được phép
    transform: true, // Tự động chuyển đổi payload thành instance DTO
    transformOptions: {
      enableImplicitConversion: true, // Cho phép chuyển đổi kiểu dữ liệu ngầm định (ví dụ: '1' -> 1)
    },
  }));

  // Áp dụng Exception Filter toàn cục để xử lý lỗi HTTP nhất quán
  app.useGlobalFilters(new HttpExceptionFilter());

  // Áp dụng Interceptor toàn cục để biến đổi cấu trúc phản hồi API
  app.useGlobalInterceptors(new TransformInterceptor());

  // --- Cấu hình Swagger (OpenAPI) ---
  const config = new DocumentBuilder()
    .setTitle('Inventory Management API') // Tiêu đề của tài liệu API
    .setDescription('The API documentation for the Inventory Management System') // Mô tả
    .setVersion('1.0') // Phiên bản API
    .addTag('auth', 'Authentication and Authorization operations') // Thêm tag cho Authentication
    .addTag('products', 'Operations related to products') // Thêm tag cho Products
    .addTag('categories', 'Operations related to product categories') // Thêm tag cho Categories
    .addBearerAuth( // Cấu hình bảo mật Bearer (JWT) cho Swagger UI
      {
        type: 'http', // Loại xác thực
        scheme: 'bearer', // Phương án xác thực
        bearerFormat: 'JWT', // Định dạng token là JWT
        name: 'Authorization', // Tên header (mặc định là Authorization)
        description: 'Enter JWT token (e.g., Bearer your_token_here)', // Mô tả hiển thị trên UI
        in: 'header', // Vị trí của token (trong header)
      },
      'access-token', // Tên định danh cho cấu hình bảo mật này, sẽ được sử dụng trong @ApiBearerAuth()
    )
    .build();

  // Tạo tài liệu Swagger từ cấu hình và ứng dụng NestJS
  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [Product, Category], // Bắt buộc thêm các Entity vào extraModels để hiển thị trong Schemas
  });
  // Thiết lập Swagger UI tại đường dẫn '/api'
  SwaggerModule.setup('api', app, document);
  // ------------------------------------

  // Lấy cổng từ cấu hình môi trường hoặc mặc định là 3000
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;

  // Khởi động ứng dụng NestJS
  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`Swagger UI available at: ${await app.getUrl()}/api`);
}

// Gọi hàm bootstrap để khởi chạy ứng dụng
bootstrap();