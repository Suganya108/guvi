//1.4 Display the count of all countries sharing their border with the country name in console.

var request = new XMLHttpRequest() //object to request Http connection
    //To set api connection true
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

// function to load http connection

request.onload = function() {

    var jsonData = JSON.parse(this.response) // object to exract json object from api

    // Map Function to extract countries names , borders sharing count and borders sharing

    const conCapital = jsonData.map((item) => {
        console.log(item.name, "shares its border with", item.borders.length, 'countries that includes ( "' + item.borders.join('" , "'), '" )');
    });

}

request.send();
