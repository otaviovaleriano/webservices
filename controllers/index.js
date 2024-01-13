const awesomeFunction = (req, res, next) => {
  res.send("Samantha Silva");
};

const returnAnotherPerson = (req, res, next) => {
  res.send("Awesome Hello World 2 !");
};

module.exports = { awesomeFunction, returnAnotherPerson };
