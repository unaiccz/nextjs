const mongoose = require('mongoose');
const DB_MONGO = "mongodb+srv://unaicc:root1@cluster0.fsfuawz.mongodb.net/graph"
const connectDB = async () => {



    try{

    await mongoose.connect(DB_MONGO, {});
    console.log('DB connected')

    } catch(error){

        console.log(error);
        process.exit(1);

    }
}

module.exports = connectDB;