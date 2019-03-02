document.addEventListener('readystatechange', event => {
  if (event.target.readyState === "complete") {
    let tunez = document.getElementById("tunez");
    const playPromise = tunez.play();
    if (playPromise !== null){
        playPromise.catch(() => { tunez.play(); })
    }
  }
});