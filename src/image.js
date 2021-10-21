const makeImage = (url, height = '100', width = '100') => {
  const image = document.createElement("img")

  image.src = url
  image.height = height
  image.widdth = width
  return image
}

export default makeImage