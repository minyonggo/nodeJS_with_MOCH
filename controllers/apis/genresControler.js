import genres from "../../data/genres";
import Joi from "@hapi/joi";
import { v4 as uuidv4 } from "uuid";

// functions
const checkID = (req) => {
  const { id } = req.params;
  return genres.find((gerne) => gerne.id === id);
};

const checkRequestBody = (req) => {
  const schema = Joi.object({
    genre: Joi.string().min(2).required(),
  });
  const { error } = schema.validate(req.body);
  return error;
};

// controllers
export const getAllGenres = (req, res) => {
  res.json(genres);
};
export const getOnegenre = (req, res) => {
  const checkIDResult = checkID(req);
  if (!checkIDResult) return res.status(400).json({ msg: "Wrong id number" });

  res.json(checkIDResult);
};

export const updateGenre = (req, res) => {
  const checkIDResult = checkID(req);
  if (!checkIDResult) return res.status(400).json({ msg: "Wrong id number" });

  const requestBodyError = checkRequestBody(req);
  if (requestBodyError)
    return res
      .status(400)
      .json({ msg: `Check your body Request ${requestBodyError}` });

  const { genre } = req.body;
  checkIDResult.genre = genre;
  res.json(genres);
};

export const addGenre = (req, res) => {
  const requestBodyError = checkRequestBody(req);
  if (requestBodyError)
    return res
      .status(400)
      .json({ msg: `Check your body Request ${requestBodyError}` });

  const { genre } = req.body;
  genres.push({ id: uuidv4(), genre });
  res.json(genres);
};

export const deleteGenre = (req, res) => {
  const checkIDResult = checkID(req);
  if (!checkIDResult) return res.status(400).json({ msg: "Wrong id number" });

  genres.splice(genres.indexOf(checkIDResult), 1);
  res.json(genres);
};
