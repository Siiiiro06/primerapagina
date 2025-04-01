var pri = prompt('Escribe tu edad')
var seg = prompt('Escribe tus ingresos anuales')
if(pri > 16 && seg >= 1000){
    console.log('Tienes que tributar')
}
else{
    console.log('No tienes que tributar')
}