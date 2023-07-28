import express from "express";

const app = express();
const port = "http://localhost:8000/";

import { connectDB } from "./data/database.js";

connectDB();
app.listen(process.env.PORT, () => {
  console.log(
    `server listening on port:${process.env.PORT} on Mode ${process.env.NODE_ENV}`
  );
});
