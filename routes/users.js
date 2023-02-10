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

router.post("/", createUser);

router.get("/:id", getUsers);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
