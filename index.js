const express = require("express")
const http = require("http")
const axios = require("axios")
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

app.post("/bid", async (req, res) => {
    const { amount, token } = req.body

    const floatAmount = parseFloat(amount)
    if (isNaN(floatAmount)) {
        return res.status(400).json({ error: "Invalid bid amount" })
    }

    try {
        const authResponse = await axios.get("https://platform.bitcamp.ge/auth/profile", {
            headers: { Authorization: `Token ${token}` }
        })

        const userId = authResponse.data.id

        const newBid = await prisma.bid.create({
            data: {
                amount: floatAmount,
                userId
            }
        })

        res.status(201).json(newBid)
    } catch (error) {
        if (error.response) {
            return res.status(401).json({
                error: "Failed to authenticate with BitCamp API", details: error.response.data
            })
        } else if (error.request) {
            return res.status(500).json({
                error: "No response from BitCamp API", details: error.message
            })
        } else {
            return res.status(500).json({
                error: error.message
            })
        }
    }
})

// Start the server
const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
