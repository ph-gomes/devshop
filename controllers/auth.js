const user = require("../models/user");

const login = db => async (req, res) => {
  const userFromDB = await user.login(db)(req.body.email, req.body.password);
  res.send(userFromDB);
};
module.exports = {
  login
};
