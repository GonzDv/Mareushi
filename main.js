function deleteClass() {
  const postres = document.getElementsByClassName("postres");
  const tostadas = document.getElementsByClassName("tostadas");
  var lbp = window.matchMedia("(max-width:1400px)");
  var mbp = window.matchMedia("(max-width:1200px)");

  if (lbp.matches) {
    for (let i = 0; i < postres.length; i++) {
      postres[i].classList.remove("shu2");
    }
  } else {
    for (let i = 0; i < postres.length; i++) {
      postres[i].classList.add("shu2");
    }
  }
  if (lbp.matches) {
    for (let i = 0; i < tostadas.length; i++) {
      tostadas[i].classList.remove("shu2");
    }
  } else {
    for (let i = 0; i < tostadas.length; i++) {
      tostadas[i].classList.add("shu2");
    }
  }
}

window.addEventListener("load", deleteClass);
window.addEventListener("resize", deleteClass);
