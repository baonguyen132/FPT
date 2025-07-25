// src/utils/logger.ts
import { Logger } from '@nestjs/common';

export const appLogger = new Logger('InventoryApp');

// You can add more advanced logging configurations here
// e.g., using Winston or Pino for file logging, external services etc.