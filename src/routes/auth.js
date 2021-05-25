import express from "express";
import {login, signin} from "../controllers/auth"

const router = express.Router();

router.post("/login",login );
router.post("/signin", signin);

export default router;