document.getElementById("button").onclick = function() {
    alert("apertei");
}

document.getElementById("button2").onclick = function() {
    alert("apertei2");
}



function createList(title, rating, year, seasons) {
    var template = document.getElementsByTagName("template")[0]; // Elemento template
    var clone = template.content.cloneNode(true);                // Clone do template

    var test = clone.querySelectorAll("#movie_name");
    test[0].textContent = "O Filme: " + title;   

    test = clone.querySelectorAll("#wanted");
    test[0].textContent = rating + "% Relevant";   

    test = clone.querySelectorAll("#date");
    test[0].textContent = year; 

    test = clone.querySelectorAll("#season");
    test[0].textContent = seasons + " Temporadas"; 

    document.getElementById("list").appendChild(clone); 
}


for(var i=1; i<10; i++){
    createList(i, ("9" + i), (2000 + i), i);
}







