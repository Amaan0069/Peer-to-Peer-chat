
import { Server } from 'socket.io';
import Message from '../models/Message.js';

let onlineUsers = {};
//CORS for all ports 
const initializeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: '*',
    }
  });

  io.on('connection', (socket) => {
    console.log('New client connected and registered: ' + socket.id);

    socket.on('user_connected', async (userId) => {
      onlineUsers[userId] = socket.id;
      console.log(`User ${userId} is online and connected `);

      // Send any undelivered messages to the registered user who is connected
      //The undelivered messages are already stored in the databses when users sents.
      //From databse it should consume those
      const undeliveredMessages = await Message.find({ receiver: userId, delivered: false });
      for (const msg of undeliveredMessages) {
        socket.emit('receive_message', msg);
        msg.delivered = true;
        await msg.save();
      }

      io.emit('update_online', onlineUsers);
    });

    socket.on('send_message', async (data) => {
      const { sender, receiver, content } = data;
      const newMessage = new Message({ sender, receiver, content, timestamp: new Date() });
      await newMessage.save();

      // Emit to sender so they see their own message
      //Sender should also see thier own messages
      if (onlineUsers[sender]) {
        io.to(onlineUsers[sender]).emit('receive_message', newMessage);
      }
      // Emit to receiver if online
      // even if users is online, and sees messages....Those should be still stored
      if (onlineUsers[receiver]) {
        io.to(onlineUsers[receiver]).emit('receive_message', newMessage);
        newMessage.delivered = true;
        await newMessage.save();
      }
    });

    socket.on('disconnect', () => {
      for (const [userId, sockId] of Object.entries(onlineUsers)) {
        if (sockId === socket.id) {
          console.log(`User ${userId} disconnected`);
          delete onlineUsers[userId];
          break;
        }
      }
      io.emit('update_online', onlineUsers);
    });
  });
};

export default initializeSocket;
