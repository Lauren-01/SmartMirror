var kloksoort = 1;
var intervalklok;


function showTimeSeconds() {
    clearTimeout(intervalklok);

    document.getElementById('clock').style.border = "none";     // cirkel van analoge klok terug verwijderen!

    const today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    hours = check(hours);
    minutes = check(minutes);
    seconds = check(seconds);

    document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds;
    
    intervalklok = setTimeout(showTimeSeconds, 1000);
}

function showTime() {
    clearTimeout(intervalklok);

    const today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();

    hours = check(hours);
    minutes = check(minutes);

    document.getElementById('clock').innerHTML = hours + ":" + minutes;
    
    intervalklok = setTimeout(showTime, 1000);
}

function showTimeAMPM() {
    clearTimeout(intervalklok);

    const today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();

    hours = check(hours);
    minutes = check(minutes);
    
    if (hours >= 12)
    {
        if (hours == 12) 
        {
            document.getElementById('clock').innerHTML = hours + ":" + minutes + " PM";
        }
        else
        {
            hours = hours - 12;
            hours = check(hours);
            document.getElementById('clock').innerHTML = hours + ":" + minutes + " PM";
        }
    }
    else
    {
        document.getElementById('clock').innerHTML = hours + ":" + minutes + " AM";
    }
    
    intervalklok = setTimeout(showTimeAMPM, 1000);
}

function check(input) {                 // voegt een 0 toe zodat de klok er altijd als "hh:mm:ss" uitziet
    if (input < 10) {
        input = "0" + input;
    }

    return input;
}


function analogClock() {
    clearTimeout(intervalklok);
    
    const hour = document.createElement('div');                         // .innerHTML verwijderd alles ook de divs in de clock
    const minute = document.createElement('div');                       // hier creëren we een nieuwe constante met als waarde een div
    const second = document.createElement('div');

    const today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    var hourrotation = 30 * hours + minutes / 2;
    var minuterotation = 6 * minutes;
    var secondrotation = 6 * seconds;

    document.getElementById('clock').style.border = "2px solid white";
    document.getElementById('clock').style.borderRadius = "50%";

    document.getElementById('clock').innerHTML = "";

    hour.id = "hour";                                                   // Hier geven we de div een id
    minute.id = "minute";
    second.id = "second";

    document.getElementById("clock").appendChild(hour);                 // Hier voegen we de divs toe aan de div van clock
    document.getElementById("clock").appendChild(minute);
    document.getElementById("clock").appendChild(second);

    document.getElementById('hour').style.transform = `rotate(${hourrotation}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuterotation}deg)`;
    document.getElementById('second').style.transform = `rotate(${secondrotation}deg)`;

    intervalklok = setTimeout(analogClock, 1000);
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
            kloksoort = 3;
            break;
        case 3:
            showTimeAMPM();
            kloksoort = 4;
            break;
        case 4:
            analogClock();
            kloksoort = 1;
            break;
        default:
            alert("Error with clock!");
            break;
    }
}
