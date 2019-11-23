var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    //member functions -->no need for function keyword
    Human.prototype.sayAge = function () {
        alert(this.age);
    };
    Human.prototype.sayName = function () {
        alert(this.name);
    };
    Human.prototype.showHobbies = function () {
        alert(this.hobbies);
    };
    Human.prototype.callMemberFunction = function () {
        this.sayName();
        this.sayAge();
        this.showHobbies();
    };
    return Human;
}());
var obj = new Human("sumanth", 22, ["snooker", "riding"]);
obj.callMemberFunction();
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, age, hobbies, behaviour) {
        var _this = _super.call(this, name, age, hobbies) || this;
        _this.workhours = 8;
        _this.behaviour = behaviour;
        return _this;
    }
    Developer.prototype.location = function () {
        alert("the developer is " + this.name + " and age is " + this.age);
    };
    return Developer;
}(Human));
var dev = new Developer("sumanth", 22, ["snooker", "riding"], "cool");
dev.location();
