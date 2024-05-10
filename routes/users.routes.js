const express = require("express");
const {
  getAllusers,
  createUser,
  upadateUser,
  deleteUser,
} = require("../controller/users.controler");
const router = require("express").Router();

router.get("/", getAllusers);
router.post("/", createUser);
router.put("/:id", upadateUser);
router.delete("/:id", deleteUser);

module.exports = router;
