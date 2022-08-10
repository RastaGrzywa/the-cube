import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import User from './model/User.js';


const app = express()



async function main () {
    await mongoose.connect(process.env.DB_URL);

    
    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.on('connected', function () {  
        console.log('Mongoose default connection open');
    }); 


    User.find({}, function(err, users) {
        console.log(users);
    });




    // A sample route
    app.get('/', (req, res) => {

        res.send('Hello World!')
    })



    // start the server listening for requests
    app.listen(process.env.PORT || 3000, 
        () => console.log("Server is running..."));

}

main();


