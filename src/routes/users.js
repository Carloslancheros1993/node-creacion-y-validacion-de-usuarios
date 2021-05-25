import express from "express";
import {create, getAll} from "../controllers/users";
import {validate, userSchema} from "../middlewares/validators";
import {validateJWT} from "../middlewares/jwt";

const router = express.Router();

router.get("/users", validateJWT, getAll);
router.post("/users", validate(userSchema), create);

export default router;