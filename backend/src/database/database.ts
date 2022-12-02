import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "atividade4",
    synchronize: true,
    logging: false,
    entities: ["src/models/*.ts"],
    subscribers: [],
    migrations: [],
})