console.table({ connection: process.env.TYPEORM_CONNECTION });

export default {
  type: process.env.MY_CONNECTION,
  host: process.env.MY_HOST,
  username: process.env.MY_USERNAME,
  password: process.env.MY_PASSWORD,
  database: process.env.MY_DATABASE,
  port: process.env.MY_PORT,
  loggin: true,
  migrations: ["./src/migrations/*{.ts,.js}"],
  entities: ["./src/entity/*{.ts,.js}"],
  cli: {
    migrationsDir: "./src/migrations",
  },
};
