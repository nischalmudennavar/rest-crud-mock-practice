import express from "express";

import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();

const PORT = 5000;

app.use(bodyParser.json());

app.use("/users", usersRoutes); // use the usersRoutes for all routes starting with /users

// test route

app.get("/", (req, res) => {
  res.send("Hello World");
  console.log("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
