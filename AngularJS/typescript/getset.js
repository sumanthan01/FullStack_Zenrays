var Person = /** @class */ (function () {
    function Person() {
        this._name = null;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return "the name is " + this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var ob = new Person();
ob.name = "sumanth";
alert(ob.name);
