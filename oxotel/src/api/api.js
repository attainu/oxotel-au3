

function addNewuser(data) {
    console.log("getting data", data)

    fetch('http://localhost:5000/signup', {
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

function verifyLoginDetails(props, getData) {
    console.log("getting data", getData)

    fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(getData)
    })
        .then((data) => data.json())
        .then(response => {
            console.log("success :", response)
            if (response.success === true) {
                // props.history.push("/test")
                alert("Login Successfully")
                return true
            } else {
                alert("wrong credintial")
                return false
            }
        })
        .catch((err) => {
            console.log('error', err)
            return false
        })
}


function getuser() {
    fetch("http://localhost:5000/allusers")
        .then((data) => data.json())
        .then(response => {
            console.log("responese ", response)
        })
}

export { addNewuser, getuser, verifyLoginDetails };