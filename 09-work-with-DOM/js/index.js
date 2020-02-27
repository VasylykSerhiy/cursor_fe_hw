const wrapper = document.querySelector('.box-container');

const generateBlocks = () => {
  wrapper.innerHTML = ''
  for(let i = 0; i < 25; i++){
    const randomBox = document.createElement("div")
    randomBox.classList.add('random-box')
    randomBox.style.backgroundColor = `rgb(${generateColor()},${generateColor()},${generateColor()})`
    wrapper.append(randomBox)
  }
}

function generateColor() {
  return Math.floor(Math.random() * 256);
}

const generateBlocksInterval = () => {
  setInterval(() => {
    generateBlocks()
  }, 1000);
}

generateBlocksInterval()