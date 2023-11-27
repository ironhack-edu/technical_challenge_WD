const mongoose = require ("mongoose");

const  mongodbURI= process.env.MONGODB_URI ||"mongodb://127.0.0.1:27017/technical-Challenge";

mongoose.connect(mongodbURI)
.then(() => console.info(`Succesfuly connected to the database ${mongodbURI}`))
.catch(error => console.error(`An error trying to connect to the database ${mongodbURI}`))