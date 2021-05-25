import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth"
import usersRouter from "./routes/users";
import sendEmail from "./utils/nodemailer";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use(authRouter);
app.use(usersRouter);


app.listen(PORT, () => {
    console.log("SERVIDOR ESCUCHADO EN EL PUERTO", PORT);
});

app.post("/send-email", (req, res) => {
    try{    
        sendEmail();
        res.json({
            message: "El correo se ha enviado correctamente"
        });
    }catch(error){
        console.log(error);
    }
});

export default app;