import { userSchema, bookSchema, borrowSchema, returnSchema } from "../schemas";

const functionObject = {
  users: userSchema,
  books: bookSchema,
  borrow: borrowSchema,
  return: returnSchema,
};

const getTypeOfReq = async (req) => {
  const str = req.originalUrl;
  const output = str.split("/").pop();
  return output;
};

export const validateRequest = async (req, res, next) => {
  const typeOfReq = await getTypeOfReq(req);
  const func = functionObject[`${typeOfReq}`];
  const { error } = func.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  next();
};
