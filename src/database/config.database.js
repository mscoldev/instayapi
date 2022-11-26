const mongoose = require('mongoose');
const remoteDatabase = process.env.MONGODB_CNN;

const config = { serverSelectionTimeoutMS: 3000 }

const dbConnection = async () => {
    try {
        console.log("Intentando conectar a la base de datos..." + remoteDatabase);
        await mongoose.connect(remoteDatabase, config);
        console.log('Database Remote Online OK!...>');
    } catch (error) {
        console.error(error.reason);
    }
}

module.exports = {
    dbConnection
}