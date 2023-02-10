import { v4 as uuidv4 } from "uuid";

export let users = [];

export const createUser = async (req, res) => {
  const user = req.body;
  const userid = uuidv4();

  const userwWithId = { ...user, id: userid };
  users.push(userwWithId);
  res.send(
    `User with the name ${req.body.firstName} added to the database! ${userwWithId.id}}`
  );
};

export const getUsers = async (req, res) => {
  const { id } = req.params;

  const founduser = users.find((user) => user.id === id);
  res.send(founduser);

  res.send(req.params);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`User with the id ${id} deleted from the database.`);
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const userTobeUpdated = users.find((user) => user.id === id);

  if (firstName) userTobeUpdated.firstName = firstName;
  if (lastName) userTobeUpdated.lastName = lastName;
  if (age) userTobeUpdated.age = age;
  res.send(`User with the id ${id} has been updated.`);
};
