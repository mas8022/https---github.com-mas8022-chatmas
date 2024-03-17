const { sign } = require("jsonwebtoken");

const generateToken = (data) => {
  const token = sign({ ...data }, process.env.privateKey, {
    expiresIn: "24h",
  });

  return token;
};

export { generateToken };
