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
const principal = document.querySelector(".principal")
const fragmento = document.createDocumentFragment()
const div =document.createElement("DIV")
const imagen1 = document.createElement("IMG")
imagen1.src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/04/296611-teclado-mecanico-historia-tipos-que-deberias-usarlo.jpg?itok=uj5Hh9hv"
imagen1.alt="Teclado"
imagen1.classList.add("teclado")
div.classList.add("overlay")
principal.appendChild(div)
const divdeimagen =document.querySelector(".overlay")
divdeimagen.appendChild(imagen1)


