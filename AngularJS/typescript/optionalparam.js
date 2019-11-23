function buildname(fname, lname) {
    if (lname)
        return fname + " " + lname;
    else
        return fname;
}
var fname1 = buildname("sumanth");
var fname2 = buildname("sumanth", "gowda");
alert(fname1);
alert(fname2);
