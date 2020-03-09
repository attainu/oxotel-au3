import React, { useState } from 'react';
import Hotels from "../data/data"
import { Link } from "react-router-dom";

export default function OurRooms() {

    const [state, setstate] = useState({
        data: [],
        roomTypes: []
    })

    const filterRooms = Hotels.filter(room => parseInt(room.price) < 1000)
    console.log(filterRooms)

    ///////unique value///////
    const roomType = [];
    const map = new Map();
    for (const hotel of Hotels) {
        if (!map.has(hotel.propertyType)) {
            map.set(hotel.propertyType, true);
            roomType.push({
                roomType: hotel.propertyType
            });
        }
    }

    const setter = (type) => {
        const filterRooms = Hotels.filter((hotel) => hotel.propertyType === type)
        setstate({
            roomTypes: type,
            data: filterRooms
        })
        console.log("filter >>>>", filterRooms, "roomType>>>>>", type)
    }

    const handleChange = (e) => {
        console.log(e.target.innerText.toLowerCase())
        let rmType = e.target.innerText.toLowerCase()
        setter(rmType)
    }

    const RenderStars = (stars) => {
        let star = []
        for (let i = 0; i < stars; i++) {
            star.push(<span>&#9733;</span>)
        }
        let totalS = star.map((ele, index) => (<span key={index}>{ele}</span>))
        return totalS
    }

    return (
        <div className="container mt-5 fullH">
            <h2 className="">Rooms</h2>
            <div className="d-md-flex">
                {
                    roomType.map((hotel, index) => {
                        return (<div key={index} className="m-3">
                            <div className="card" style={{ "width": "18rem" }}>
                                <img className="card-img-top" alt="" src="https://i.ibb.co/7RmgDK7/oxo.png" height="200" />
                                <h3 className="btn btn-outline-info" value={hotel.roomType} onClick={handleChange}>{hotel.roomType.toUpperCase()}</h3>
                            </div>
                        </div>)
                    })
                }
            </div>

            <section>
                <div className="container">
                    {state.data.map((hotel, index) => {
                        return (<div className="container mt-2" key={index}>
                            <Link to={`roomView/${hotel.id}`}>
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
                    }
                </div>
            </section>
        </div>
    )
}
