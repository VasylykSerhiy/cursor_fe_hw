const ress = document.querySelector('.result');

const runGetSubjects = (student) => {
  const name = Object.values(student.name.split(' '));
  ress.innerHTML += (`List of objects of ${name} => ${getSubjects (student)} <br>`)
}

const runGetAverageMark = (student) => {
  ress.innerHTML += (`Average rating ${Object.values(student.name.split(' '))} => ${getAverageMark(student)} <br>`)
}

const runGetStudentInfo = (student) => {
  let resultString = '';
  for (key in getStudentInfo(student)) {
    resultString += `"${key}": ${getStudentInfo(student)[key]} | `
  }
  ress.innerHTML += (`General information => ${resultString} <br>`)
}

const runGetStudentsNames = (student) => {
  ress.innerHTML += (`Sort names  => ${getStudentsNames(student)} <br>`)
}

const runGetBestStudent = (student) => {
  ress.innerHTML += (`Best student => ${getBestStudent(student)} <br>`)
}

const runCalculateWordLetters = (string) => {
  let resultString = '';
  for (key in calculateWordLetters(string)) {
    resultString += `"${key}": ${calculateWordLetters(string)[key]} | `
  }
  ress.innerHTML += (`In a word ${string} => ${resultString} <br>`)

} 