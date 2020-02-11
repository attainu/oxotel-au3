const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./database/controllers')
const app = express();
const cors = require('cors')

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// const ENV = process.env.NODE_ENV

app.get("/users", async (req, res) => {
    const userRows = await controllers.readUsersData();
    res.setHeader("content-type", "application/json")
    res.send(JSON.stringify(userRows))
});


app.post("/users", async (req, res) => {
    let result = {}
    try {
        const reqJson = req.body;
        await controllers.adduser(reqJson)
        console.log("data", req.body)
        result.success = true;
    }
    catch (e) {
        result.success = false;
        console.log(e)
    }
    finally {
        res.setHeader("content-type", "application/json")
        res.send(JSON.stringify(result))
    }

});


app.delete("/users", async (req, res) => {
    let result = {}
    try {

        const reqJson = req.body;
        await controllers.deleteuser(reqJson.id)
        console.log(reqJson)
        result.success = true;
    }
    catch (e) {
        result.success = false;
    }
    finally {
        res.setHeader("content-type", "application/json")
        res.send(JSON.stringify(result))
    }
})



app.listen(5000, () => {
    console.log("server running on port 5000")
})



