loadPageItems();

document.getElementById("button").onclick = function() { // botao ADD

    var last = localStorage.length;
    var titlev = prompt("Nome do filme");
    var relevantv = prompt("Avaliação", "%");
    var datev = prompt("Data de lançamento", "Ano");
    var seasonsv = prompt("Qtd de Temporadas");
    
    localStorage.setItem(
        last,
        '{"title":"' + titlev + '", ' +
        '"rating":"' + relevantv + '", ' +
        '"year":"' + datev + '", ' +
        '"seasons":"' + seasonsv + '"}'
    );

    loadPageItems();
}

document.getElementById("button2").onclick = function() { // botao DELETE
    var deletev = prompt("Delete", "ID");

    for(var x=deletev; x<(localStorage.length-1); x++){
        var nextItem = parseInt(x) + 1;
        var temp = localStorage.getItem(nextItem); 
        localStorage.setItem(x, temp);     } 

    localStorage.removeItem(localStorage.length-1);

    loadPageItems();
}

function loadPageItems() { 
    
    clearSpace();

    var numberOfItems = localStorage.length;

    for(var x=0; x < numberOfItems; x++){

        createList(
            x,
            JSON.parse(localStorage[x])["title"],
            JSON.parse(localStorage[x])["rating"],
            JSON.parse(localStorage[x])["year"],
            JSON.parse(localStorage[x])["seasons"]
        );
        
    }  
}

document.getElementById("click_div_vis").onclick = function() {

    var x = document.getElementById("lista1");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

document.getElementById("click_add_vis").onclick = function() { //toogle 

    var x = document.getElementById("lista2");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function createList(id, title, rating, year, seasons) {
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

    document.getElementById("lista1").appendChild(clone);
    console.log("CRIADO: " + id);
}

function removeList(id) { // remover item x
    document.getElementById(id).remove();
    console.log("REMOVIDO: " + id); 
}

function clearSpace() { // remover todos os itens
    var elements = document.getElementsByClassName("entire_section");
    
    var size = elements.length;    

    for(var i=(size-1); i >= 0; i--){
        console.log("excluido " + i);
        elements[i].remove(); 
    }
}


