function aparecer(idEtq,idMnu){
let menu = document.getElementById(idEtq);
let opcion =document.getElementById(idMnu);
let hamburguesa = document.getElementById("menuPrincipal");
menu.classList.toggle("mover")
 opcion.classList.toggle("mnuSel")
console.log("aparecio")
}

function hamb(id1,id2){

    let menu = document.getElementById(id1);
    let boton= document.getElementById(id2);
    let color1 =document.querySelector(".drop")
    let estilo =window.getComputedStyle(color1,null)
    let a=boton.clientWidth
    console.log(a)
console.log(estilo.getPropertyValue("color"));
    if (a === 56){
        console.log("why")
        if(estilo.getPropertyValue("color") =="rgb(255, 255, 255)")
       { menu.classList.toggle("menuPrin");}

}
}