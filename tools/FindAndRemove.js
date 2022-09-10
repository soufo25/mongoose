const Person =require('../schema/Person')
async function findAndRemove(req, res) {
    try { 
      const removePerson = await Person.findByIdAndRemove('6319afaa4427d440c1dcd3ff')
      console.log(removePerson);
      res.status(200).send(removePerson);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  
  module.exports= {findAndRemove}