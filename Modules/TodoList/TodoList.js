// toont of verbergt het keyboard bij aan klikken van het input veld
function tonenKeyb(){
    document.getElementById('keyboard').style.display='block';
}

function verbergenKeyb(){
    document.getElementById('keyboard').style.display='none';
}


function twoFunction(){
    mijnfunctie();
    clearInput();
}


function clearInput(){
    document.getElementById("input").value ="";
}


//maakt een paragraafje aan en neemt de inputValue als tekst
function mijnfunctie(){
    const para = document.createElement("p");
    var zin = document.getElementById("input").value;
    const node = document.createTextNode(zin);
    para.appendChild(node);
    const element = document.getElementById("lijst");
    element.appendChild(para);

    //1 klik paragraaf word doorstreept
    para.onclick = function(){
        if (this.style.textDecoration =="line-through"){
            this.style.textDecoration ="none"; 
        }
        else{
            this.style.textDecoration ="line-through"  
        }
    };

    //verwijder lijst element, door dubble klik, met confirmatie
    para.ondblclick = function () {
        if(confirm("Zeker dat je dit wil verwijderen?")){
            this.parentElement.removeChild(this);
        }
    };
}
