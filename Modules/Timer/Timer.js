var int;
var iconTimer = 0;

var pauzeTimer = 0;

var second = 0;
var minute = 0;
var hour = 0;

var tmr = document.getElementById('tmr');
var stopw = document.getElementById('stopw');

var AddTenH = document.getElementById('addTenH');
var RemoveTenH = document.getElementById('removeTenH');
var AddOneH = document.getElementById('addOneH');
var RemoveOneH = document.getElementById('removeOneH');
var AddTenM = document.getElementById('addTenM');
var RemoveTenM = document.getElementById('removeTenM');
var AddOneM = document.getElementById('addOneM');
var RemoveOneM = document.getElementById('removeOneM');
var AddTenS = document.getElementById('addTenS');
var RemoveTenS = document.getElementById('removeTenS');
var AddOneS = document.getElementById('addOneS');
var RemoveOneS = document.getElementById('removeOneS');


function OpenTimer() {
    if (iconTimer == 0)
    {
        iconStopw = 0;
        stopw.style.visibility = "hidden";
        ResetStopwatch();
        
        iconTimer = 1;
        tmr.style.visibility = "visible";
    }
    else
    {
        iconTimer = 0;
        tmr.style.visibility = "hidden";
        ResetTimer();
    }
}


function AddTenHour() {
    if (hour < 20) {
        hour += 10;                                         // Pijltje indrukken zal maar reageren tot 20, daarna niet meer (max 1 dag timen)
        AddTenH.style.opacity = "1";                        // Maak het pijltje omhoog volledig zichtbaar
        RemoveOneH.style.opacity = "1";                     // Maak het minuten pijltje omlaag volledig zichtbaar
        RemoveTenH.style.opacity = "1";                     // Maak het pijltje omlaag volledig zichtbaar (staat automatisch op 50% zichtbaar)
    }
    
    if (hour >= 20) {
        AddTenH.style.opacity = "0.5";                      // Wanneer de uren 20 zijn zal het pijltje omhoog 50% zichtbaar worden
    }

    if (hour > 24) {                                        // Wanneer er bij bv 18 nog 10 bij worden geteld stopt het automatisch bij 24u en worden beide
        AddTenH.style.opacity = "0.5";                      
        AddOneH.style.opacity = "0.5";                      // pijltjes 50% zichtbaar
        hour = 24;
    }

    ShowTimer();
}

function RemoveTenHour() {
    if (hour >= 10) {
        hour -= 10;
        AddTenH.style.opacity = "1";
        AddOneH.style.opacity = "1";
        RemoveTenH.style.opacity = "1";
    }

    if (hour < 10) {
        RemoveTenH.style.opacity = "0.5";
    }

    if (hour == 00) {
        RemoveOneH.style.opacity = "0.5";
    }

    ShowTimer();
}

function AddOneHour() {
    if (hour < 24) {
        hour++;
        AddOneH.style.opacity = "1";
        RemoveOneH.style.opacity = "1";
    }
    
    if (hour == 24){
        AddOneH.style.opacity = "0.5";
    }

    if (hour >= 20) {                                       // Wanneer de uren 20 of meer zijn zal het pijltje omhoog 50% zichtbaar worden
        AddTenH.style.opacity = "0.5";                      // moet hier staan want wse gebruiken het pijltje omhoog voor aanpassingen
    }

    if (hour >= 10) {
        RemoveTenH.style.opacity = "1";
    }

    ShowTimer();
}

function RemoveOneHour() {
    if (hour > 0) {
        hour--;
        AddOneH.style.opacity = "1";
        RemoveTenH.style.opacity = "1";
    }

    if (hour < 20) {
        AddTenH.style.opacity = "1";
    }

    if (hour < 10) {
        RemoveTenH.style.opacity = "0.5";
    }

    if (hour == 0) {
        RemoveOneH.style.opacity = "0.5";
    }

    
    ShowTimer();
}



function AddTenMinute() {
    if (minute < 50) {
        minute += 10;
        AddTenM.style.opacity = "1";                        // Maak het pijltje omhoog volledig zichtbaar
        RemoveOneM.style.opacity = "1";                     // Maak het minuten pijltje omlaag volledig zichtbaar
        RemoveTenM.style.opacity = "1";                     // Maak het pijltje omlaag van de uren volledig zichtbaar
    }
    
    if (minute >= 50) {                                     // Wanneer de minuten gelijk zijn 
        AddTenM.style.opacity = "0.5";                      // pijltjes 50% zichtbaar
    }

    ShowTimer();
}

function RemoveTenMinute() {
    if (minute >= 10) {
        minute -= 10;
        AddOneM.style.opacity = "1";
        RemoveTenM.style.opacity = "1";
    }

    if (minute < 50) {
        AddTenM.style.opacity = "1";
    }

    if (minute < 10) {
        RemoveTenM.style.opacity = "0.5";
    }

    if (minute == 0) {
        RemoveOneM.style.opacity = "0.5";
    }

    ShowTimer();
}

function AddOneMinute() {
    if (minute < 59) {
        minute++;
        AddOneM.style.opacity = "1";
        RemoveOneM.style.opacity = "1";
    }
    
    if (minute == 59){
        AddOneM.style.opacity = "0.5";
    }

    if (minute >= 50) {
        AddTenM.style.opacity = "0.5"
    }

    if (minute >= 10) {
        RemoveTenM.style.opacity = "1";
    }

    ShowTimer();
}

function RemoveOneMinute() {
    if (minute > 0) {
        minute--;
        AddOneM.style.opacity = "1";
        RemoveTenM.style.opacity = "1";
    }

    if (minute < 50) {
        AddTenM.style.opacity = "1";
    }

    if (minute < 10) {
        RemoveTenM.style.opacity = "0.5";
    }

    if (minute == 0) {
        RemoveOneM.style.opacity = "0.5";
    }

    ShowTimer();
}



function AddTenSecond() {
    if (second < 50) {
        second += 10;
        AddTenS.style.opacity = "1";                        // Maak het pijltje omhoog volledig zichtbaar
        RemoveOneS.style.opacity = "1";                     // Maak het minuten pijltje omlaag volledig zichtbaar
        RemoveTenS.style.opacity = "1";                     // Maak het pijltje omlaag van de uren volledig zichtbaar
    }
    
    if (second >= 50) {                                     // Wanneer de minuten gelijk zijn 
        AddTenS.style.opacity = "0.5";                      // pijltjes 50% zichtbaar
    }

    ShowTimer();
}

function RemoveTenSecond() {
    if (second >= 10) {
        second -= 10;
        AddOneS.style.opacity = "1";
        RemoveTenS.style.opacity = "1";
    }

    if (second < 50) {
        AddTenS.style.opacity = "1";
    }

    if (second < 10) {
        RemoveTenS.style.opacity = "0.5";
    }

    if (second == 0) {
        RemoveOneS.style.opacity = "0.5";
    }

    ShowTimer();
}

function AddOneSecond() {
    if (second < 59) {
        second++;
        AddOneS.style.opacity = "1";
        RemoveOneS.style.opacity = "1";
    }
    
    if (second == 59){
        AddOneS.style.opacity = "0.5";
    }

    if (second >= 50) {
        AddTenS.style.opacity = "0.5"
    }

    if (second >= 10) {
        RemoveTenS.style.opacity = "1";
    }

    ShowTimer();
}

function RemoveOneSecond() {
    if (second > 0) {
        second--;
        AddOneS.style.opacity = "1";
        RemoveTenS.style.opacity = "1";
    }

    if (second < 50) {
        AddTenS.style.opacity = "1";
    }

    if (second < 10) {
        RemoveTenS.style.opacity = "0.5";
    }

    if (second == 0) {
        RemoveOneS.style.opacity = "0.5";
    }

    ShowTimer();
}



function check(input) {                 // voegt een 0 toe zodat de klok er altijd als "hh:mm:ss" uitziet
    if (input < 10) {
        input = "0" + input;
    }

    return input;
}


function ShowTimer() {
    var h, m, s;
    
    h = check(hour);
    m = check(minute);
    s = check(second);

    document.getElementById('timer').innerHTML = h + ':' + m + ':' + s;
}


function StartTimer() {
    if (pauzeTimer == 0)
    {
        pauzeTimer = 1;
        document.getElementById('StartStopTimer').innerHTML = "Pause";
        Timer();
    }
    else {                              // if (pauze == 1) {...}
        pauzeTimer = 0;
        document.getElementById('StartStopTimer').innerHTML = "Start";
        clearTimeout(int);
    }
}

function Timer() {
    clearTimeout(int);

    var h, m, s;

    second--;

    if (second < 0) {
        if (hour > 0) {
            minute = 59;
            hour--;
        }
        if (minute > 0) {
            second = 59;
            minute--;
        }
        else {
            hour = 0;
            second = 0;
            minute = 0;

            ResetTimer();       // Indien er nu bv seconden worden toegevoegd na 00:00:00 zal je opnieuw op start moeten klikken
            return;
        }
    }

    // voeg een 0 toe indien er geen 2 cijfers zijn bv 5 wordt 05
    h = check(hour);
    m = check(minute);
    s = check(second);

    document.getElementById('timer').innerHTML = h + ':' + m + ':' + s;

    int = setTimeout(Timer, 1000);

    RemoveTenH.style.opacity = "0.5";
    RemoveOneH.style.opacity = "0.5";
    RemoveTenM.style.opacity = "0.5";
    RemoveOneM.style.opacity = "0.5";
    RemoveTenS.style.opacity = "0.5";
    RemoveOneS.style.opacity = "0.5";
}

function ResetTimer() {
    clearTimeout(int);

    second = 0;
    minute = 0;
    hour = 0;

    s = check(second);
    m = check(minute);
    h = check(hour);

    document.getElementById('timer').innerHTML = h + ':' + m + ':' + s;

    AddTenH.style.opacity = "1";
    AddOneH.style.opacity = "1";
    AddTenM.style.opacity = "1";
    AddOneM.style.opacity = "1";
    AddTenS.style.opacity = "1";
    AddOneS.style.opacity = "1";

    RemoveTenH.style.opacity = "0.5";
    RemoveOneH.style.opacity = "0.5";
    RemoveTenM.style.opacity = "0.5";
    RemoveOneM.style.opacity = "0.5";
    RemoveTenS.style.opacity = "0.5";
    RemoveOneS.style.opacity = "0.5";
}
