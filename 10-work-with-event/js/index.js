const note = document.querySelectorAll('.sound-item');
const noteDo = document.querySelector('.sound-do');
const noteRe = document.querySelector('.sound-re');
const noteMi = document.querySelector('.sound-mi');
const noteFa = document.querySelector('.sound-fa');
const noteSol = document.querySelector('.sound-sol');
const noteLja = document.querySelector('.sound-lja');
const noteSi = document.querySelector('.sound-si');

note.forEach(item => {
  item.addEventListener( "click" , function() {
    const audio = this.querySelector('audio')
    audio.currentTime = 0;
    audio.play()
  });
})

document.addEventListener('keypress', (e) => {
  note.forEach((item) => {
    if(Number(item.dataset.keycodeRu) === e.keyCode ||
     Number(item.dataset.keycodeEng) === e.keyCode){
      const audio = item.querySelector('audio')
      audio.currentTime = 0;
      audio.play()
    }
  })


  // switch(event.keyCode) {
  //   case 113 :
  //   case 1081 :
  //     noteDo.play()
  //     break;

  //   case 119 :
  //   case 1094 :
  //     noteRe.play()
  //     break;

  //   case 101 :
  //   case 1091 :
  //     noteMi.play()
  //     break;

  //   case 114 :
  //   case 1082 :
  //     noteFa.play()
  //     break;

  //   case 116 :
  //   case 1077 :
  //     noteSol.play()
  //     break;

  //   case 121 :
  //   case 1085 :
  //     noteLja.play()
  //     break;

  //   case 117 :
  //   case 1075 :
  //     noteSi.play()
  //     break;

  //   default:
  //     break
  // }
});