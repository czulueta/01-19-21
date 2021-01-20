const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://27017/exercisesdb",
    {   useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("connected to the database!!!"))

app.use("/exercises", require("./routes/exerciseRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.lop("successfully connected to the database")
})