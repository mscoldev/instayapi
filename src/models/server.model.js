const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { dbConnection } = require('../database/config.database')

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
        this.userPath = '/api/users';
        this.orderPath = '/api/orders';
        this.authPath = '/api/auth';

        this.Initialize();


        //Middlewares
        this.middlewares();


        //Routes
        this.routes();


    }

    async Initialize() {
        await Promise.all([
            dbConnection(),
        ])
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
        this.app.use(this.userPath, require('../routes/users.routes.js'));
        this.app.use(this.orderPath, require('../routes/orders.routes.js'));
        this.app.use(this.authPath, require('../routes/auth.routes.js'));

    }

}

module.exports = Server;