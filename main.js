const myButton = document.querySelector("button");

myButton.addEventListener("click", () => {
  const newName = prompt("Enter your name");
  myButton.textContent = `Player 1 : ${newName}`;
});
