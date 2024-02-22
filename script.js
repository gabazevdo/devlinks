function toggleTheme() {
  document.documentElement.classList.toggle("light")

  const img = document.querySelector("#profile img")
  const altImg = document.querySelector("#profile alt")

  if (document.documentElement.classList.contains("light")) {
    img.setAttribute("src", "./assets/photo-dark.png")
    altImg.setAttribute(
      "alt",
      "Foto do Gabriel sorrindo com óculos escuros com fundo em degradê indo do laranja para o amarelo"
    )
  } else {
    img.setAttribute("src", "./assets/photo-light.png")
    altImg.setAttribute(
      "alt",
      "Foto do Gabriel sorrindo com fundo em degradê indo do lilás para o azul"
    )
  }
}
