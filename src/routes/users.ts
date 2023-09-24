import { Router } from "express";

import validate from "../utils/validate";
import {
  createUserSchema,
  deleteUserSchema,
  updateUserSchema,
} from "../modules/users/schema";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../modules/users/controller";

const usersRouter = Router();

/*Users*/
usersRouter.get("/", getUsers);
usersRouter.post("/", [validate(createUserSchema)], createUser);
usersRouter.put("/:id", [validate(updateUserSchema)], updateUser);
usersRouter.delete("/:id", [validate(deleteUserSchema)], deleteUser);
/*Users End*/

export default usersRouter;
