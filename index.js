function generateRandomColour(max) {
  return {
    r: Math.floor(Math.random() * Math.floor(max)),
    b: Math.floor(Math.random() * Math.floor(max)),
    g: Math.floor(Math.random() * Math.floor(max))
  }
}

console.log(generateRandomColour(255))