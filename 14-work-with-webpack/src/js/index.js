const result = document.querySelector('.result');
import {maxPrice} from '../01-work-with-variables/index'
import {calculate} from '../02-work-with-сyclesAndBranches/index'
import {getMaxDigit} from '../03-work-with-function/index'
import {pairStudent, students} from '../04-work-with-array/index'
import {getModa} from '../05-work-with-array2/index'
import {getSubjects, studentss} from '../06-work-with-object/index'
import {getMyTaxes, ukraine} from '../07-work-with-locking/index'
import Student from '../08-work-with-class/index'
import {generateBlocks} from '../09-work-with-DOM/index'
import {playAudio} from '../10-work-with-event/index'
import {startGetRandomChinese}  from '../11-work-with-promises/index'
import {renderPlanets, pages} from '../12-work-with-API/index'
import '../../../12-work-with-API/css/reset.css'
import '../../../12-work-with-API/css/style.css'
import {createIdGenerator} from '../13-work-with-generator'
const btn = document.querySelectorAll('.item__btn')


btn.forEach((item, index) => {
  item.addEventListener("click", function() {
    if(`btn1` === `btn${index+1}`){
      result.innerHTML = maxPrice
    } else if (`btn2` === `btn${index+1}`){
      result.innerHTML =`The result of the sum of numbers: <b>${calculate()}</b>`
    } else if (`btn3` === `btn${index+1}`){
      result.innerHTML = `The largest number in the list 192837465: ${getMaxDigit('192837465')}`
    } else if (`btn4` === `btn${index+1}`){
      result.innerHTML = pairStudent(students)
    } else if (`btn5` === `btn${index+1}`){
      const numbers = prompt('Enter numbers by space', '5 2 5 4 6 9 8 8 12 12 45 8 5');
      result.innerHTML = (`Mode from the numbers ${numbers}-> ${getModa(...numbers)}`)
    } else if (`btn6` === `btn${index+1}`) {
      result.innerHTML = getSubjects(studentss[0])
    } else if (`btn7` === `btn${index+1}`) {
      result.innerHTML = `You will pay in ukraine => ${getMyTaxes.call(ukraine, 1000)}` 
    } else if (`btn8` === `btn${index+1}`) {
      let student = new Student ('Высшей Школы Мошенничества г.Одесса', 1, 'Остап Родоманський Бендер')
      result.innerHTML = `
      ${student.getInfo()} <br>
      Массив оценок студента => ${student.marks} <br>
      Студент получил еще одну оценку ${student.marks = 5} => ${student.marks} <br>
      Средняя оценка студента => ${student.getAverageMark()} <br>
      `
    } else if (`btn9` === `btn${index+1}`) { 
      generateBlocks()
    } else if (`btn10` === `btn${index+1}`) { 
      playAudio()
    } else if (`btn11` === `btn${index+1}`) {
      startGetRandomChinese()
    } else if (`btn12` === `btn${index+1}`) {
      renderPlanets(pages)
    } else if (`btn13` === `btn${index+1}`) {
      const idGenerator = createIdGenerator();

      result.innerHTML = `
      idGenerator.next().value = >${idGenerator.next().value}<br>
      idGenerator.next().value = >${idGenerator.next().value}<br>
      idGenerator.next().value = >${idGenerator.next().value}<br>
      idGenerator.next().value = >${idGenerator.next().value}<br>
      `
    }
  });
})