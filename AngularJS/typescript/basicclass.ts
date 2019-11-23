class Human{
    //no need for var keyword

    public name:string;
    protected age:number;
    private hobbies:string[];

    constructor(name:string,age:number,hobbies:string[]){
        this.name=name;
        this.age=age;
        this.hobbies=hobbies;
    }

    //member functions -->no need for function keyword
    public sayAge() {
        alert(this.age);    
    }
    public sayName(){
        alert(this.name);
    }
    public showHobbies(){
        alert(this.hobbies);
    }
    public callMemberFunction(){
        this.sayName();
        this.sayAge();
        this.showHobbies();
    }
}

var obj = new Human("sumanth",22,["snooker","riding"]);
obj.callMemberFunction();


class Developer extends Human{
    public workhours:number = 8;
    behaviour:string;

    constructor(name,age,hobbies,behaviour)
    {
        super(name,age,hobbies);
        this.behaviour=behaviour;
    }
    location(){
        alert(`the developer is ${this.name} and age is ${this.age}`);
    }
}

var dev= new Developer("sumanth",22,["snooker","riding"],"cool");
dev.location();