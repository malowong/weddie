import Knex from "knex";
import dotenv from 'dotenv';
dotenv.config();

import knexConfig from "./knexfile";
export const knex = Knex(knexConfig[process.env.NODE_ENV || "development"]);

import express from "express";
import { logger } from "./utils/logger";

const app = express();
app.use(express.json());


app.use((req, res, next) => {
  const cur = new Date().toISOString();
  logger.info(`${cur} req path: ${req.path} method: ${req.method}`);
  res.setHeader("app-version", "1.2.3");
  next();
});

import { routes } from "./routes";
const API_VERSION = "/api";
app.use(API_VERSION, routes);

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => {
  logger.info(`[info] listening to port ${PORT}`);
});
