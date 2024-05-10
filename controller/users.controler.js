let users = require("../models/user.model");
const { v4: uuidv4 } = require("uuid");

//get
const getAllusers = (req, res) => {
  res.status(200).json({ users });
};
//create user
const createUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    username: req.body.username,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(200).json(users);
};
//update user
const upadateUser = (req, res) => {
  const userid = req.params.id;
  const { username, email } = req.body;
  users
    .filter((user) => user.id === userid)
    .map((selectedUser) => {
      selectedUser.username = username;
      selectedUser.email = email;
    });
  res.status(201).json(users);
};
//delete User
const deleteUser = ( req, res) =>{
     const userid = req.params.id;
     const {username, email} = req.body;
    const filerdata =  users.filter((user)=> user.id === userid)
      res.status(201).json(filerdata);
     

}

module.exports = { getAllusers, createUser, upadateUser, deleteUser };
