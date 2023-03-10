import express from "express";

import {
  updateUser,
  deleteUser,
  getUsers,
  createUser,
  users,
} from "./../controllers/User-controller.js";

const router = express.Router();


router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", createUser); // create a new user using createUser from the controller

router.get("/:id", getUsers); // get a user by id

router.delete("/:id", deleteUser); // delete a user by id

router.patch("/:id", updateUser); // update a user by id

export default router; // export the router
