"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
const configuration = () => ({
    port: parseInt(process.env.PORT || '3000', 10),
    database: {
        host: process.env.DATABASE_HOST || 'localhost',
        port: parseInt(process.env.DATABASE_PORT || '5432', 10),
        username: process.env.DATABASE_USER || 'postgres',
        password: process.env.DATABASE_PASSWORD || 'postgres',
        database: process.env.DATABASE_NAME || 'inventory_db',
        synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
        logging: process.env.DATABASE_LOGGING === 'true',
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'yourFallbackSuperSecretKey',
        expiresIn: process.env.JWT_EXPIRES_IN || '1h',
    },
});
exports.configuration = configuration;
//# sourceMappingURL=configuration.js.map