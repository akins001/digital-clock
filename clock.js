function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    
    const formattedTime = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
    
    const clock = document.getElementById("clock");
    clock.textContent = formattedTime;
  }
  
  updateClock(); // Update clock immediately on page load
  setInterval(updateClock, 1000);
