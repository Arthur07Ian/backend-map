import express from "express"

const app = express();

const port = 5000;

app.get("/", (req, res)=>{
    res.send({
        status: "API is fully working"
    })
})

app.listen(port, () => {
    console.log("API listening on: http://localhost:5000")
})