function getDate() {
    const today = new Date();

    var year = today.getFullYear();
    var month = today.getMonth();           // Geeft een waarde tussen 0 en 11
    var day = today.getDate();

    var interval;
    clearInterval(interval);

    switch(month)
    {
        case 0:
            month = 'januari';
            break;
        case 1:
            month = 'februari';
            break;
        case 2:
            month = 'maart';
            break;
        case 3:
            month = 'april';
            break;
        case 4:
            month = 'mei';
            break;
        case 5:
            month = 'juni';
            break;
        case 6:
            month = 'juli';
            break;
        case 7:
            month = 'augustus';
            break;
        case 8:
            month = 'september';
            break;
        case 9:
            month = 'oktober';
            break;
        case 10:
            month = 'november';
            break;
        case 11:
            month = 'december';
            break;
    }

    document.getElementById('date').innerHTML = day + " " + month + " " + year;
    
    interval = setTimeout(getDate, 1000);
}