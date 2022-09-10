const Person =require("../schema/Person");

async function addBuger(req, res) {
    try { 
        const objectId = req.query._id
      const addFood = await Person.findById({_id:objectId},{favoriteFood}.push("Hamburger","buritos"))
      console.log(addFood);
      res.status(200).send(addFood);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  
  module.exports= {addBuger}