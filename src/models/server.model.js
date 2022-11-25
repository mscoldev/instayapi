const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const corsOptions = {
    credentials: true,
    preflightContinue: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    origin: "*"
}

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.boxPath = '/api/box';


        //Middlewares
        this.middlewares();


        //Routes
        this.routes();


    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server running on port:", this.port);
        });
    }

    middlewares() {

        //CORS

        this.app.use(cors(corsOptions));

        // Morgan

        this.app.use(morgan('dev'));

        //JSON express

        this.app.use(express.json());



    }

    routes() {

        this.app.use(this.boxPath, require('../routes/sendbox.routes.js'));

    }

}

module.exports = Server;