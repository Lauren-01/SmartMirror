var playlist = 1;

$("#Spotifyicon").dblclick(function() 
{
    playlist = 5;
    switchplaylist();
});


function switchplaylist() {
    switch(playlist)
    {
        case 1:
            s = "https://open.spotify.com/embed/playlist/3vSAQl65EzENeXZMqqoY1s?utm_source=generator&theme=0";
            playlist = 2;
            break;
        case 2:
            s = "https://open.spotify.com/embed/playlist/555TGprMDOt4z9YLOnQGCw?utm_source=generator&theme=0";
            playlist = 3;
            break;
        case 3:
            s = "https://open.spotify.com/embed/playlist/37i9dQZF1E36k4dpoGxzp6?utm_source=generator&theme=0";
            playlist = 4;
            break;
        case 4:
            s = "https://open.spotify.com/embed/playlist/37i9dQZF1DX4fpCWaHOned?utm_source=generator&theme=0";
            playlist = 5;
            break;
        case 5:
            s = "";
            playlist = 1;
            break;
        default:
            alert("Error with Spotify!");
            break;
    }

    document.getElementById('SpotifyPlaylist').src = s;
}
