export declare const configuration: () => {
    port: number;
    database: {
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
        synchronize: boolean;
        logging: boolean;
    };
    jwt: {
        secret: string;
        expiresIn: string;
    };
};
