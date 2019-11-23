function buildname(fname:string,lname?:string):string {
    if(lname)
    return fname+" " +lname;   
    else
    return fname;
}

var fname1:string=buildname("sumanth");
var fname2:string=buildname("sumanth","gowda");
alert(fname1);
alert(fname2);