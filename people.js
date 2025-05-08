const names = require("./names");
const hobbies = require("./hobbies");

function init() {
  const userInfo = {
    fullName:
      names("Ariel", "Musa").first_name +
      " " +
      names("Ariel", "Musa").last_name,
    hobbies: hobbies("Musica", "Lettura", "Programmazione"),
  };
  return userInfo;
}

console.log(init());
