const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./server_config/controllers')
const app = express();
const cors = require('cors')

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors())




app.post('/login', async (req, res) => {
    let result = {};
    try {
        const reqData = req.body;
        const validUser = await controllers.verifyLogin(reqData);
        if (!validUser) {
            result.success = false;

        }
        else {
            result.success = true;
            console.log("valid users")
        }

    } catch (err) {
        result.success = false;
        console.log('Error', err);
    }
    finally {
        res.setHeader("content-type", "application/json")
        res.send(JSON.stringify(result))
    }
})


app.post("/signup", async (req, res) => {
    let result = {}
    try {
        const reqData = req.body;
        const validDatails = await controllers.adduser(reqData)

        if (validDatails) {
            console.log("data", req.body)
            console.log("User Added Successfully")
            result.success = true;
        } else {
            console.log("user Details not valid")
            result.success = false;
        }
    }

    catch (err) {
        result.success = false;
        console.log("err", err)
    }
    finally {
        res.setHeader("content-type", "application/json")
        res.send(JSON.stringify(result))
    }
});


app.get("/allusers", async (req, res) => {

    const userRows = await controllers.readUsersData();
    // console.log("all users", userRows)
    res.setHeader("content-type", "application/json")
    res.send(JSON.stringify(userRows))
});

app.delete("/users", async (req, res) => {
    let result = {}
    try {
        const reqJson = req.body;
        const deletedUser = await controllers.deleteuser(reqJson.id)
        if (deletedUser) {
            console.log(reqJson)
            result.success = true;
        } else {
            console.log("somthing went wrong in delete")
            resul.success = false;
        }
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



