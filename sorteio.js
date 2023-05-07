var bicho = '';
var numeros = [];
var sorteio01 = 0;
var sorteio02 = 0;
var sorteio03 = 0;

function sorteador(){
    sorteio01 = Math.ceil((Math.random()*89) + 10);
    sorteio02 = Math.ceil((Math.random()*89) + 10);
    sorteio03 = Math.ceil((Math.random()*89) + 10);
}

function bichos(numBicho){
    switch(numBicho){
        case 1: 
            bicho = 'Avestruz';
            numeros = [01,02,03,04];
            break;
        case 2:
            bicho = 'Águia'
            numeros = [05,06,07,08];
            break;
        case 3:
            bicho = 'Burro';
            numeros = [09,10,11,12];
            break;
        case 4:
            bicho = 'Borboleta';
            numeros = [13,14,15,16];
            break;
        case 5:
            bicho = 'Cachorro';
            numeros = [17,18,19,20];
            break;
        case 6:
            bicho = 'Cabra';
            numeros = [21,22,23,24];
            break;
        case 7:
            bicho = 'Carneiro';
            numeros = [25,26,27,28];
            break;
        case 8:
            bicho = 'Camelo';
            numeros = [29,30,31,32];
            break;
        case 9:
            bicho = 'Cobra';
            numeros = [33,34,35,36];
            break;
        case 10:
            bicho = 'Coelho';
            numeros = [37,38,39,40];
            break;
        case 11:
            bicho = 'Cavalo';
            numeros = [41,42,43,44];
            break;
        case 12:
            bicho = 'Elefante';
            numeros = [45,46,47,48];
            break;
        case 13:
            bicho = 'Galo';
            numeros = [49,50,51,52];
            break;
        case 14:
            bicho = 'Gato';
            numeros = [53,54,55,56];
            break;
        case 15:
            bicho = 'Jacaré';
            numeros = [57,58,69,60];
            break;
        case 16:
            bicho = 'Leão';
            numeros = [61,62,63,64];
            break;
        case 17:
            bicho = 'Macaco';
            numeros = [65,66,67,68];
            break;
        case 18:
            bicho = 'Porco';
            numeros = [69,70,71,72];
            break;
        case 19:
            bicho = 'Pavão';0
            numeros = [73,74,75,76];
            break;
        case 20:
            bicho = 'Peru';
            numeros = [77,78,79,80];
            break;
        case 21:
            bicho = 'Touro';
            numeros = [81,82,83,84];
            break;
        case 22:
            bicho = 'Tigre';
            numeros = [85,86,87,88];
            break;
        case 23:
            bicho = 'Urso';
            numeros = [89,90,91,92];
            break;
        case 24:
            bicho = 'Veado';
            numeros = [93,94,95,96];
            break;
        case 25:
        default:
            bicho = 'Vaca';
            numeros = [97,98,99,00];
            break;
    }
}
function escolheOpcao(){
    if(document.getElementById("dezena").checked){
        sorteiaDezena();
    }
    if(document.getElementById("bicho").checked){
        sorteiaBicho();
    }
}

function sorteiaDezena(){
    var numDezena = Number(document.getElementById("numeroOrBicho").value);
    var valorAposta = Number(document.getElementById("valorAposta").value);
    let resultados = [];
    let totalGanho = 0;
    sorteador();

    //Mostra os numeros sorteados
    document.querySelector(".sorteio").innerHTML = "Primeiro sorteio: " + sorteio01 + '<br /> Segundo sorteio: ' + sorteio02 + '<br /> Terceiro sorteio: ' + sorteio03
    //Chama a função bichos
    bichos(Math.ceil(numDezena/4))
    //Verifica o se acertou o bicho pela dezena
    if((numDezena == sorteio01)){
        let valorGanho = valorAposta * 50;
        totalGanho += valorGanho;
        resultados.push('Primeiro sorteio: Ganhou R$ ' + valorGanho + '<br />');
    }
    if(numDezena == sorteio02){
        let valorGanho = valorAposta * 7;
        totalGanho += valorGanho;
        resultados.push('Segundo sorteio: Ganhou R$ ' + valorGanho + '<br />');
    }
    if (numDezena == sorteio03){
        let valorGanho = valorAposta * 7;
        totalGanho += valorGanho;
        resultados.push('Terceiro sorteio: Ganhou R$ ' + valorGanho + '<br />');
    }
    //Verifica se deu o bicho pelo grupo
    if((sorteio01 == numeros[0]) || (sorteio01 == numeros[1]) || (sorteio01 == numeros[2]) || (sorteio01 == numeros[3])){
        let valorGanho = valorAposta * 1;
        totalGanho += valorGanho;
        resultados.push('Animal sorteado: '+ bicho + ' Ganhou R$ ' + valorGanho + '<br />');
    }
    if((sorteio02 == numeros[0]) || (sorteio02 == numeros[1]) || (sorteio02 == numeros[2]) || (sorteio02 == numeros[3])){
        let valorGanho = valorAposta * 1;
        totalGanho += valorGanho;
        resultados.push('Animal sorteado: '+ bicho + ' Ganhou R$ ' + valorGanho + '<br />');
    }
    if((sorteio03 == numeros[0]) || (sorteio03 == numeros[1]) || (sorteio03 == numeros[2]) || (sorteio03 == numeros[3])){
        let valorGanho = valorAposta * 1;
        totalGanho += valorGanho;
        resultados.push('Animal sorteado: '+ bicho + ' Ganhou R$ ' + valorGanho + '<br />');
    }
    /**********/
    //Consulta os resultados para ver se ganhou
    if (resultados.length>0){
        let verificaGanhos = '';
        resultados.forEach(resultados => {
            verificaGanhos += resultados;
        });
        document.querySelector(".resultado").innerHTML = verificaGanhos + '<br /> Ganho total: R$ ' + totalGanho;
    }else{
        document.querySelector(".resultado").innerHTML = 'Não foi dessa vez :(';
    }
}

function sorteiaBicho(){
    var numBicho = Number(document.getElementById("numeroOrBicho").value);
    var valorAposta = Number(document.getElementById("valorAposta").value);
    let resultados = [];
    let totalGanho = 0;

    sorteador();
    //Mostra os numeros sorteados
    document.querySelector(".sorteio").innerHTML = "Primeiro sorteio: " + sorteio01 + "<br />Segundo sorteio: " + sorteio02 + "<br />Terceiro sorteio: " + sorteio03

    bichos(numBicho);
    //Verifica se deu o bicho pela posição dos numeros do grupo
    if((sorteio01 == numeros[0]) || (sorteio01 == numeros[1]) || (sorteio01 == numeros[2]) || (sorteio01 == numeros[3])){
        let valorGanho = valorAposta * 12;
        totalGanho += valorGanho;
        resultados.push('Animal sorteado: '+ bicho + ' Ganhou R$ ' + valorGanho + '<br />');
    }
    if((sorteio02 == numeros[0]) || (sorteio02 == numeros[1]) || (sorteio02 == numeros[2]) || (sorteio02 == numeros[3])){
        let valorGanho = valorAposta * 3;
        totalGanho += valorGanho;
        resultados.push('Animal sorteado: '+ bicho + ' Ganhou R$ ' + valorGanho + '<br />');
    }
    if((sorteio03 == numeros[0]) || (sorteio03 == numeros[1]) || (sorteio03 == numeros[2]) || (sorteio03 == numeros[3])){
        let valorGanho = valorAposta * 3;
        totalGanho += valorGanho;
        resultados.push('Animal sorteado: '+ bicho + ' Ganhou R$ ' + valorGanho + '<br />');
    }   
    //Verifica se o bicho escolhido existe
    else if(numBicho > 25 || numBicho < 1){
        alert('O bicho escolhido nao existe !!')
    }
    //Consulta os resultados para ver se ganhou
    if (resultados.length>0){
        let verificaGanhos = '';
        resultados.forEach(resultados => {
            verificaGanhos += resultados;
        });
        document.querySelector(".resultado").innerHTML = verificaGanhos + '<br /> Ganho total: R$ ' + totalGanho;
    }else{
        document.querySelector(".resultado").innerHTML = 'Não foi dessa vez :(';
    }
}

