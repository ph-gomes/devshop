const bcrypt = require("bcryptjs");

const generatePassHash = password => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  return hash;
};

const initialUser = db => async _ => {
  const countUsers = await db("users").count("id as total");
  if (countUsers[0].total === 0) {
    const userAdm = {
      name: "Admin",
      email: "admin@admin.com.br",
      password: generatePassHash("AdminP@ssw0rd!"),
      email_checked: true,
      created: new Date(),
      updated: new Date(),
      roles: "admin,financial,customer"
    };
    await db("users").insert(userAdm);
  }
};

const login = db => async (email, password) => {
  const user = await db("users")
    .select("*")
    .where("email", email);

  if (user.length === 0) {
    throw new Error("Invalid user.");
  }
  if (!bcrypt.compareSync(password, user[0].password)) {
    throw new Error("Invalid password.");
  }

  return user;
};

module.exports = {
  initialUser,
  login
};
