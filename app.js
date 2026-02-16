const bancoQuiz = [
    {grego:"ὁ θεὸς ἀγάπη ἐστίν", trad:"deus é amor"},
    {grego:"ἐγώ εἰμι μαθητής", trad:"eu sou discípulo"}
];

const bancoImagem = [
    {grego:"λόγος", imagem:"https://cdn-icons-png.flaticon.com/512/1828/1828919.png"},
    {grego:"θεός", imagem:"https://cdn-icons-png.flaticon.com/512/3176/3176292.png"}
];

let atual = null;

function abrirQuiz(){
    document.getElementById("menu").style.display="none";
    document.getElementById("conteudo").style.display="block";
    novaFrase();
}

function novaFrase(){
    atual = bancoQuiz[Math.floor(Math.random()*bancoQuiz.length)];
    document.getElementById("conteudo").innerHTML=`
        <div class="card">
            <p>${atual.grego}</p>
            <input type="text" id="resposta" placeholder="Digite a tradução">
            <button onclick="verificar()">Verificar</button>
            <button onclick="novaFrase()">Nova</button>
            <p id="resultado"></p>
        </div>
    `;
}

function verificar(){
    let resp=document.getElementById("resposta").value.toLowerCase();
    if(resp===atual.trad){
        document.getElementById("resultado").innerHTML="✔ Correto!";
    } else{
        document.getElementById("resultado").innerHTML="✖ Correto: "+atual.trad;
    }
}

function abrirImagem(){
    document.getElementById("menu").style.display="none";
    document.getElementById("conteudo").style.display="block";
    let item=bancoImagem[Math.floor(Math.random()*bancoImagem.length)];
    document.getElementById("conteudo").innerHTML=`
        <div class="card">
            <p>Associe a palavra:</p>
            <h3>${item.grego}</h3>
            <img src="${item.imagem}" width="100">
        </div>
    `;
}

function abrirPronuncia(){
    document.getElementById("menu").style.display="none";
    document.getElementById("conteudo").style.display="block";
    atual = bancoQuiz[Math.floor(Math.random()*bancoQuiz.length)];
    document.getElementById("conteudo").innerHTML=`
        <div class="card">
            <p>Diga a pronúncia:</p>
            <h3>${atual.grego}</h3>
            <button onclick="ouvir()">Ouvir modelo</button>
        </div>
    `;
}

function ouvir(){
    let utterance = new SpeechSynthesisUtterance(atual.grego);
    utterance.lang="el-GR";
    speechSynthesis.speak(utterance);
}
