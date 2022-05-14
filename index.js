const apareceArriba = idEtq => {
const elemento =  document.getElementById(idEtq);
// elemento.hidden=false;
let clientrec = elemento.getBoundingClientRect()
let pX =clientrec.left;
let pY =clientrec.top;
let he=clientrec.height;

pY=pY-he;
elemento.style.top=pY+"px"
elemento.style.opacity=1;

setInterval(()=>{
    if (pY<21){
    console.log(pY)
    pY++
        elemento.style.top=pY+"px"}

    else {clearInterval();}
},2);
    
    

}




