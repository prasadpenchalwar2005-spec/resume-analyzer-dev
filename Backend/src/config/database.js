const dns = require("dns")
dns.setDefaultResultOrder("ipv4first")
dns.setServers(["8.8.8.8","8.8.4.4"])

const mongoose = require("mongoose")



async function connectDB() {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to Database")
     }
     catch (err) {
        console.log(err)
    }
}


module.exports = connectDB