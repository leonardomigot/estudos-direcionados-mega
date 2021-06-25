function createMainDbKey() {
    localStorage.setItem('MAIN_DB', '[]');
}
//createMainDbKey();

loadPageItems();


document.getElementById("button").onclick = function() { // botao ADD

    var titlev = prompt("Nome do filme");
    var ratingv = prompt("Avaliação", "%");
    var datev = prompt("Data de lançamento", "Ano");
    var seasonsv = prompt("Qtd de Temporadas");

    var temp = JSON.parse(localStorage.getItem("MAIN_DB"));
    
    temp.push({
        "title": titlev,
        "rating": ratingv,
        "date": datev,
        "seasons": seasonsv
    });    

    temp = JSON.stringify(temp); 

    localStorage.setItem('MAIN_DB', temp);

    loadPageItems();
}


document.getElementById("button2").onclick = function() { // botao DELETE
   
    var temp = JSON.parse(localStorage.getItem("MAIN_DB"));

    var numberOfItems = temp.length;

    for(var x=numberOfItems - 1; x >= 0; x--){
        if(document.getElementById(x).querySelector('.checkbox').checked === true){
            temp.splice(x, 1);            
        }
    }   

    temp = JSON.stringify(temp); 
        
    localStorage.setItem('MAIN_DB', temp);

    loadPageItems();
}

function loadPageItems() { 
    
    clearSpace();

    var temp = JSON.parse(localStorage.getItem("MAIN_DB"));

    var numberOfItems = temp.length;

    console.log(numberOfItems);
    
    for(var x=0; x < numberOfItems; x++){

        createItem(
            x,
            JSON.parse(localStorage["MAIN_DB"])[x]["title"],
            JSON.parse(localStorage["MAIN_DB"])[x]["rating"],
            JSON.parse(localStorage["MAIN_DB"])[x]["year"],
            JSON.parse(localStorage["MAIN_DB"])[x]["seasons"]
        );        
    }  
}

document.getElementById("click_div_vis").onclick = function() {

    var x = document.getElementById("lista1");
    var y = document.getElementById("lista2");

    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
}

function createItem(id, title, rating, year, seasons) {
    var template = document.getElementsByTagName("template")[0]; // Elemento template
    var clone = template.content.cloneNode(true);                // Clone do template
    
    var test = clone.querySelectorAll("#movie_name");    
    test[0].textContent = title;   

    test = clone.querySelectorAll(".identification");
    test[0].textContent = id;

    test = clone.querySelectorAll("#wanted");
    test[0].textContent = rating + "% Relevant";   

    test = clone.querySelectorAll("#date");
    test[0].textContent = year; 

    test = clone.querySelectorAll("#season");    
    test[0].textContent = seasons + " Temporadas";     
    
    test = clone.querySelectorAll(".entire_section");    
    test[0].setAttribute("id", id);

    test = clone.querySelectorAll(".checkbox");
    test[0].setAttribute("id", id);

    document.getElementById("lista1").appendChild(clone);
    console.log("CRIADO: " + id);
}

function clearSpace() { // remover todos os itens
    var elements = document.getElementsByClassName("entire_section");
    
    var size = elements.length;    

    for(var i=(size-1); i >= 0; i--){
        console.log("excluido " + i);
        elements[i].remove(); 
    }
}

