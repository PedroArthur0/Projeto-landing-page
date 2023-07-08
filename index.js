var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var imagem1 = window.document.getElementById("imagem")
var imagem2 = window.document.getElementById("imagem2")

function RolarParaDireita() {
    imagem1.style = "display:none"
    imagem2.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"
}

function RolarParaEsquerda() {
    imagem1.style = "display:flex"
    imagem2.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
}
