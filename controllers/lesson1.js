const jadenRoute = (req,res) => {
    res.send("Jaden Day");
};
const elishaRoute = (req,res) => {
res.send("Elisha Day");
}
const dallinRoute = (req,res) => {
res.send("Dallin Day");
}
const kylerRoute = (req,res) => {
res.send("Kyler Day");
}

module.exports = {
    jadenRoute,
    elishaRoute,
    dallinRoute,
    kylerRoute
};