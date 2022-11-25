import express from "express";
import cors from "cors";
import morgan from "morgan";

const corsOptions = {
    credentials: true,
    preflightContinue: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    origin: "*"
}

export default class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server running on port:", this.port);
        });
    }

}




const app = express();

app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'));

console.log("Servidor corriendo, en el puerto:", app.get("port"));