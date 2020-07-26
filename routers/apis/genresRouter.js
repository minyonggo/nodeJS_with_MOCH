import express from "express";
import {
  getAllGenres,
  getOnegenre,
  updateGenre,
  addGenre,
  deleteGenre,
} from "../../controllers/apis/genresControler";
import routes from "../../routes";

const genresRouter = express.Router();

genresRouter.get("/", getAllGenres);
genresRouter.get(routes.apiGenreDetail, getOnegenre);
genresRouter.put(routes.apiGenreUpdate, updateGenre);
genresRouter.post("/", addGenre);
genresRouter.delete(routes.apiGenreDelete, deleteGenre);

export default genresRouter;
