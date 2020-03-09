import React, { useState, useEffect } from 'react'
import rooms from '../../data/data'
import { useParams } from "react-router";
import { Link } from 'react-router-dom'

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

    const RenderStars = (stars) => {
        let star = []
        for (let i = 0; i < stars; i++) {
            star.push(<span className="text-primary">&#9733;</span>)
        }
        let totalS = star.map((ele, index) => (<span key={index}>{ele}</span>))
        return totalS
    }



    console.log(roomSize, "<<<<<", "size")

    return (
        <div className="mt-5">
            {state.data ? (state.data.map((hotel, index) => {
                return (<div className="container mt-2" key={index}>
                    <Link to={`/roomView/${hotel.id}`}>
                        <div className="col-md-8 text-dark">
                            <div className="d-sm-flex border" >
                                <img
                                    src={hotel.photos ? hotel.photos : "https://images.oyoroomscdn.com/uploads/hotel_image/89388/medium/261cd775d5772ed8.JPG"}
                                    className="rounded p-2"
                                    height="200"
                                    width="200"
                                    alt="room"
                                />

                                <div className="flex-grow-1 p-2 ml-3">
                                    <h4 className="font-weight-bold">{hotel.hotelName}</h4>
                                    <span>{RenderStars(hotel.star)}</span>
                                    <p>{hotel.city.toUpperCase()}</p>
                                </div>
                                <div className="p-2 text-right bg-light">
                                    <h2 className="font-weight-bold">‎₹‎{hotel.price}</h2>
                                    <small className="form-text text-muted font-weight-light">
                                        Per Night
              <br />
                                        Per Person
            </small>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>)
            })
            ) :
                (<p>NO ROOMS AVAILABLE</p>
                )}
        </div>
    )
}
