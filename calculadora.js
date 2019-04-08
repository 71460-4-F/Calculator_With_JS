var statusCalc = 0;
var flag = 0;

function botao(opt){
    if(statusCalc == 1){
        if(flag == 1){
            document.formCalc.visor.value = "";
            flag = 0;
        }
        var exp = document.formCalc.visor.value;
        document.formCalc.visor.value = exp + opt;
    }
}

function resultado() {
    if(statusCalc == 1){
        var expressao = document.formCalc.visor.value;
        var resultado = eval(expressao);
        document.formCalc.visor.value = resultado;
        flag = 1;
    }
}

function trocarSinal(){
    if(statusCalc == 1){
        var expressao = document.formCalc.visor.value;
        var resultado = eval(expressao * (-1));
        document.formCalc.visor.value = resultado;
    }
}

function limparVisor(){
    if(statusCalc == 1){
        document.formCalc.visor.value = "";
    }
}

function ligarCalc(){
    document.getElementById("visor").style.backgroundColor = "greenyellow";
    statusCalc = 1;
}

function desligarCalc(){
    document.getElementById("visor").style.backgroundColor = "rgb(4, 65, 4)";
    document.formCalc.visor.value = "";
    statusCalc = 0;
}