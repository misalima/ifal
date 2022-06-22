function maior_menor() {
    var vetor=[];
    
    for (var i = 0; i < 5; i++) {
        var num = prompt("Digite um número:");
        vetor.push(num);
      }
    
    alert("Maior numero: " + Math.max(...vetor));
    alert("Menor numero: " + Math.min(...vetor));
    
}
function vogal(c) {
    var c = prompt("Digite uma letra: ");
    if (c != 'a' && c != 'A' && c != 'e' && c != 'E' && c && 'i' &&
     c != 'I' && c != 'o' && c != 'O' && c != 'u' && c != 'U') {
        alert(0);
    } else {
        alert(1);
    }
}
 function limites(li, ls) {
    var soma = 0;
    var intervalo = [];
    var li = prompt("Insira o limite inferior:");
    var ls = prompt("Insira o limite superior:");
    var liN = parseInt(li);
    var lsN = parseInt(ls);

    for (i = liN; i <= lsN; i++) {
        if(i%2 === 0) {
            intervalo.push(i);
            soma = soma + i;
        } 
    }
    alert("Números pares no intervalo: " + intervalo);
    alert("A soma dos números pares é " + soma); 
    
 }

 function ordem(a, b, c) {
    var numeros = [0,1,2];
    var a = parseInt(prompt("Digite o primeiro número:"));
    numeros[0] = a;
    var b = parseInt(prompt("Digite o segundo número:"));
    if (b>a) {
        numeros[1] = b;
    } else {
        numeros[0] = b;
        numeros[1] = a;
    }
    var c = parseInt(prompt("Digite o terceiro número:"));
    if (c>a && c>b) {
        numeros[2] = c;
    } else if(c>a && c<b) {
        numeros[2] = b;
        numeros[1] = c;
    } else if(c<a && c>b) {
        numeros[2] = a;
        numeros[1] = c;
    } else {
        numeros[2] = numeros[1];
        numeros[1] = numeros[0];
        numeros[0] = c;
    }
    alert(numeros)
 }

 function positivo_negativo(x) {
    var x = prompt("Digite número inteiro diferente de 0:");
    var boo = false;
    if (x>0) {
        boo = true;
        alert(boo);
        return boo;
    } else if (x<0) {
        alert(boo);
        return boo;
    } else {
        alert("Erro: número inválido.")
        return -1;
    }
}

function parImpa(x) {
    var x = prompt("Digite número inteiro:");
    var boo = false;
    if (x%2===0) {
        boo = true;
        alert(boo + " >>> Número Par!");
        return boo;
    } else if (x%2===1) {
        alert(boo + " >>> Número Ímpar!");
        return boo;
    } else {
        alert("Erro: dado inválido.")
        return -1;
    }    
}