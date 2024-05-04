document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault()

    const phoneNumber = document.getElementById("phone_number").value
    const password = document.getElementById("password").value
    const loginData = { username: phoneNumber, password: password }

    fetch("https://platform.bitcamp.ge/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            localStorage.setItem("bitcampToken", data.token)
            document.getElementById("message").textContent = "შესვლა წარმატებულია!"
            window.location.href = "/dashboard"
        } else {
            throw new Error("შესვლა წარუმატებელია")
        }
    })
    .catch(error => {
        document.getElementById("message").textContent = "შეცდომა: " + error.message
    })
})
