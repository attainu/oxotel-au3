

function addNewuser(data) {
    console.log("getting data", data)

    fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then((data) => data.json())
        .then(response => {
            console.log("success :", response)
        })
        .catch((err) => {
            console.log('error', err)
        })
}

function getuser() {
    fetch("http://localhost:5000/users")
        .then((data) => data.json())
        .then(response => {
            console.log("responese ", response)
        })
}

export { addNewuser, getuser };