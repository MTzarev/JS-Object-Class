function employees(input) {
class Student {
    constructor (name, id){
        this.name = name;
        this.id = id;
    }
    print(){
        console.log(`Name: ${this.name} -- Personal Number: ${this.id}`);
    }
}
let studentList = [];
for (let i=0; i<input.length; i++){
    let name = input[i];
    let id = name.length;
    let curEmployee = new Student(name, id);
    studentList.push(curEmployee);
}
studentList.forEach(e=>e.print());

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);
// employees([
//     'Samuel Jackson',
//     'Will Smith',
//     'Bruce Willis',
//     'Tom Holland'
//     ]
//     );