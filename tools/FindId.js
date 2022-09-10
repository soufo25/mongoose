const Person = require("../schema/Person");

async function findId(req, res) {
  try {
    const objectId = req.query._id
    console.log(objectId)
    const personId = await Person.findById({_id: objectId});
    console.log(personId);
    res.status(200).send(personId);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

module.exports= {findId}