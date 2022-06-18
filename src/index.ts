let vuelta1 = document.getElementById("tiempo1");
let vuelta2 = document.getElementById("tiempo2");
let vuelta3 = document.getElementById("tiempo3");
let vuelta4 = document.getElementById("tiempo4");
let btnCalcular = document.getElementById("btnCalc");

btnCalcular.addEventListener("click", () => {
  let vuelta1: number = Number(tiempo1.value);
  let vuelta2: number = Number(tiempo2.value);
  let vuelta3: number = Number(tiempo3.value);
  let vuelta4: number = Number(tiempo4.value);
  let tiempoTotal: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
  let promedio: number = tiempoTotal / 4;
  console.log("El tiempo total demorado es:", tiempoTotal);
  console.log("El promedio de vuelta es de:", promedio);
});
