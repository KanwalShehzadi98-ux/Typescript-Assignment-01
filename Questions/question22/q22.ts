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

for(let i : number = 0 ; i <= students.length ; i++){
    console.log(students[i]);
}

// CORRECTION

for(let i : number = 0 ; i < students.length ; i++){
    console.log(students[i]);
}

