var User = (function () {
    function User(id, firstname, lastname, phone, password, email) {
        if (id === void 0) { id = 1; }
        if (firstname === void 0) { firstname = ''; }
        if (lastname === void 0) { lastname = ''; }
        if (phone === void 0) { phone = 1; }
        if (password === void 0) { password = ''; }
        if (email === void 0) { email = ''; }
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.password = password;
        this.email = email;
    }
    User.prototype.setId = function (id) {
        this.id = id;
    };
    User.prototype.getId = function () {
        return this.id;
    };
    return User;
}());
var user = User(10, "Alexander", "Ospina", 21321321, 'pass', 'alexospina7@hotmail.com');
user.setId(25);
console.log(user.getId());
