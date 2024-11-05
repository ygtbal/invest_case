import Joi from "joi";

export const userSchema = Joi.object({
  name: Joi.string().min(2).required(),
  surname: Joi.string().min(2).required(),
});

export const bookSchema = Joi.object({
  name: Joi.string().required(),
  author: Joi.string().required(),
});

export const borrowSchema = Joi.object({
  user_id: Joi.number().min(1).required(),
  book_id: Joi.number().min(1).required(),
});

export const returnSchema = Joi.object({
  user_id: Joi.number().min(1).required(),
  book_id: Joi.number().min(1).required(),
  score: Joi.number().min(0).max(10).required(),
});
