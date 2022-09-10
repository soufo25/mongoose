const Person = require("../schema/Person");

async function findOne(req, res) {
  try {
    const name = req.query.name;
    console.log(name)
    const findPerson = await Person.findOne({ firstName: name });
    console.log(findPerson);
    res.status(200).send(findPerson);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

module.exports= {findOne}