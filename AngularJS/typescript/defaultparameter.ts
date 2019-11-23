function buildname(fname:string,lname:string="joshi"):string {
    return fname+" " +lname;   
}

var fname1:string=buildname("sumanth");
var fname2:string=buildname("sumanth","gowda");
alert(fname1);
alert(fname2);