export default {
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  port: process.env.TYPEORM_PORT,
  loggin: true,
  migrations: ["./src/migrations/*.ts"],
  entities: ["./src/entity/*.ts"],
  cli: {
    migrationsDir: "./src/migrations",
  },
};
