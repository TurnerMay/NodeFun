const path = require("path");
const fs = require("fs");

const chirpsArr = [
  { Username: "TWM007", Message: "Yeah Boy Howdy!" },
  { Username: "ShotGunDaddy", Message: "You better get flat!" },
  { UserName: "JWM006", Message: "Clean your room!" },
  { Username: "V. Putin", Message: "War, what is it good for?" },
  { Username: "DJT", Message: "I'm a worthless fat fuck" },
];

fs.writeFile("chirps.json", JSON.stringify(chirpsArr), (err) => {
  if (err) console.log(err);
});

path.join(__dirname, "chirps.json");

fs.readFile("chirps.json", (err, data) => {
  if (err) console.log(err);
  console.log(data.toString());
});
