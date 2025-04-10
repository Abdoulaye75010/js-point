// Vous mettrez ici le code JavaScript principal
console.log("point");

let point = new Point(5, 10)

console.log(point);

console.log(point.abscisse);

console.log(point.ordonnee);

// Clique sur le bouton 
const bouton = document.getElementById("create_point");
bouton.addEventListener("click", () => {
   let abscisse = document.querySelector("#x").value;
   let ordonnee = document.querySelector("#y").value;
   console.log(typeof abscisse);
   abscisse = Number(abscisse);
   console.log(typeof abscisse);


})