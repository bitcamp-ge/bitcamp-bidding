const express = require("express")
const http = require("http")
const socketIo = require("socket.io")
const { PrismaClient } = require("@prisma/client")
const path = require("path")

const app = express()
const server = http.createServer(app)
const io = socketIo(server)
const prisma = new PrismaClient()

app.use(express.json())
// Serve static files from public directory
app.use(express.static("public"))

// Socket.IO for real-time updates
io.on("connection", (socket) => {
    console.log("New client connected")
    socket.on("disconnect", () => {
        console.log("Client disconnected")
    })
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"))
})

app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "dashboard.html"))
})


// Start the server
const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
