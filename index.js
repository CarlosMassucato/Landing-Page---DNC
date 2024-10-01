var leonardo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta")
var bruna = window.document.getElementById("bruna")
var setadireita = window.document.getElementById("setadireita")
var setaesquerda = window.document.getElementById("setaesquerda")

function rolarparadireita(){

    bruna.style = "display:none"
    samanta.style = "display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex; margin-top:100px"
}

function rolarparaesquerda(){

    bruna.style = "display:flex"
    samanta.style = "display:none"
    setadireita.style = "display:flex"
    setaesquerda.style = "display:none"

}

