function clock() {
  setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    // HH:MM::SS AM/PM

    let isAfternoon = 'AM'
    if (hour >= 12) {
      isAfternoon = 'PM'
      hour = hour - 12
    }

    if (hour == 0) {
      hour = 12
    }
    
    console.log(hour + ":" + date.getMinutes() + ":" + date.getSeconds(), isAfternoon);
  }, 1000)
}
clock()
