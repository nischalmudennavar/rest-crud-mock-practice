import { v4 as uuidv4 } from "uuid";

export let users = [];

export const createUser = async (req, res) => {

  const user = req.body; // get the user from the request body
  const userid = uuidv4(); // generate a unique id
  const userWithId = { ...user, id: userid }; // add the id to the user object
  users.push(userwWithId); // add the user to the users array
  res.send(
    `User with the name ${req.body.firstName} added to the database! ${userWithId.id}}`
  );

};

export const getUsers = async (req, res) => {

  const { id } = req.params; // get the id from the request params from the url
  const founduser = users.find((user) => user.id === id); // find the user with the id
  res.send(founduser); // send the user back to the client
  res.send(req.params); // send the user back to the client

};

export const deleteUser = async (req, res) => {

  const { id } = req.params; // get the id from the request params from the url
  users = users.filter((user) => user.id !== id); // filter out the user with the id
  res.send(`User with the id ${id} deleted from the database.`); // send the user back to the client
};

export const updateUser = async (req, res) => {

  const { id } = req.params; // get the id from the request params from the url
  const { firstName, lastName, age } = req.body; // get the user from the request body
  // find method using id
  const userTobeUpdated = users.find((user) => user.id === id); // find the user with the id
  if (firstName) userTobeUpdated.firstName = firstName; // update the user
  if (lastName) userTobeUpdated.lastName = lastName;  // update the user
  if (age) userTobeUpdated.age = age; // update the user

  res.send(`User with the id ${id} has been updated.`); // send the user back to the client



};
