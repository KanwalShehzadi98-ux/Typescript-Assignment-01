var students = [
    {
        name: "Kanwal Shehzadi",
        age: 21,
        education: 'BSE'
    },
    {
        name: "Aown",
        age: 13,
        education: '7'
    },
    {
        name: "Abbas",
        age: 7,
        education: '2'
    },
];
students.forEach(function (student) {
    console.log("Student Name : ".concat(student.name));
    console.log("Student Age : ".concat(student.age));
    console.log("Student Education : ".concat(student.education));
    console.log("----------------------------------------");
});
