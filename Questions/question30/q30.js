var usernames = ['Admin', 'Kanwal', 'Mishal', 'Aown', 'Abbas'];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var i = usernames_1[_i];
    if (i == "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(i, "! Thankyou for logging in again!"));
    }
}
