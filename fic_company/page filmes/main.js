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
    //localStorage.removeItem(deletev);
    //populateDb();

    for(var x=deletev; x<(localStorage.length); x++){

        localStorage.setItem(x) = localStorage.getItem(x+1);

        //console.log(x + " e " + parseInt(x+1));

    } 

    // no final é remove();

    console.log(localStorage.getItem(deletev));

    loadPageItems();
}

document.getElementById("click_load_all").onclick = function() {
    loadPageItems();
}

function loadPageItems() { // botao load db
    
    clearSpace();

    var numberOfItems = localStorage.length;

    console.log("numero de itens " + numberOfItems);


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

document.getElementById("click_remove_all").onclick = function() { // botao remove all
    clearSpace();
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


function itemAdd() {

    //console.log( JSON.parse(localStorage[localStorage.length-1])["title"] );


}

itemAdd();

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

function lastElementId() {    
    var elements = document.getElementsByClassName("entire_section");    
    var size = elements.length; 
    
    if (size < 1) {
        return -1;
    } else {
        var lastElement = elements[size-1];
        var idLastElement = lastElement.getAttribute("id");
        return idLastElement;
    }    
}

function populateDb() {

    localStorage.setItem(
        "0", 
        '{"title":"bugs", ' +
        '"rating":"80", ' +
        '"year":"2015", ' +
        '"seasons":"2"}'
    );

    localStorage.setItem(
        "1", 
        '{"title":"second", ' +
        '"rating":"50", ' +
        '"year":"2008", ' +
        '"seasons":"6"}'
    );

    localStorage.setItem(
        "2", 
        '{"title":"thir", ' +
        '"rating":"5ss", ' +
        '"year":"2002", ' +
        '"seasons":"4"}'
    );

    //console.log(JSON.parse(localStorage[0]));

    //console.log( JSON.parse(localStorage[0])["title"] );

    //console.log(JSON.parse(localStorage[1]));
}

//populateDb();

