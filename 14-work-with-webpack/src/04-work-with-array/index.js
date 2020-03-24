export const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];

export const pairStudent = (student) => {
    const women = [];
    const men = [];
    const pair = [];

    student.map((i) => {
        if(i.slice(-1) === 'а' && i.toLowerCase() !== 'саша'){
            women.push(i)
        } else {
            men.push(i)
        }
    })

    for(let i = 0; i < women.length; i++){
        pair.push([men[i], women[i]])
    }

    return pair;
}