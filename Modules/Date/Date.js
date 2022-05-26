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
            month = 'January';
            break;
        case 1:
            month = 'February';
            break;
        case 2:
            month = 'March';
            break;
        case 3:
            month = 'April';
            break;
        case 4:
            month = 'May';
            break;
        case 5:
            month = 'June';
            break;
        case 6:
            month = 'July';
            break;
        case 7:
            month = 'August';
            break;
        case 8:
            month = 'September';
            break;
        case 9:
            month = 'October';
            break;
        case 10:
            month = 'November';
            break;
        case 11:
            month = 'December';
            break;
    }

    document.getElementById('datum').innerHTML = day + " " + month + " " + year;
    
    interval = setTimeout(getDate, 1000);
}
