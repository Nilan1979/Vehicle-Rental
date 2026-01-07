const express = require('express');
const router =  express.Router();

//Insert  Model
const User = require("../Models/UserModel");
//Insert User Controllers
const UserControllers = require("../Controllers/UserControllers");

router.get("/",UserControllers.getAllUsers);
router.post("/",UserControllers.addUser);
router.get("/:id",UserControllers.getById);
router.put("/:id",UserControllers.updateUser);
router.delete("/:id",UserControllers.deleteUser);



//export router
module.exports = router;
