const express = require('express');
const app = express();
const path = require('path');
const connectDB = require("./config/dbConnect");
const contactRoutes = require("./routes/contactRoutes");
const projectRoutes = require("./routes/projectRoutes");
const navigationRoutes = require("./routes/navigationRoutes");
const bodyParser = require("body-parser");
const http = require('http');
const socketIO = require('socket.io');

const server = http.createServer(app);
const io = socketIO(server);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));

// MongoDB setup
connectDB();



io.on('connect', (socket) => {
  console.log('A user connected');

  // Handle chat message event
  socket.on('chatmessage', (message) => {
    console.log('Received message:', message);
    io.emit('hello', message);
  });

  // Handle disconnect event
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});


app.use("/contact", contactRoutes);
app.use("/project", projectRoutes);
app.use("/", navigationRoutes);


// Démarrer le serveur
const port = 3000; // Choisissez n'importe quel numéro de port que vous préférez
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
