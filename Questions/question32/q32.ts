let current_users : string[] = ['Aown','Abbas','Mishal','Kanwal','Tasleem'];
let new_users : string[] = ['Fayyaz','TASLEEM','Mishal','Asma','Iqra','Inam'];

for(let i of new_users){
    if(current_users.some(user => user.toLowerCase() === i.toLowerCase())){
        console.log(`${i} has already been used.Enter new username`);
    }
    else{
        console.log(`${i} is available`);
    }
}

