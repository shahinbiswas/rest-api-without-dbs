const { v4: uuid4 } = require("uuid");

const users = [
  {
    id: uuid4(),
    username: "Shahinul Islam",
    email: "shah@yahoo.com",
  },
  {
    id: uuid4(),
    username: "Chaity",
    email: "chaity@yahoo.com",
  },
];

module.exports = users;
