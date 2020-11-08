/* JavaScript file */
//C:\GitHub\Labs\info2180-lab4
// http://localhost:8080/superheroes.php
//php -S localhost:8080

window.onload=function(){   
    var btn = document.getElementById("button");
    btn = addEventListener("click", avengersList);
    const myUrl = 'http://localhost:8080/superheroes.php';
    const myHeader = new Headers({
        'Content-Type': 'text/plain',
        'Accept': 'text/plain'
    })
    let fetchData = {
        method: 'GET', 
        mode: 'cors', 
        headers: myHeader,
    }

    function avengersList(){
        fetch(myUrl, fetchData)
        //Takes the promise and convert it into a readable format
        .then((response) => response.text())
        //Takes the data and pushes to an alert
        .then((data) => {
            alert(data)
        })
        .catch(function(error){
             //Errors are printed the to console inside of the browser
             console.log(error);
        });
    }
}

    