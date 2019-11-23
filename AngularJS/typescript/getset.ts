class Person{
    private _name:string = null;

    public get name():string{
        return "the name is "+this._name;
    }

    public set name(value:string):string{
        this._name=value;
    }
}

var ob = new Person();
ob.name = "sumanth";
alert(ob.name);