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
  return letterUp = Object.keys(student.subjects).map((item) => {
    return (item.charAt(0).toUpperCase() + item.slice(1)).replace(/_/g, ' ');
  })
}

// func 2
const getAverageMark = (student) => {
  const studentMarks = Object.values(student.subjects).flat();
  return Number((studentMarks.reduce((sum, item) => {
    sum += item
    return sum
  }, 0) / studentMarks.length).toFixed(2));
}

// func 3
const getStudentInfo = (student) => {
  const result = {}
  const averageMark = getAverageMark(student)
  result.course = student.course;
  result.name = student.name;
  result.averageMark = Number(averageMark)
  return result
}

console.log(getStudentInfo(students[0]));
// ToDo:  func 4 
const getStudentsNames = (student) => {
  return studentsName = student.map(item => {
    return Object.values(item.name.split(' '))
  }).flat().sort()
}
// ToDo: func 5 
const getBestStudent = (students) => {
  let maxMark = 0;
  let bestStudentName = '';
  Object.values(students).forEach((item) => {
    const getmark = getAverageMark(item);
    if (getmark > maxMark) {
      maxMark = getmark;
      bestStudentName = item.name;
    }
  });
  return bestStudentName;
}

// TODO: func 6  
const calculateWordLetters = (string) => {
  return string.toLowerCase().split('').reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {})
}