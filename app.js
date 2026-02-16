function mostrarBack(){
    document.getElementById("btnBack").style.display = "block";
}

function esconderBack(){
    document.getElementById("btnBack").style.display = "none";
}

function voltarInicio(){
    document.getElementById("conteudo").innerHTML = "";
    document.getElementById("menu").style.display = "block";
    esconderBack();
}
