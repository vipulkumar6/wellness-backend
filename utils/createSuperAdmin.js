const bcrypt = require("bcryptjs");
const User = require("../models/User");

async function createSuperAdmin() {
  const email = "mydiabeteswellness25@gmail.com";
  const password = "mdw@2026";

  const exists = await User.findOne({ email });
  if (exists) return;

  const hashed = await bcrypt.hash(password, 10);

  await User.create({
    name: "Super Admin",
    email,
    passwordHash: hashed,
    role: "SUPER_ADMIN"
  });

  console.log("🌟 Super Admin Created!");
}

module.exports = createSuperAdmin;
