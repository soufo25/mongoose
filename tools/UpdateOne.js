const Person =require('../schema/Person')
async function updateOne(req, res) {
    try {
      const name = req.query.name;
      console.log(name)
      const updateName = await Person.findOneAndUpdate({ firstName: name },{$set:
    {firstName: 'John'}});
      console.log(updateName);
      res.status(200).send(updateName);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  
  module.exports= {updateOne}