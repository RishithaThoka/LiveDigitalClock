// Update clock every second
function updateClock() {
    const now = new Date();
    
    // Format time as HH:MM:SS
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Format date as "Month Day, Year, DayOfWeek"
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const month = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();
    const dayOfWeek = days[now.getDay()];
    const dateString = `${month} ${day}, ${year}, ${dayOfWeek}`;

    // Update DOM
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

// Run clock
setInterval(updateClock, 1000);
updateClock(); // Initial call