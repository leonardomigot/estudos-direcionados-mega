document.getElementById("button").onclick = function() { // botao ADD

    var idv = prompt("id", "id");
    var titlev = prompt("Nome do filme");
    var relevantv = prompt("Avaliação", "0-5/5");
    var datev = prompt("Data de lançamento", "Ano");
    var seasonsv = prompt("Qtd de Temporadas");
    
    createList(idv, titlev, relevantv, datev, seasonsv);
}

document.getElementById("button2").onclick = function() { // botao DELETE
    var deletev = prompt("Delete", "ID");

    removeList(deletev);
}

document.getElementById("click_filmes").onclick = function() {

}

document.getElementById("click_load_all").onclick = function() { // botao load db
    clearSpace();
    for(var i=0; i<5; i++){
        createList(i, i, ("9" + i), (2000 + i), i); 
    }
}

document.getElementById("click_remove_all").onclick = function() { // botao remove all
    clearSpace();
}

document.getElementById("click_visible").onclick = function() { // botao toogle visible

    var x = document.getElementsByClassName("entire_section");

    var size = x.length;

    for(var i=0; size > i; i++){
        console.log("TOOGLE: " + i);
        if (x[i].style.display === "none") {
            x[i].style.display = "block";
        } else {
            x[i].style.display = "none";
        }
    }       
}

function createList(id, title, rating, year, seasons) {
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
    
    test = clone.querySelectorAll(".entire_section");    
    test[0].setAttribute("id", id);

    document.getElementById("list").appendChild(clone);
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
    
