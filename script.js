function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //if(html.classList.contains('light')) {
  // html.classList.remove('light')
  //} else{
  // html.classList.add('light')
  //}

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  //se tiver light mode, adicionar a imagem light
  //se tiver sem light, manter a imagem normal

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
