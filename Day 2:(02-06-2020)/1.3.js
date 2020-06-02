var request = new XMLHttpRequest() //object to request Http connection
    //To set api connection true
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

// function to load http connection

request.onload = function() {

    var jsonData = JSON.parse(this.response) // object to exract json object from api

    // Map Function to extract countries names , alpha3Code and population

    const conCapital = jsonData.map((item) => {
        console.log(item.name, ":", item.alpha3Code, "and population is", item.population);
    });

}

request.send();
