require('dotenv').config();
const app = require('./src/app');
const connectDb = require('./src/db/db');
const initSocketServer = require('./src/sockets/socket.server');
const httpSever = require('http').createServer(app);


connectDb()
initSocketServer(httpSever)

httpSever.listen(3000, () => {
    console.log("Server is running on port 3000")
})