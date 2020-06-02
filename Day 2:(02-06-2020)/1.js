var request = new XMLHttpRequest() //object to request Http connection
//To set api connection true
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

// function to load http connection

request.onload = function() {

    var jsonData = JSON.parse(this.response) // object to exract json object from api
    var flag = [] // object to store countries names and flags
    
    // Map Function to extract countries names and flags
    
    const conflag = jsonData.map((item) => {
        flag[item.name] = item.flag;
        console.log(item.name, ":", item.flag);
        return flag;
    });

}

request.send();
