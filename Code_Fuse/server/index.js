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


   // Listen for 'connection' event on the 'io' instance, which triggers whenever a new client connects.
io.on('connection',(socket)=>{
    console.log('socket conneted',socket.id );
   
    // Listen for 'JOIN' action from the client.
      socket.on(ACTIONS.JOIN,({roomId, username})=>{
        // Map the socket ID to the username for identification.
       userSocketMap[socket.id]= username;
      
       // Make the socket join the specified room.
       socket.join(roomId);
      
       const clients = getAllConnectedClients(roomId);
       clients.forEach(({socketId})=>{
           // Emit a 'JOINED' action to each client in the room.
          io.to(socketId).emit(ACTIONS.JOINED,{
           clients,
           username:username,
           socketId:socket.id
          })
       })
      })

   
 } 