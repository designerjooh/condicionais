let nota, resultado

function Verificar(){
    nota = Number(document.getElementById("nota").value);
    resultado = document.getElementById("resultado");

    if(nota < 5){
        resultado.innerHTML = "Reprovado";
    }
    else if(nota <7){
        resultado.innerHTML = "Recuperação"
    }
    else{
        resultado.innerHTML = "Aprovado";
    }

}

let a, b, r;

function diferenca(){
    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);
    r = document.getElementById("r");

    if( a > b){
        r.innerHTML = a - b
    }
    else{ 
        r.innerHTML = b - a
    };
}

let n1, n2, n3, n4, media, p;

function res(){
    n1 = Number(document.getElementById("n1").value);
    n2 = Number(document.getElementById("n2").value);
    n3 = Number(document.getElementById("n3").value);
    n4 = Number(document.getElementById("n4").value);
    p = document.getElementById("p");
    media = (n1 + n2 + n3 + n4) / 4;

    if(media >= 5){
        p.innerHTML ="Aprovado";
    }
    else{
        p.innerHTML = "Reprovado";
    }
}