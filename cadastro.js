var quantidadepessoas 
var datadovento 
var idade

const entrada = require('prompt-sync')({sigint: true});

datadovento = entrada("digite data do evento:");

idade = entrada("digite sua idade:");

quantidadepessoas = entrada("digite quantidade de pessoas:");

    
if( datadovento <= 20 ){
    console.log("data do evento agendada !!")
} else if ( datadovento >= 20) {
    console.log("data inválida")
}if( idade >= 18){
    console.log("idade valida")
}else if( idade < 18){
    console.log("idade invalida")
}if ( quantidadepessoas <= 100 & idade >= 18){
    console.log("cadastro do evendo finalizado")
}else{
    console.log("não foi possivel fazer o cadastro")
}

