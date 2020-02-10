var { Client } = require('pg')

const client = new Client({
    "user": "postgres",
    "password": "Undirmama@46",
    "host": "localhost",
    "port": 5432,
    "database": "banks"
})


start()
async function start() {
    await connect();
}

async function connect() {
    try {
        await client.connect();
        console.log('database connencted')
    }
    catch (error) {
        console.error(`Failed to connect ${err}`)
    }
}

async function readUsersData() {
    try {
        const results = await client.query("select * from users");
        console.log("success", results.rows)
        return results.rows;
    }
    catch (e) {
        return [];
    }
}

async function adduser(data) {
    console.log(data)
    try {
        const text = 'INSERT INTO users( firstname, lastname, email, password) VALUES($1, $2, $3, $4) RETURNING *'
        const values = [data.firstname, data.lastname, data.email, data.password]
        await client.query(text, values, (err, res) => {
            if (err) {
                console.log(err.stack)
            } else {
                console.log(res.rows[0])
            }
        })
        return true
    }
    catch (e) {
        return false;
    }
}

async function deleteuser(id) {

    try {
        await client.query("delete from users where id = $1", [id]);
        return true
    }
    catch (e) {
        console.log(e)
        return false;
    }
}

module.exports = { readUsersData, adduser, deleteuser, start }
