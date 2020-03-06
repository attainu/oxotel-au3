import React, { useState, useEffect } from 'react'

export default function FilterHotel(props) {

    const [state, setstate] = useState({
        rating: 1,
        type: "",
        checked: false,
        wifi: "no",
        filterRooms: []
    })

    useEffect(() => {
        console.log(state.filterRooms)
    })



    // const filterRating = (name, value) => {
    //     let rooms = props.hotels
    //     let tempRooms = rooms

    //     tempRooms = tempRooms.filter(room =>
    //         room.rating >= parseInt(value))

    //     setstate({
    //         ...state,
    //         filterRooms: tempRooms
    //     })
    // }




    const handelChange = (e) => {
        const { name, value } = e.target
        setstate({
            type: name,
            rating: value
        })
        filterRating()
        console.log(name, value)
    }

    const filterRating = () => {
        let rooms = props.hotels
        let tempRooms = [...rooms]

        tempRooms = tempRooms.filter(room => {
            console.log(state.rating)
            return room.rating >= parseInt(state.rating)
        }
        )

        setstate({
            ...state,
            filterRooms: tempRooms
        })
    }


    console.log(state.filterRooms)

    return (

        <div>
            {/* <input type="checkbox" onChange={check} name="rating" value="5" />
            <input type="checkbox" onChange={check} name="rating" value="4" />
            <input type="checkbox" onChange={check} name="rating" value="3" />
            <input type="checkbox" onChange={check} name="rating" value="2" /> */}
            <select name="rating" onChange={handelChange}>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <select name="wifi" onChange={handelChange}>
                <option value="yes">yes</option>
                <option value="no">no</option>
            </select>
        </div>
    )
}
