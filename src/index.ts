import express from "express";
import morgan from "morgan";
import { client } from "./db/db";
import usersRouter from "./routes/users";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

(async () => {
  app.listen(1337);
  await client.connect();
})().catch(console.error);

app.use(morgan("dev"));

app.use("/users", usersRouter);
