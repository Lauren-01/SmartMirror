var keyb = document.getElementById("keyboard");
var inp; // = document.getElementById("input");
var plaats;
var plaatsagenda = 0;
var plaatstodolijst = 0;


var showKeyboard = 0;
var upperKey = 0;

function showKeyboard() {
    if (showKeyboard == 0)
    {
        console.log("Toon");
        showKeyboard = 1;
        keyb.style.visibility = "visible";
    }
    else
    {
        console.log("Weg");
        showKeyboard = 0;
        keyb.style.visibility = "hidden";
    }
}


function Where(plaats) {
    switch (plaats)
    {
        case 0:
            console.log(plaats);
            inp = document.getElementById("agendatopic");
            plaatsagenda = 1;
            plaatstodolijst = 0;
            break;
        case 1:
            console.log(plaats);
            inp = document.getElementById("input");
            plaatsagenda = 0;
            plaatstodolijst = 1;
            break;
    }

    return plaats;
}


function InputKeys(i) {
    inp.value += i.value;
}

function Delete() {
    inp.value = inp.value.substr(0, inp.value.length - 1)
}

function Hoofdletters() {
    // Bronnen: https://stackoverflow.com/questions/41827042/how-to-show-capital-letters-when-shift-key-is-pressed-using-javascript
    //          https://jsfiddle.net/alnitak/1c5x76uf/

    var letters = document.getElementsByClassName('Kleineletter');

    var i = letters.length-1;
    var letterchar = letters[i].value.charAt(0);
    console.log(letterchar);
    var letterup = letterchar.toUpperCase();
    if (letterchar == letterup) {
        document.getElementById('Shift').style.transform = "rotate(00deg)";
        for (i = 0; i < letters.length; i++) {
            var letterhtml = letters[i].value;
            letterhtml = letterhtml.charAt(0).toLowerCase()+letterhtml.slice(1);    // Remove 1 element (first one)
            letters[i].value = letterhtml;
            letters[i].style.textTransform = 'lowercase';
        }
        var punt = document.getElementById('punt');
        var uitroepteken = document.getElementById('uitroepteken');
        var vraagteken = document.getElementById('vraagteken');
        var streep = document.getElementById('streepje');

        punt.value = ".";
        uitroepteken.value = "!";
        vraagteken.value = "?";
        streep.value = "-";
    }
    else {
        document.getElementById('Shift').style.transform = "rotate(180deg)";
        for (i = 0; i < letters.length; i++) {
            var letterhtml = letters[i].value;
            letterhtml = letterhtml.charAt(0).toUpperCase()+letterhtml.slice(1);    // Remove 1 element (first one)
            letters[i].value = letterhtml;
            letters[i].style.textTransform = 'capitalize';
        }
        var punt = document.getElementById('punt');
        var uitroepteken = document.getElementById('uitroepteken');
        var vraagteken = document.getElementById('vraagteken');
        var streep = document.getElementById('streepje');

        punt.value = ":";
        uitroepteken.value = ";";
        vraagteken.value = "=";
        streep.value = "_";
    }
}


function Enter() {
    if (plaatsagenda == 1)
    {
        mijnfunctieAgenda(), clearinputVelden(), refreshTabel();
    }
    
    if (plaatstodolijst == 1)
    {
        twoFunction();
    }
}
