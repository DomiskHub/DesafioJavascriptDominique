const button = document.getElementById("button");
button.addEventListener("click", () => {
  const cantidad = document.getElementById("cantidad").value;
  const precioNotebook = 800000;
  const precioTotal = document.getElementById("precioTotal");
  precioTotal.innerText = cantidad * precioNotebook;
  const cantidadTotal = document.getElementById("cantidadTotal");
  cantidadTotal.innerText = cantidad;
  const colores = document.getElementById("color").value;
  const colorTotal = document.getElementById("colorTotal");
  colorTotal.style.backgroundColor = colores;
  colorTotal.style.display = "inline-block";
});
