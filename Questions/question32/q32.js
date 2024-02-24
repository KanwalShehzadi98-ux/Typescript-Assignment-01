var current_users = ['Aown', 'Abbas', 'Mishal', 'Kanwal', 'Tasleem'];
var new_users = ['Fayyaz', 'TASLEEM', 'Mishal', 'Asma', 'Iqra', 'Inam'];
var _loop_1 = function (i) {
    if (current_users.some(function (user) { return user.toLowerCase() === i.toLowerCase(); })) {
        console.log("".concat(i, " has already been used.Enter new username"));
    }
    else {
        console.log("".concat(i, " is available"));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var i = new_users_1[_i];
    _loop_1(i);
}
