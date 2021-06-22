let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute("alt");
    
    if(meuSrc !== "legal") {
      minhaImagem.setAttribute ('src','imagens/firefox2.png');
    } else {
      minhaImagem.setAttribute ('src','https://www.w3schools.com/images/w3lynx_200.png');
    }
    alert(meuSrc);
}


