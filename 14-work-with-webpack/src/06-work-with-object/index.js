export const studentss = [{
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
export const getSubjects = (student) => {
  return Object.keys(student.subjects).map((item) => {
    return (item.charAt(0).toUpperCase() + item.slice(1)).replace(/_/g, ' ');
  })
}