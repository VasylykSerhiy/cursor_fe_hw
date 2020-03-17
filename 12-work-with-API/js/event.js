// import './index'

const btnGetInfo = document.querySelector('#get-planets')
const btnGetPerson = document.querySelector('#get-person')
const btnNext = document.querySelector('#get-next')
const btnPrev = document.querySelector('#get-prev')
const loader = document.querySelector('.lds-css')
const searchForm = document.querySelector('.search__form__film')
const formWrapper = document.querySelector('.form__wrap')
const homeBtn = document.querySelector('.home')
const btnWrapper = document.querySelector('.btn-wrap')
const launge = document.querySelector('.launge')

btnGetInfo.addEventListener('click', function(){
  ress.innerHTML = '';
  renderPlanets(pages)
  this.classList.add('none')
  loader.classList.remove('none')
  btnPrev.classList.remove('none')
  btnNext.classList.remove('none')
  btnGetPerson.classList.add('none')
})

btnNext.addEventListener('click', function(){
  if(nextPages){
    pages++;
    ress.innerHTML = '';
    loader.classList.remove('none')
    renderPlanets(pages)
  } 

  if(!prevPages){
    btnPrev.classList.remove('none')
  }
})

btnPrev.addEventListener('click', function(){
  if(pages > 1) {
    pages--
    ress.innerHTML = '';
    loader.classList.remove('none')
    renderPlanets(pages)
  } 
  if(!nextPages){
    btnNext.classList.remove('none')
  }
})

btnGetPerson.addEventListener('click', function(){
  ress.innerHTML = '';
  this.classList.add('none')
  btnWrapper.classList.add('none')
  formWrapper.classList.remove('none')
})

searchForm.addEventListener('submit', function(event){
  event.preventDefault()
  let film = searchForm.querySelector('input').value;
  ress.innerHTML = '';
  renderCharacters(film)
  this.classList.add('none')
  loader.classList.remove('none')
  formWrapper.classList.add('none')

})

homeBtn.addEventListener('click', function(){
  ress.innerHTML = '';
  loader.classList.add('none')
  btnPrev.classList.add('none')
  btnNext.classList.add('none')
  btnGetInfo.classList.remove('none')
  btnGetPerson.classList.remove('none')
  btnWrapper.classList.remove('none')
  formWrapper.classList.add('none')
  searchForm.classList.remove('none')

})

launge.addEventListener('click', function(){
  wookiee = !wookiee
  if(wookiee){
    launge.textContent  = 'Wk'
  } else {
    launge.textContent  = 'Eng'
  }
})








