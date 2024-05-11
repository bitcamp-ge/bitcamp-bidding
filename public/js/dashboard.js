// Connect to the server-side Socket.IO
const socket = io()

socket.on("load_bids", function (bids) {
    const bidsContainer = document.getElementById("bids");
    bids.forEach(bid => {
        const bidElement = document.createElement("div");
        bidElement.textContent = `Bid: ${bid.amount} by user ${bid.userId} at ${new Date(bid.createdAt).toLocaleString()}`;
        bidsContainer.appendChild(bidElement);
    });
});

socket.on("new_bid", function (bid) {
    const bidsContainer = document.getElementById("bids")
    const bidElement = document.createElement("div")
    bidElement.textContent = `New bid: ${bid.amount} by user ${bid.userId}`
    bidsContainer.appendChild(bidElement)
})

document.getElementById("bidForm").addEventListener("submit", function (event) {
    event.preventDefault()
    const bidAmount = document.getElementById("bidAmount").value

    fetch("/bid", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("bitcampToken")}`
        },
        body: JSON.stringify({ amount: bidAmount, token: localStorage.getItem("bitcampToken") })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Bid submitted:", data)
    })
    .catch(error => {
        console.error("Error submitting bid:", error)
    })
})