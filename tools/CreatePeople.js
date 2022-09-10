const Person = require("../schema/Person");

async function createPeople(req, res) {
  try {
    const arrayOfPeople = req.body.people
    const newPersons = await Person.create(arrayOfPeople);
    console.log(newPersons);
    res.status(200).send("ok");
  } catch (error) {
    console.log(error);
    res.status(500).send(error)
  }
}

module.exports = { createPeople };
