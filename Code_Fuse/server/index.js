const  express = require('express')
const app = express();


const {Server}= require("socket.io")
const http = require('http');

env.config();
const server = http.createServer(app);
const io= new Server(server);

const port = process.env.PORT || 5000;   


app.use(express.static(path.join(__dirname, 'client')));