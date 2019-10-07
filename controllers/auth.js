const user = require("../models/user");

const login = db => async (req, res) => {
  try {
    const userFromDB = await user.login(db)(req.body.email, req.body.password);
    req.session.user = userFromDB;

    res.redirect("/");
  } catch (err) {
    res.send(`${err}`);
  }
};

const logout = (req, res) => {
  req.session.destroy(() => {});
  res.redirect("/");
};
module.exports = {
  login,
  logout
};
