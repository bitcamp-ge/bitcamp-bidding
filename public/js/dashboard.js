// Connect to the server-side Socket.IO
const socket = io()

socket.on("new_bid", function(bid) {
    const bidsContainer = document.getElementById("bids")
    const bidElement = document.createElement("div")
    bidElement.textContent = `New bid: ${bid.amount} by user ${bid.userId}`
    bidsContainer.appendChild(bidElement)
})