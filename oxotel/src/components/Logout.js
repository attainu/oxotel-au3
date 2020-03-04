import React, { useEffect } from 'react'

export default function Logout(props) {

    useEffect(() => {
        localStorage.clear("signupData")
    }, [])

    props.history.push("/")

    return (
        <div>
            Hello
        </div>
    )
}
