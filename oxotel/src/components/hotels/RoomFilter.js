import React, { useState, useEffect } from 'react'
import rooms from '../../data/data'
import { useParams } from "react-router";

export default function RoomSize() {


    const params = useParams();
    const roomSize = params.size
    const [state, setstate] = useState({ data: [] })

    useEffect(() => {
        const filterRooms = rooms.filter((room) => room.bedRooms === Number(roomSize))
        console.log(filterRooms)

        setstate({
            data: filterRooms
        })
    }, [roomSize])



    console.log(roomSize, "<<<<<", "size")

    return (
        <div>
            {state.data.length > 1 ? (state.data.map((hotel, index) => {
                return (<div key={index}>
                    <h3>{hotel.hotelName}</h3>
                </div>)
            })
            ) :
                (<p>NO ROOMS AVAILABLE</p>
                )}
        </div>
    )
}
