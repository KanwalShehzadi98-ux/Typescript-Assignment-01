type Student = {
    name : string,
    age : number,
    education : string
};

let students : Student[] = [
    {
        name : "Kanwal Shehzadi",
        age : 21,
        education : 'BSE'
    },
    {
        name : "Aown",
        age : 13,
        education : '7'
    },
    {
        name : "Abbas",
        age : 7,
        education : '2'
    },
];

students.forEach(student => {
    console.log(`Student Name : ${student.name}`);
    console.log(`Student Age : ${student.age}`);
    console.log(`Student Education : ${student.education}`);
    console.log("----------------------------------------");
});