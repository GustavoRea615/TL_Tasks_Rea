const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGODB_URL || 'mongodb+srv://grea615:TQQkKmToOfl2X6Qm@innovatube.pz728um.mongodb.net/tl_tasks?retryWrites=true&w=majority';

async function connectToDB() {
    await mongoose.connect(uri).then(()=>{
        console.log("DB is connected");
    }).catch((error)=>{
        console.log("DB is not connected", error.message);
    })
};

module.exports = connectToDB;
