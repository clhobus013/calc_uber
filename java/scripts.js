function converter(numero){
    return numero.toFixed(2).replace(".",",")
}

function calculo(){
   
    distancia=inputDistancia.value
    tempo=inputTempo.value

    valor=2+distancia*1.40+tempo*0.26

    botao.innerHTML= 'Total R$ '+valor

}

