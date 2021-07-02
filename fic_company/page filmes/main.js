toogleDiv(1);

/*function createMainDbKey() {
    localStorage.setItem('MAIN_DB', '[]');
}
function populateDb(){
    localStorage.setItem('MAIN_DB', '[{"title":"Primeira guerra mundial","rating":"10","date":"1900","seasons":"1","description":"pow pow pow pow pow"},{"title":"segunda guerra mundial","rating":"50","date":"1939","seasons":"1","description":"kaboom pow pow ploft"},{"title":"Revolução francesa","rating":"50","date":"50","seasons":"50","description":"was the German invasion of France, Belgium"},{"title":"rambo","rating":"40","date":"56","seasons":"56","description":"silvestre stalone"}]');
}*/

var dbase = new Database("filmes");

dbase.writeEntry({
    id : "01",
    test : "um"
});

dbase.writeEntry({
    id : "02",
    test : "DD dois dois"
});

dbase.writeEntry({
    id : "04",
    test : "tres"
});

dbase.writeEntry({
    id : "03",
    test : "tres"
});


dbase.deleteEntry(02);







loadPageItems();

document.getElementById("click_back").onclick = function() {
    toogleDiv(1);  
}

document.getElementById("button").onclick = function() { // botao ADD

    var titlev = prompt("Nome do filme");
    var ratingv = prompt("Avaliação", "%");
    var datev = prompt("Data de lançamento", "Ano");
    var seasonsv = prompt("Qtd de Temporadas");
    var descriptionv = prompt("Descrição");

    var temp = JSON.parse(localStorage.getItem("MAIN_DB"));
    
    temp.push({
        "title": titlev,
        "rating": ratingv,
        "date": datev,
        "seasons": seasonsv,
        "description" : descriptionv
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

    var filmes = JSON.parse(localStorage.getItem("MAIN_DB"));

    filmes.forEach((item, index) => {
        createItem(
            index,
            item.title,
            item.rating,
            item.year,
            item.seasons
        );
    });    
}

function toogleDiv(listNumber) {
    var x = document.getElementById("lista1");
    var y = document.getElementById("lista2");
    var z = document.getElementById("lista3");

    if (listNumber === 1) {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    } else if (listNumber === 2) {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    } else if (listNumber === 3) {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
    } else {
        console.log("Erro: Entrada inválida toogleDiv()")
    }
}

function createItem(id, title, rating, year, seasons) {
    var template = document.getElementsByTagName("template")[0]; // Elemento template
    var clone = template.content.cloneNode(true);                // Clone do template
    
    var test = clone.querySelectorAll(".movie_name");    
    test[0].textContent = title;   

    test = clone.querySelectorAll(".movie_name");
    test[0].setAttribute("id", ("title-" + id));

    test = clone.querySelectorAll(".edit-button");
    test[0].setAttribute("id", id);

    console.log(test);

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

    clone.querySelector('.movie_name').addEventListener("click", e => {
        TitleMovieHandler(e);
    });

    clone.querySelector('.edit_button').addEventListener("click", e=> {
        itemEditHandler(e);
    });

    document.getElementById("lista1").appendChild(clone);
}

function TitleMovieHandler(evt){
    const ID = evt.target.id.replace(/(\D)/g, '');
    toogleDiv(2);
    showItem(ID);
}

function itemEditHandler(evt){
    const ID = evt.target.id;

    var dbTemp = JSON.parse(localStorage.getItem("MAIN_DB"));

    //var element;

    var titlev;
    var ratingv;
    var datev;
    var seasonsv;
    var descriptionv;

    titlev = document.querySelectorAll("#movie_title_expand");
    titlev[1].setAttribute("value", dbTemp[ID]["title"]);

    ratingv = document.querySelectorAll("#wanted_expand");
    ratingv[1].setAttribute("value", dbTemp[ID]["rating"]);

    datev = document.querySelectorAll("#date_expand");
    datev[1].setAttribute("value", dbTemp[ID]["date"]);

    seasonsv = document.querySelectorAll("#season_expand");
    seasonsv[1].setAttribute("value", dbTemp[ID]["seasons"]);

    descriptionv = document.querySelectorAll("#description_expand");
    descriptionv[1].setAttribute("value", dbTemp[ID]["description"]); 

    document.getElementById("acceptModifications").onclick = function() {
        titlev = document.querySelectorAll("#movie_title_expand")[1].value;
        ratingv = document.querySelectorAll("#wanted_expand")[1].value;
        datev = document.querySelectorAll("#date_expand")[1].value;
        seasonsv = document.querySelectorAll("#season_expand")[1].value;
        descriptionv = document.querySelectorAll("#description_expand")[1].value;

        var temp = JSON.parse(localStorage.getItem("MAIN_DB"));
    
        temp.splice(ID, 1, {
            "title": titlev,
            "rating": ratingv,
            "date": datev,
            "seasons": seasonsv,
            "description" : descriptionv
        });    
    
        temp = JSON.stringify(temp); 
    
        localStorage.setItem('MAIN_DB', temp);
        loadPageItems();   
        toogleDiv(1);     
    }    
    toogleDiv(3);
}

function showItem(id) {

    var dbTemp = JSON.parse(localStorage.getItem("MAIN_DB"));

    var element;

    element = document.querySelectorAll("#movie_title_expand");
    element[0].textContent = dbTemp[id]["title"];

    element = document.querySelectorAll("#wanted_expand");
    element[0].textContent = dbTemp[id]["rating"] + "% Relevant";

    element = document.querySelectorAll("#date_expand");
    element[0].textContent = dbTemp[id]["date"];

    element = document.querySelectorAll("#season_expand");
    element[0].textContent = dbTemp[id]["seasons"] + " Temporadas";

    element = document.querySelectorAll("#description_expand");
    element[0].textContent = dbTemp[id]["description"];  
}

function clearSpace() { // remover todos os itens
    var elements = document.getElementsByClassName("entire_section");
    
    var size = elements.length;    

    for(var i=(size-1); i >= 0; i--){
        console.log("excluido " + i);
        elements[i].remove(); 
    }
}