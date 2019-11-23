function buildname(fname, lname) {
    if (lname === void 0) { lname = "joshi"; }
    return fname + " " + lname;
}
var fname1 = buildname("sumanth");
var fname2 = buildname("sumanth", "gowda");
alert(fname1);
alert(fname2);
