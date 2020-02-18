import React, { useState } from 'react';
import Hotels from "../data/data"

export default function OurRooms() {

    const [state, setstate] = useState({
        Allrooms: [],
        sortedRooms: []
    })

    const filterRooms = Hotels.filter(room => parseInt(room.price) < 1000)
    console.log(filterRooms)



    return (
        <div>
            <h1>OurRooms</h1>
            {console.log("all hotelz", Hotels)}
            <ul>
                {Hotels.map((hotel, index) => {
                    return (<div>
                        <li key={index}>
                            {hotel.hotelName}
                        </li>
                    </div>)
                })}
            </ul>
        </div>
    )
}
