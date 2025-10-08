const mongoose = require('mongoose');

async function connectDb() {

    try {

        await mongoose.connect(process.env.MONGOOSE_URI)

        console.log("Connected to MONGODB")
        
    } catch (error) {
        console.log("Error connectiong to MONGODB:", error)
    }
    
}   

module.exports = connectDb