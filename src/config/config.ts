import { Dialect } from "sequelize";

interface SequelizeConfig {
    USERNAME: string;
    PASSWORD: string;
    DATABASE: string;
}

interface SequelizeOptions {
    host: string;
    dialect: Dialect;
    pool: {
        max: number;
        min: number;
        idle: number;
    };
    define: {
        timestamps: boolean
    },
    charset: string;
    collate: string;
    logging: boolean;
    log: any;
}

interface Config {
    SEQUELIZE: SequelizeConfig;
    SEQUELIZEOPTIONS: SequelizeOptions;
    APPLICATION_SERVER_PORT: number;
    APP_FORCE_SHUTDOWN_SECOND: number;
    API_KEY: string;
}

const config: Config = {
    SEQUELIZE: {
        USERNAME: process.env.MYSQL_USER || "root",
        PASSWORD: process.env.MYSQL_PASSWORD || "",
        DATABASE: process.env.MYSQL_DATABASE || "clean_architecture"
    },
    SEQUELIZEOPTIONS: {
        host: process.env.MYSQL_HOST || "localhost",
        dialect: "mysql",
        pool: {
            max: 20,
            min: 5,
            idle: 10000
        },
        define: {
            timestamps: false
        },
        charset: "utf8",
        collate: "utf8_general_ci",
        logging: false,
        log: console.log
    },
    APPLICATION_SERVER_PORT: Number(process.env.APPLICATION_SERVER_PORT) || 3000,
    APP_FORCE_SHUTDOWN_SECOND: Number(process.env.APP_FORCE_SHUTDOWN_SECOND) || 30,
    API_KEY: process.env.API_KEY || "abcd"
};

export default config;