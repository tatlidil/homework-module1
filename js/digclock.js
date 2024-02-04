  //Create a time function
  function currentTime() {
    var d= new Date (); //Get current date
    var hr= d.getHours(); //Get current hours
    var min= d.getMinutes(); //Get current minutes
    var sec= d.getSeconds(); //Get current seconds
    var ampm; //Declare empty variable to store AM or PM
    var utchr = d.getUTCHours();
    var timeDiff;
    var adjTimeDiff;
    var timeZone;

    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min;
    }

    // Convert GMT to local time
    var gmtOffset = 0; 
    var gmtHr = utchr + gmtOffset;

    // Determine AM or PM string for local time
    if (hr == 12) {
        ampm = "PM";
    } else if (hr > 12) {
        hr -= 12;
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    // Adjust the hour to 12-hour format for local time
    if (hr > 12) {
        hr -= 12;
    }

    // Handle midnight for local time
    if (hr === 0) {
        hr = 12;
    }

    // Calculate time difference
    timeDiff = hr - gmtHr;

    // Convert negative time difference to positive
    adjTimeDiff = Math.abs(timeDiff);

    // Determine time zone abbreviation based on time difference
    switch (adjTimeDiff) {
        case 8:
            timeZone = "PT";
            break;
        case 7:
            timeZone = "MT";
            break;
        case 6:
            timeZone = "CT";
            break;
        case 5:
            timeZone = "ET";
            break;
        default:
            timeZone = "Unknown";
    }
    
    var localTime = hr + ":" + min + ":" + sec + " " + ampm;
    var gmtTime = gmtHr + ":" + min + ":" + sec + " GMT";
    var formattedTime = localTime + " " + timeZone;

    // Display local time, GMT time, adjusted time difference, and time zone
    document.getElementById("clock").innerText = formattedTime;

    setInterval(currentTime, 1000);
}

currentTime();


