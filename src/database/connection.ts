import { createConnection } from "typeorm";

createConnection()
  .then((connection) => {
    console.log(
      `Conected with success in DataBase...${connection.isConnected}`
    );
  })
  .catch((error) => {
    console.error(error);
  });
