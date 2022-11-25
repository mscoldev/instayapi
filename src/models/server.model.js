import express from "express";
import cors from "cors";
import morgan from "morgan";

const corsOptions = {
    credentials: true,
    preflightContinue: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    origin: "*"
}

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT


    }


}




const app = express();

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'));

console.log("Servidor corriendo, en el puerto:", app.get("port"));