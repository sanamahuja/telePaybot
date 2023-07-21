const express = require("express")
const Port = 4000

const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.post("/", (req, res) => {
    console.log(req.body, req.headers)
    res.send()
})

app.listen(Port, () => {
    console.log("service running on port", Port)
})