"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const Joi = require("joi");
const validate = (config) => {
    const schema = Joi.object({
        NODE_ENV: Joi.string()
            .valid('development', 'production', 'test')
            .default('development'),
        PORT: Joi.number().default(3000),
        DATABASE_HOST: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
        DATABASE_USER: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_SYNCHRONIZE: Joi.boolean().default(false),
        DATABASE_LOGGING: Joi.boolean().default(false),
    });
    const { error, value } = schema.validate(config, { abortEarly: false, allowUnknown: true });
    if (error) {
        throw new Error(`Validation failed - Invalid environment variables: ${error.message}`);
    }
    return value;
};
exports.validate = validate;
//# sourceMappingURL=validation.js.map