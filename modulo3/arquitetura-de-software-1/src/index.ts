// adicionar rotas
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { AddressInfo } from "net";
import UserController from './controller/UserController'

const app = express();
app.use(express.json());
app.use(cors())
dotenv.config();

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

const userController = new UserController();
app.post("/users/signup", userController.signup);
