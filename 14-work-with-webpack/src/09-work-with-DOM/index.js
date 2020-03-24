
const wrapper = document.querySelector('.result');
const wrapperBox = document.createElement("div")
wrapperBox.classList.add('box-container')
export const generateBlocks = () => {
  wrapperBox.innerHTML = ''
  for(let i = 0; i < 25; i++){
    const randomBox = document.createElement("div")
    randomBox.classList.add('random-box')
    randomBox.style.backgroundColor = `rgb(${generateColor()},${generateColor()},${generateColor()})`
    wrapperBox.append(randomBox)
    wrapper.append(wrapperBox)
  }
}

 function generateColor() {
  return Math.floor(Math.random() * 256);
}

export const generateBlocksInterval = () => {
  setInterval(() => {
    generateBlocks()
  }, 1000);
}
