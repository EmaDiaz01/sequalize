const db = require('../database/models')

module.exports = {
    list:(req,res)=>{
        db.Actor.findAll()
        .then((actors)=>{
            return res.send(actors)
        })
        .catch(error => console.log(error))

    },
    detail:(req,res)=>{

    }
}