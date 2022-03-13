var kloksoort = 1;
var interval;


function showTimeSeconds() {
    clearInterval(interval);

    const today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    hours = check(hours);
    minutes = check(minutes);
    seconds = check(seconds);

    document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds;
    
    interval = setTimeout(showTimeSeconds, 1000);
}

function showTime() {
    clearInterval(interval);

    const today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();

    hours = check(hours);
    minutes = check(minutes);

    document.getElementById('clock').innerHTML = hours + ":" + minutes;
    
    interval = setTimeout(showTime, 1000);
}

function check(input) {                 // voegt een 0 toe zodat de klok er altijd als "hh:mm:ss" uitziet
    if (input < 10) {
        input = "0" + input;
    }

    return input;
}

function SwitchBetweenClocks() {
    switch(kloksoort)
    {
        case 1:
            showTimeSeconds();
            kloksoort = 2;
            break;
        case 2:
            showTime();
            kloksoort = 1;
            break;
        default:
            alert("Error with clock!");
            break;
    }
}
