import express from "express";
import genresRouter from "./routers/apis/genresRouter";
import routes from "./routes";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
app.use(routes.apiGenres, genresRouter);

export default app;
