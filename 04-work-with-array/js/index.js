const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];
const pair = [];

const pairStudent = (student) => {
    const women = [];
    const men = [];

    student.map((i) => {
        if(i.slice(-1) === 'а' && i.toLowerCase() !== 'саша'){
            women.push(i)
        } else {
            men.push(i)
        }
    })

    for(let i = 0; i < women.length; i++){
        pair.push([men[i] + ' і ' + women[i]])
    }

    return pair;
}
console.log(pairStudent(students));

const pairThemes = []; 
const pairAndThemes = (pair, themes) => {
    for(let i = 0; i < pair.length; i++){
        pairThemes.push([pair[i] + ' => ' + themes[i]])
    }

    return pairThemes;
}

console.log(pairAndThemes(pair, themes));

const studentMarks = [];
const getMarks = (students, marks) => {
  
    for(let i = 0; i < students.length; i++){
        studentMarks.push([students[i] + ': ' + marks[i]])
    }

    return studentMarks;
}

console.log(getMarks(students, marks));

const pairThemeMark = [];
const getThemesMark = (pairThemes) => {
    const minMark = 1,
         maxsMark = 5;

    for(let i = 0; i < pairThemes.length; i++){
        let getRandomMark = Math.floor(Math.random() * (maxsMark - minMark + 1)) + minMark;
        pairThemeMark.push([pairThemes[i] + ': ' + getRandomMark])
    }
    return pairThemeMark;
}

console.log(getThemesMark(pairThemes));