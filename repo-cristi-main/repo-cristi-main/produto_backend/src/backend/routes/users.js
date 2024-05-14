import  express  from "express";
import {getUsers, addUser, updateUser, deleteUser }from "../controller/user.js";

const router = express.Router();

router.get("/user", getUsers);

router.post("/useradd", addUser)

router.put("/update:id", updateUser)

router.post("/delete:id", deleteUser)


export default router;