export default class Student {
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