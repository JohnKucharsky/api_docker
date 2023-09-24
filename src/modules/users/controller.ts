import { Request, Response } from "express";

import { CreateUser, EditUser, DeleteUser } from "./schema";
import { db } from "../../db/db";
import { users } from "../../db/schema";
import { eq } from "drizzle-orm";

export async function getUsers(_: Request, res: Response) {
  try {
    const _users = await db.select().from(users);

    res.send(_users);
  } catch (e) {
    res.status(400).send(e);
  }
}

export async function createUser(
  req: Request<unknown, unknown, CreateUser["body"]>,
  res: Response,
) {
  try {
    const user = await db.insert(users).values(req.body).returning();

    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
}

export async function updateUser(
  req: Request<EditUser["params"], unknown, CreateUser["body"]>,
  res: Response,
) {
  try {
    const newUser = await db
      .update(users)
      .set(req.body)
      .where(eq(users.id, Number(req.params.id)))
      .returning();

    res.send(newUser);
  } catch (e) {
    res.status(400).send(e);
  }
}

export async function deleteUser(
  req: Request<DeleteUser["params"]>,
  res: Response,
) {
  try {
    const result = await db
      .delete(users)
      .where(eq(users.id, Number(req.params.id)))
      .returning();

    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
}
