
let hoy = new Date();
let comienzoAño = new Date(hoy.getFullYear(), 0, 1); 


let diferencia = hoy - comienzoAño;


let diaDelAño = Math.floor(diferencia / (1000 * 60 * 60 * 24)) + 1;

console.log(diaDelAño);
let diasEspeciales = [15, 46, 74, 105, 135, 166, 196, 227, 258, 288, 319, 349];






let inicio = new Date(2023, 7, 15); 


let años = hoy.getFullYear() - inicio.getFullYear();
let meses = hoy.getMonth() - inicio.getMonth();

let totalMeses = años * 12 + meses;


if (hoy.getDate() < inicio.getDate()) {
  totalMeses--;
}

console.log(`Pasaron ${totalMeses} meses completos desde el 15 de agosto de 2023`);











if (diasEspeciales.includes(diaDelAño)) {
      document.getElementById('diasFaltantes').textContent = `HOY CUMPLIMOS ${totalMeses} MESES MI AMOR!!!!!!!!!<3<3`
      for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = (3 + Math.random() * 3) + "s";
        document.body.appendChild(heart);
      }

      
  } else {
  
    let siguiente = diasEspeciales.find(dia => dia > diaDelAño);
  
    if (siguiente !== undefined) {
      let faltan = siguiente - diaDelAño;
      document.getElementById('diasFaltantes').textContent = `Faltan ${faltan} días para que cumplamos ${totalMeses + 1} meses mi amor<3`;
    } else {
   
      let faltan = 365 - diaDelAño + diasEspeciales[0];
    document.getElementById('diasFaltantes').textContent = `Faltan ${faltan} días para cumplir ${totalMeses + 1} el próximo año mi amor<3`
    }
  }


  

