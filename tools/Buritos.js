const Person = require("../schema/Person")

async function chainSearch(req, res) {
    try { 
        const foodSearch = "buritos"
      const getPerson = await Person.find({favoriteFood: foodSearch}
        .sort({name:"asc"})
        .limit(-2)
        .select("-age"))
      console.log(getPerson);
      res.status(200).send(getPerson);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  
  module.exports= {chainSearch}