
function displayClock() {
    const time = new Date();
    const formattedTime = time.toLocaleTimeString("en-US");
    const formattedDate = time.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    
    const clock = document.getElementById("clock");
    clock.innerText = formattedTime + "      ||     " + formattedDate;
}

setInterval(displayClock, 1000);