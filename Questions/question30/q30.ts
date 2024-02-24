let usernames : string[] = ['Admin','Kanwal','Mishal','Aown','Abbas'];

for(let i of usernames){
    if(i == "Admin"){
        console.log("Hello admin, would you like to see a status report?");
    }
    else{
        console.log(`Hello ${i}! Thankyou for logging in again!`);
    }
}


