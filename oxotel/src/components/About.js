import React, { useEffect } from 'react'
import { useSelector, } from 'react-redux'


export default function About() {


    useEffect(() => {
        console.log("ggddfdf", data)
    });
    const data = useSelector(state => state)

    const testUser = () => {
        console.log("ggddfdf", data)
    }
    return (
        <div>
            <button onClick={testUser}>Check</button>
            About
        </div>
    )
}
