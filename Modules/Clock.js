function showTime() {
    const today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    hours = check(hours);
    minutes = check(minutes);
    seconds = check(seconds);

    document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds;
    
    setTimeout(showTime, 1000);
}

function check(input) {                 // voegt een 0 toe zodat de klok er altijd als "hh:mm:ss" uitziet
    if (input < 10) {
        input = "0" + input;
    }

    return input;
}

showTime();
