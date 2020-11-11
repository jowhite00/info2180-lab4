/* JavaScript file */
//C:\GitHub\Labs\info2180-lab4
// http://localhost:8080/superheroes.php
//php -S localhost:8080

window.onload=function(){
    //document.getElementById("Result").innerHTML= xml.responseText;
    
    var btn = document.getElementById("button");
    btn.addEventListener("click", avengersList);
    const resultMainSection = document.getElementById("result");
    const superHeroName = document.getElementById("superHeroName");
    const superHeroBio = document.getElementById("superHeroBio");
    const superHeroAlias = document.getElementById("superHeroAlias");
    const myUrl = 'http://localhost:8080/superheroes.php?a=';
    const myHeader = new Headers({
        'Content-Type': 'text/plain',
        'Accept': 'text/plain'
    })
    let fetchData = {
        method: 'GET', 
        mode: 'cors', 
        headers: myHeader,
        status : 200,
        statusText : "OK"
    }

    function avengersList(){
        var searchBar = document.getElementById("avengerSearch").value;
        console.log(myUrl);
        resultMainSection.innerHTML = "";
        if(searchBar.length !== 0){
            var url = myUrl + searchBar;
            console.log(url);
            fetch(url, fetchData)
            .then(response => response.text())
            .then(data => {
                console.log(data);
                resultMainSection.innerHTML = data;
                //var processedResult = data;
                // if (processedResult == "SuperHero Not Found"){
                //     resultMainSection.innerHTML = processedResult;
                // }
                
            })
        }
        else{
        // //This is for when the user clicks the search button and there is nothing inside of the search bar
             fetch(myUrl, fetchData)
         //Takes the promise and convert it into a readable format
             .then(response => {
                 if (response.ok) {
                     return response.text()
                 } else {
                     return Promise.reject('something went wrong!')
             }
         })
         //Takes the data and pushes to an alert
             .then(data => {  
             let avengersResults = document.querySelector('#result');
             avengersResults.innerHTML = data;
             //resultMainSection.innerHTML = data[0];   
         })
         .catch(function(error){
              //Errors are printed the to console inside of the browser
              console.log(error);
         });
         }
    }
}

    