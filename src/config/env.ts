import { config } from "dotenv";
import { resolve } from "path";

config({
  path: resolve(
    __dirname,
    "..",
    "..",
    process.env.NODE_ENV === "developer" ? ".env.dev" : ".env"
  ),
});
// config({
//   path: resolve(__dirname, "..", "..", ".env"),
// });
