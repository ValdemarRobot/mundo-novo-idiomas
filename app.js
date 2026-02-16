const frases = [
    {grego: "ἐγώ εἰμι μαθητής", trad: "eu sou discípulo"},
    {grego: "ὁ θεὸς ἀγάπη ἐστίν", trad: "deus é amor"},
    {grego: "ἐν ἀρχῇ ἦν ὁ λόγος", trad: "no princípio era o verbo"}
];

let atual = null;
let xp = localStorage.getItem("xp") ? parseInt(localStorage.getItem("xp")) : 0;
let nivel = localStorage.getItem("nivel") ? parseInt(localStorage.getItem("nivel")) : 1;

document.getElementById("xp").innerText = xp;
document.getElementById("nivel").innerText = nivel;

function novaFrase() {
    atual = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById("frase").innerText = atual.grego;
    document.getElementById("resultado").innerText = "";
    document.getElementById("resposta").value = "";
}

function verificar() {
    if (!atual) return;

    let resp = document.getElementById("resposta").value.toLowerCase();

    if (resp === atual.trad) {
        xp += 10;
        if (xp >= nivel * 50) nivel++;
        document.getElementById("resultado").innerText = "✔ Correto!";
    } else {
        document.getElementById("resultado").innerText = "✖ Correto: " + atual.trad;
    }

    localStorage.setItem("xp", xp);
    localStorage.setItem("nivel", nivel);

    document.getElementById("xp").innerText = xp;
    document.getElementById("nivel").innerText = nivel;
}

function ouvir() {
    if (!atual) return;

    let utterance = new SpeechSynthesisUtterance(atual.grego);
    utterance.lang = "el-GR";
    speechSynthesis.speak(utterance);
}
