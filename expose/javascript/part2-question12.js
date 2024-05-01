let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year': '2022',
    greeting: function() { console.log('Hello!'); },
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};
// 12A.
console.log(student.name)
// 12B.
console.log(student['Grad Year'])
// 12C.
console.log(student.greeting())
// 12D.
console.log(student['Favorite Teacher'].name)
// 12E.
console.log(student.courseLoad[0])