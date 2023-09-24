import { number, object, string, TypeOf } from "zod";

const body = {
  body: object({
    fullName: string().min(5),
    phone: string().nullable().optional(),
    address: string().nullable().optional(),
    score: number().nullable().optional(),
  }),
};

const params = {
  params: object({
    id: string(),
  }),
};

export const createUserSchema = object({
  ...body,
});

export const updateUserSchema = object({
  ...body,
  ...params,
});

export const deleteUserSchema = object({
  ...params,
});

export type CreateUser = TypeOf<typeof createUserSchema>;
export type EditUser = TypeOf<typeof updateUserSchema>;
export type DeleteUser = TypeOf<typeof deleteUserSchema>;
