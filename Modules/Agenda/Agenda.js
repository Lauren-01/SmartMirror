const todoStr = localStorage.getItem('todo');
let todoData = [];
if(todoStr?.length){
    todoData = JSON.parse(todoStr);
}

// toont of verbergt het toetsenbord bij aan klikken van het input veld
function tonen(input){
    if(document.getElementById(input).style.display=='block'){
        document.getElementById(input).style.display='none';
    }
    else
    {
        document.getElementById(input).style.display='block'
    }
}

var agenda;

// berekent hoeveel dagen we nog tot en met een bepaalde datum
function calculateDays(eventDag,eventMaand,eventyear)
{
    var m=0,f=0, i;//tellers
    var Aantaldagen=0;
    var arrayMaanden= new Array(31,28,31,30,31,30,31,31,30,31,30,31);
    var year;
    var nu = new Date();
    var nuDag =nu.getDate();
    var nuMaand =nu.getMonth();
    var nuyear =nu.getFullYear();

    eventMaand-=1;
    //year uitrekenen
    year=eventyear-nuyear;

    //alles binnen het jaar uitrekenen
    if(year==0)
    {
        if(nuMaand==eventMaand)  // als het event en vandaag in dezelfde maand vallen 
        {
            Aantaldagen +=(eventDag-nuDag);
            return Aantaldagen;
            
        }
        else  //als ze niet in de zelfde maand vallen
        {
            Aantaldagen+=eventDag;
            Aantaldagen+=(arrayMaanden[nuMaand]-nuDag);
            eventMaand--;
            nuMaand++;
            if(eventMaand==nuMaand)
            {
                Aantaldagen+=arrayMaanden[nuMaand];
                return Aantaldagen;
            }
            else
            {
                for(i=nuMaand; i<=eventMaand;i++)
                {
                    Aantaldagen+=arrayMaanden[i];
                    
                }
                return Aantaldagen;
            }
        }
    }


    //alles binnen dit en volgend jaar uitrekenen
    if(year>=1)
    {
        Aantaldagen+=eventDag;
        Aantaldagen+=arrayMaanden[nuMaand]-nuDag;


        if(eventMaand==0)
        {
            eventMaand=11;//gaat terug naar het vorigjaar geplaatst worden
            m++//jaarswisseling of niet
        }else
        {
            eventMaand--; //een maand terug want deze dagen zijn al geteld
        }

        if(nuMaand==11)// verder tellen bij een jaarswisseling
        {
            nuMaand=0;
            f++; //jaarswisseling of niet
        }else
        {
            nuMaand++;
        }

        if(m==0 && f==0) //deze bepaalt of te alle twee een jaarswisseling hebben meegemaakt
        {
            for(i=nuMaand;i<=arrayMaanden.length-1;i++)
            {
                Aantaldagen+=arrayMaanden[i];
            }
            for(i=0; i<=eventMaand;i++)
            {
                Aantaldagen+=arrayMaanden[i];
            }
        }
        if(m==1 && f==0 && m==0 && f==1 )
        {
            for(i=nuMaand;i<=eventMaand;i++)
            {
                Aantaldagen+=arrayMaanden[i];
            }
        }
        if(year>=2)
        {
            year--;
            Aantaldagen+=(year*365);   // dagen per jaar te berekenen
        }
        return Aantaldagen;
    }
}
//maakt een paragraafje aan en neemt de inputValue als tekst

$(document).ready(function() 
{
    $("#date").datepicker({
        dateFormat: 'dd/mm/yy'
    }); // datepicker venstertjes

    //for(let i = 0; i < todoData.length; ++i){
    //    maakTodo(todoData[i]);
    //}
});

//function maakTodo(task){
//ik maak element
//   task.elem = //dat element
//}

function check(input) {                 // voegt een 0 toe zodat de klok er altijd als "hh:mm:ss" uitziet
    if (input < 10) {
        input = "0" + input;
    }

    return input;
}

// localStorage.setItem('todo', JSON.stringify(todoData));
function mijnfunctieAgenda(){

    localStorage.setItem  
    var date = document.getElementById("date").value;
    const myArray = date.split("/"); // datepicker geeft een string terug deze kan gesplits worden door .split("/") ==> deze geef op zich dan weer een array terug 
    
    var eventDag = parseInt(myArray[0]);          //dag uit array halen
    var eventMaand =parseInt( myArray[1]);        //Maand uit array halen
    var eventyear =parseInt(myArray[2]);          //Year uit array halen

    eventDag = check(eventDag);
    eventMaand = check(eventMaand);

    //parseInt(eventDag);         //string omzetten naar int
    //parseInt(eventMaand);       //string omzetten naar int
    //parseInt(eventyear);        //string omzetten naar int

    var date= eventDag+"/"+eventMaand+"/"+eventyear+" ";         //alles samenstellen
    var topic = document.getElementById("agendatopic").value;     //input halen uit veld met id agendatopic
    var daystogo = calculateDays(eventDag,eventMaand,eventyear);    //roept functie op calculateDays en berekent de dage te gaan tot een event

    //maak rij in tabel voor agenda
    var tabel =document.getElementById('tab');     
    const TR = document.createElement("TR");

    //maak eerste cel in rij en vul met de datum!
    const TD1= document.createElement("TD");
    var node1=document.createTextNode(date);
    TD1.appendChild(node1);

    //maak tweede cel in rij en vul met de topic
    const TD2 = document.createElement("TD");
    var node2=document.createTextNode(topic);
    TD2.appendChild(node2);

    //maak derde cel in rij en vul met de day to go
    const TD3 = document.createElement("TD");
    var node3=document.createTextNode(daystogo);
    TD3.appendChild(node3);

    //maak alle cellen vast aan de row
    TR.appendChild(TD1);
    TR.appendChild(TD2);
    TR.appendChild(TD3);

    //functie vast aan elke rijd appart
    TR.onclick=function(){//doorstreep in agenda
        if (this.style.textDecoration =="line-through"){
        this.style.textDecoration ="none"; 
        }
        else{
        this.style.textDecoration ="line-through"  
        }
    };

    TR.ondblclick= function () {  //verwijder lijst element, door dubble klik, met confirmatie
        if(confirm("Zeker dat je dit wil verwijderen?")){
        this.parentElement.removeChild(this);
        }

    };

    //maak de rij van aan de tabel
    tabel.appendChild(TR);
}

function clearinputVelden(){// verwijderd alles wat in het input veld staat
    document.getElementById("date").value="";
    document.getElementById("agendatopic").value="";
}


function refreshTabel(){ // deze functie gaat de tabel vernieuwen zodat wanneer er een dag voor bij is de "dayto go gaat aanpassen"

    setInterval(function(){
        var lengte = document.getElementById("tab").rows.length;
        for(var i = 1;i<lengte; i++){
            var data = document.getElementById("tab").rows[i].cells.item(0).innerHTML;  //haalt datum uit eerste kolom 

            const myArray = data.split("/");    //splits de datum en geeft een array terug
            
            var eventDag = parseInt(myArray[0]);      //haalt dag uit array
            var eventMaand = parseInt(myArray[1]);    //haalt maand uit array
            var eventyear =parseInt(myArray[2]);      //haalt jaar uit array
            

            document.getElementById("tab").rows[i].cells.item(2).innerHTML=calculateDays(eventDag,eventMaand,eventyear);//haalt dagen te gaan er uit en vervangt deze met nieuw aantal dagen
        }
    },5000)
    throw new Error('Something Went Wrong');
}
