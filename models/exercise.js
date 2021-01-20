const mongoose = require("mongoose")
const Schema = mongoose.Schema

const exerciseSchema = new Schema({
    chestWorkout: {
        type: String,
        required: true
    },
    armWorkout: {
        type: String,
        required: true
    },
    legWorkout: {
        type: String,
        required: true
    },
    backWorkout: {
        type: String,
        required: true
    },
    shoulderWorkout: {
        type: String,
        required: true
    },
    likes: {
        type: Number
    }
})

module.exports = mongoose.model("Exercise", exerciseSchema)