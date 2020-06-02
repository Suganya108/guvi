var request = new XMLHttpRequest() //object to request Http connection
    //To set api connection true
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

// function to load http connection

request.onload = function() {

    var jsonData = JSON.parse(this.response) // object to exract json object from api
    var capital = [] // object to store countries names and captital

    // Map Function to extract countries names and captital

    const conCapital = jsonData.map((item) => {
        capital[item.name] = item.capital;
        console.log(item.name, ":", item.capital);
        return capital;
    });

}

request.send();
