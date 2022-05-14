const apareceArriba = idEtq => {
    const elemento = document.getElementById(idEtq);
    let clientrec = elemento.getBoundingClientRect()
    let pX = clientrec.left;
    let pY = clientrec.top;
    let he = clientrec.height;

    pY = pY - he;
    elemento.style.top = pY + "px"
    let q = window.getComputedStyle(elemento).getPropertyValue("opacity")
    if (q != 0) {
        elemento.style.opacity = 0;

    } else {
        let ada = setInterval(() => {
            q = window.getComputedStyle(elemento).getPropertyValue("opacity")
            let op1 = Math.abs(1 / (pY + 60)) //error aqui
            console.log(q)
            let opa = parseInt(q) + op1
            elemento.style.opacity = opa;
            if (pY < 21) {
                pY++
                elemento.style.top = pY + "px"
            } else {
                clearInterval(ada);
            }
        }, 2);
    }


}