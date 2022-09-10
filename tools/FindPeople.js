const model = require('mongoose')
const Person = require('../schema/Person')



async function  findPeople(req,res){
    try {
      const people= await Person.find()
      console.log(people)
      res.status(200).send(people)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }

  module.exports = {findPeople}