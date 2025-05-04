


window.onload = function() { document.getElementById('button').onclick = function() {
    fetch(' https://api.weather.gov/alerts')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error))
        .then(getLocation());
    }

        
};

function getLocation() {
    if (navigator.geolocation) {navigator.geolocation.getCurrentPosition(longLat);} 
    else {button.innerHTML = "Geolocation is not supported by this browser.";}
}
          

function longLat(position) { 

    fetch("https://api.weather.gov/points/"+position.coords.latitude + "," + position.coords.longitude)
        .then(response => response.json())
        .then(data => {
            const apiData = data; 
            console.log(apiData.properties.forecast)})
        .catch(error => console.error('Error:', error));

}

