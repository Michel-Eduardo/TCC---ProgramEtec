let cont = 1;
document.getElementById("radio1").checked = true;
setInterval(function(){
    proximaImagem();
}, 3500)

function proximaImagem(){
    cont++;
    if(cont>5){
        cont=1;
    }
    document.getElementById("radio"+cont).checked = true;
}