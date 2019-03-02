window.onload = () => {
  const enterDiv = document.getElementById('enter');
  const enterLink = document.querySelector('#enter a');
  const actualPage = document.getElementById('actual-page');
  const tunez = document.getElementById("tunez");
  
  enterLink.onclick = (ev) => {
    enterDiv.classList.add("hidden");
    actualPage.classList.remove("invisible");
    tunez.play();
    ev.preventDefault();
  }
}