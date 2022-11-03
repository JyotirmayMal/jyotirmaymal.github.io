
const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const choco = document.querySelector(".choco img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info");


container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 12;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 12;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => 
{
  card.style.transition = "none";
 
  title.style.transform = "translateZ(600px)";
  choco.style.transform = "translateZ(330px) rotateZ(21deg)";
  description.style.transform = "translateZ(-25px)";
});

container.addEventListener("mouseleave", (e) => 
{
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  title.style.transform = "translateZ(0px)";
  choco.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
});