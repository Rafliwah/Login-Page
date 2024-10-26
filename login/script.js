function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {
        alert("Login successful!");
    } else {
        alert("Invalid username or password. Please try again.");
    }

    function login() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
    
        // Contoh sederhana validasi username dan password
        if (username === "admin" && password === "password") {
            alert("Login successful!");
            window.location.href = "welcome.html"; // Arahkan ke halaman welcome.html 
        } else {
            alert("Invalid username or password. Please try again.");
        }
    }
    
    
}
