function aparecer(idEtq,idMnu){
let menu = document.getElementById(idEtq);
let opcion =document.getElementById(idMnu);
if (menu.classList.contains("mover")!=true){
menu.classList.add("mover");
opcion.classList.add("mnuSel");
}else{menu.classList.remove("mover");
opcion.classList.remove("mnuSel")
}
}

function hamb(id1,id2){
    let menu = document.getElementById(id1);
    let boton= document.getElementById(id2);
    menu.classList.add("menuPrin");
}