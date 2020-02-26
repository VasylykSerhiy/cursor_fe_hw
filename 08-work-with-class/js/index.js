class Student {
  constructor (university, course, fullName){
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marksStudent = [5, 4, 4, 5];
    this.fired = false;
  }

  getInfo(){
   return `Студент ${this.course}го курса ${this.university}, ${this.fullName}`;
  }

  get marks(){
    if( this.fired){
      return null
    } else {
      return this.marksStudent
    }
  }

  set marks(value){
    return this.marksStudent.push(value)
  }

  getAverageMark(){
    return (this.marksStudent.reduce((sum, item) => sum += item, 0)) / this.marksStudent.length
  }

  dismiss() {
     return this.fired = true
  }

  recover() {
     return this.fired = false
  }
}

let student = new Student ('Высшей Школы Мошенничества г.Одесса', 1, 'Остап Родоманський Бендер')
console.log(student.getInfo());
console.log(`Массив оценок студента => ${student.marks}`);
console.log(`Студент получил еще одну оценку ${student.marks = 5} => ${student.marks}`);
console.log(`Средняя оценка студента => ${student.getAverageMark()}`);

console.log(``);
console.log(`/////////////////////////Advanced//////////////////////////////`);

class BudgetStudent extends Student{
  constructor(university, course, fullName){
    super(university, course, fullName);
    this.initInterval();
  }

  getScholarship(){
    if(this.getAverageMark() >= 4 && !this.fired){
      console.log(`Вы получили 1400 грн. стипендии`);
    }
  }

  initInterval() {
    setInterval(() => {
      this.getScholarship();
    }, 30000)
  }
}

let anton = new BudgetStudent ('Высшей Школы Мошенничества г.Львов', 6, 'Антон Родоманський Бендер')
console.log(anton.getInfo());