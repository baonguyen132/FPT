// src/modules/health/health.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  checkHealth() {
    return { status: 'ok', message: 'Inventory Backend is running!' };
  }
}