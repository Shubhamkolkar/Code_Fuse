const  express = require('express')
const app = express();


const {Server}= require("socket.io")
const http = require('http');

env.config();
const server = http.createServer(app);
const io= new Server(server);

const port = process.env.PORT || 5000;   


app.use(express.static(path.join(__dirname, 'client')));


// Middleware to handle all other routes
app.get('*', (req, res) => {
    
    res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
  });


  function getAllConnectedClients(roomId){
    // Convert the set of socket IDs in the specified 'roomId' to an array using Array.from(),
// retrieving the socket IDs from the Socket.IO sockets adapter and the rooms associated with 'roomId'.
// This allows for easy manipulation or iteration over the list of socket IDs.
   return  Array.from(io.sockets.adapter.rooms.get(roomId) || []).map((socketId)=>{
    return {
        socketId,
        username:userSocketMap[socketId],
    }
   });

 } 