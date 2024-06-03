const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hello, welcome ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Halo brooo ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
