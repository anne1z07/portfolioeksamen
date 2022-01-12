const colors = [
  "#BFB9B5",
  "#9C8C97",
  "#9C8C97",
  "#B87896",
  "#B799B9",
  "#C29DA9",
  "#C8B1B8",
  "#D1CAC4",
];

const btn = document.getElementById("btn");

const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //   console.log(document.body);

  // get random number between 0 and 7

  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];

  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
