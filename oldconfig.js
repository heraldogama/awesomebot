const dotenv = require("dotenv");
const resolve = require("path");

dotenv.config({
  path: resolve(
    __dirname,
    "..",
    "..",
    process.env.NODE_ENV === "developer" ? ".env.dev" : ".env"
  ),
});
module.exports = {
  type: process.env.MY_CONNECTION,
  host: process.env.MY_HOST,
  username: process.env.MY_USERNAME,
  password: process.env.MY_PASSWORD,
  database: process.env.MY_DATABASE,
  port: process.env.MY_PORT,
  loggin: true,
  migrations: process.env.MY_MIGRATIONS,
  entities: process.env.MY_ENTITIES,
  cli: {
    migrationsDir: process.env.MY_MIGRATIONS_DIR,
  },
};
