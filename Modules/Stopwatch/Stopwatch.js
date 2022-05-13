var int;
var pauze = 0;
var iconStopw = 0;

var second = 0;
var minute = 0;
var hour = 0;

function OpenStopwatch() {
    if (iconStopw == 0)
    {
        iconTimer = 0;
        document.getElementById('tmr').style.visibility = "hidden";
        ResetTimer();

        iconStopw = 1;
        document.getElementById('stopw').style.visibility = "visible";
    }
    else
    {
        iconStopw = 0;
        document.getElementById('stopw').style.visibility = "hidden";
        ResetStopwatch();
    }
}

function check(input) {                 // voegt een 0 toe zodat de klok er altijd als "hh:mm:ss" uitziet
    if (input < 10) {
        input = "0" + input;
    }

    return input;
}

function StartStopwatch() {
    if (pauze == 0)
    {
        pauze = 1;
        document.getElementById('StartStop').innerHTML = "Pause";
        Stopwatch();
    }
    else {                              // if (pauze == 1) {...}
        pauze = 0;
        document.getElementById('StartStop').innerHTML = "Start";
        clearTimeout(int);
    }
}

function Stopwatch() {
    clearTimeout(int);

    var h, m, s;

    second++;

    if (second == 60) {
        second = 0;
        minute++;
    }
    
    if (minute == 60) {
        minute = 0;
        hour++;
    }

    // voeg een 0 toe indien er geen 2 cijfers zijn bv 5 wordt 05
    h = check(hour);
    m = check(minute);
    s = check(second);

    document.getElementById('stopwatch').innerHTML = h + ':' + m + ':' + s;

    int = setTimeout(Stopwatch, 1000);
}

function ResetStopwatch() {
    clearTimeout(int);

    pauze = 0;                      // anders zal je soms 2x op de start knop moeten klikken!
    document.getElementById('StartStop').innerHTML = "Start";

    second = 0;
    minute = 0;
    hour = 0;

    s = check(second);
    m = check(minute);
    h = check(hour);

    document.getElementById('stopwatch').innerHTML = h + ':' + m + ':' + s;
}
