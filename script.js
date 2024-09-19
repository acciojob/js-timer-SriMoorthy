function updateTime() {
    const now = new Date();

    // Get the day, month, and year
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
    const year = now.getFullYear();

    // Get hours, minutes, and seconds
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Format the date and time as "day/month/year, hours:minutes:seconds"
    const formattedTime = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;

    // Display the formatted time in the <p> tag with id="timer"
    document.getElementById('timer').textContent = formattedTime;
}

// Update the time every second (1000 ms)
setInterval(updateTime, 1000);

// Initialize the time immediately when the page loads
updateTime();


