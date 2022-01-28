
function rot(){
    let images = document.querySelectorAll("img");
    //  0, 1, 2, 3
    // enregistré la deuxieme image dans temp1
    let temp1 = images[1].src;
    // ma deuxieme image prend la valeur de la premiere
    images[1].src = images[0].src;

    let temp2 = images[2].src;
    images[2].src = temp1;

    let temp3 = images[3].src;
    images[3] = temp2;

    images[0] = temp3;
    
}

// document.querySelector(imglion).src = "C:\A_P_C\HTML - CSS - JS\exo_complet/lion.jpg"
//     let imggirafe = document.querySelector(C:\A_P_C\HTML - CSS - JS\exo_complet/girafe).src 
//     document.querySelector(imggirafe) = document.querySelector(imglion)
//     let imgaigle = document.querySelector(C:\A_P_C\HTML - CSS - JS\exo_complet/aigle).src
//     document.querySelector(imgaigle) = document.querySelector(imggirafe)
//     let imglapin = document.querySelector(C:\A_P_C\HTML - CSS - JS\exo_complet/lapin).src
//     document.querySelector(imglapin) = document.querySelector(imgaigle)



// C:\A_P_C\HTML - CSS - JS\exo_complet