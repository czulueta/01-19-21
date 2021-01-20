const express = require("expres")
const exerciseRouter = express.Router() 
const Exercise = require("../models/exercise.js")

// get all exercises
exerciseRouter.get("/", (req, res, next) => {
    Exercise.find((err, exercises) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(exercises)
    })
})
// post exercises
exerciseRouter.post("/", (req, res, next) => {
    const newExercise = new Exercise(req.body)
    newExercise.save((err, savedExercise) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedExercise)
    })
})

module.exports = exerciseRouter