const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    data_science: [5, 5, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
  }
},
{
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
},
{
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}
];

// funk 1
const getSubjects = (student) => {
  const result = []
  const predmeti = Object.keys(student.subjects)
  const letterUp = predmeti.map((item) => {
    return (item.charAt(0).toUpperCase() + item.slice(1));
  })

  for (let i = 0; i < letterUp.length; i++) {
    if (letterUp[i].indexOf('_') > 0) {
      createSpace = letterUp[i].slice(0, letterUp[i].indexOf('_')) + " " + letterUp[i].slice(letterUp[i].indexOf('_') + 1)
      result.push(createSpace)
    } else {
      result.push(letterUp[i])
    }
  }
  return result
}

// func 2
const getAverageMark = (student) => {
  const studentMarks = Object.values(student.subjects).flat();
  return (studentMarks.reduce((sum, item) => {
    sum += item
    return sum
  },0)/studentMarks.length).toFixed(2);
}

// func 3
const getStudentInfo = (student) => {
  const result = {}
  const studentMarks = Object.values(student.subjects).flat();
  const averageMark = (studentMarks.reduce((sum, item) => {
    sum += item
    return sum
  },0)/studentMarks.length).toFixed(2);

  result.course = Number(Object(student.course));
  result.name = String(Object.values(student.name.split(' ')));
  result.averageMark = Number(averageMark)

  return result
}

// ToDo:  func 4 
const getStudentsNames = (student) => {
  const studentsName = []
  student.map(item => {
    studentsName.push(Object.values(item.name.split(' ')))
  })
  return studentsName.flat().sort()
}

// ToDo: func 5 
  const getBestStudent = (students) => {
    const result = {}
    Object.values(students).map((item) => {
      const getmark = getAverageMark(item);
      result[item.name] = getmark
    },{})

    let maxMark = 0;
    let biggestName = ''
    for(key in result){
      if(result[key] > maxMark){
        maxMark = result[key]
        biggestName = key
      } else if(maxMark[key] === maxMark){
        maxMark = result[key]
        biggestName += ` ${key}`
      }
    }

    return biggestName
  }

// TODO: func 6  
const calculateWordLetters = (string) => {
  return string.toLowerCase().split('').reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {})
}