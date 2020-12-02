fs = require("fs");
const readline = require("readline");

const readInterface = readline.createInterface({
  input: fs.createReadStream("./day2_data.txt"),
  console: false,
});

const parseLine = (line = "") => {
  return line.split(" ");
};

let count = 0;

const isValidPasswordFirstChallenge = (line = []) => {
  const charToCount = line[1].split("")[0];
  const stripped = line[2].split("").filter((char) => {
    return char === charToCount;
  }).length;
  const Range = line[0].split("-");
  const MinNumber = Range[0];
  const MaxNumber = Range[1];
  if (stripped >= Number(MinNumber) && stripped <= Number(MaxNumber)) {
    count += 1;
    return true;
  }
  return false;
};

const isValidPasswordSecondChallenge = (line = []) => {
  const charToMatch = line[1].split("")[0];
  const splitted = line[2].split("");
  const Range = line[0].split("-");
  const FirstOcc = Number(Range[0]);
  const SecondOcc = Number(Range[1]);

  return (
    (splitted[FirstOcc - 1] === charToMatch ||
      splitted[SecondOcc - 1] === charToMatch) &&
    !(
      splitted[FirstOcc - 1] === charToMatch &&
      splitted[SecondOcc - 1] === charToMatch
    )
  );
};

console.clear();

readInterface.on("line", function (line) {
  if (isValidPasswordSecondChallenge(parseLine(line))) {
    count++;
  }
  console.log(count);
});
