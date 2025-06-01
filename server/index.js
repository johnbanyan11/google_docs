const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors"); // <-- Import cors
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const documentRoutes = require("./routes/documentRoutes");
const socketHandler = require("./socket/socketHandler");

const app = express();
const server = http.createServer(app);

// Use CORS middleware to allow all origins
app.use(cors()); // <-- Allow CORS for all origins

const io = new Server(server, {
  cors: {
    origin: "*", // <-- Allow all origins for Socket.IO
    methods: ["GET", "POST"],
  },
});

// Middlewares
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/docs", documentRoutes);

// Connect to DB and start server
connectDB();
socketHandler(io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
