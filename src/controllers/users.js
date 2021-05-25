import {Users} from "../models/";
import bcrypt from "bcryptjs";

export const create = async (req, res) => {
    try{
        //Encriptar la constraseña
        let hashPass = bcrypt.hashSync(req.body.password, 10);
        req.body.password = hashPass;
        //Insertar en db    
        let results = await Users.create(req.body);
        res.json(results);
    } catch(error){
        res.status(400).json({
            message: "No se pudo agregar el usuaio en el sistema"
        });
    }
}

export const getAll = async(req, res) => {
    try {
        let results = await Users.findAll();
        res.json(results);
    } catch(error) {
        res.status(400).json({
            message: "Hubo un error al procesar tu petición"
        });
    }
}