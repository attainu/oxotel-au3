import React, { useState, useEffect } from "react";
import AllRooms from "../../data/data";
import FilterHotel from './FilterHotel'
import { Link } from "react-router-dom"

export default function SearchHotel() {

    const [state, setstate] = useState({
        rooms: [],
        findHotel: [],
        searchQuery: ""
    });

    useEffect(() => {
        const hotels = AllRooms.map(hotel => hotel);
        setstate({
            rooms: hotels,
            // filterRoom: filterRating,
            // findHotel: searchCity
        });
    }, []);

    const searchCity = state.rooms.filter(
        room => state.searchQuery ? (room.city.indexOf(state.searchQuery.toLowerCase()) !== -1 ||
            room.hotelName.toLowerCase().indexOf(state.searchQuery.toLowerCase()) !== -1) : ([])

    );

    const handelSearch = e => {
        const { name, value } = e.target;
        console.log(e.target.name, ":", value)
        setstate({
            ...state,
            [name]: value,
            findHotel: searchCity
        });
    };
    const onCancel = () => {
        setstate({
            ...state,
            searchQuery: '',
            findHotel: []
        })
    }

    const RenderStars = (stars) => {
        let star = []
        for (let i = 0; i < stars; i++) {
            star.push(<span>&#9733;</span>)
        }
        let totalS = star.map((ele, index) => (<span key={index}>{ele}</span>))
        return totalS
    }


    // const handelCheck = e => {
    //     const { name, value } = e.target;
    //     console.log(name, ":", value)
    //     if (state.isChecked) {
    //         setstate({
    //             ...state,
    //             isChecked: false
    //         });
    //     }
    //     setstate({
    //         ...state,
    //         isChecked: true
    //     });

    // };


    // console.log(state.rooms)
    console.log("city search", state.filterRoom);
    console.log("city and hotel", state.findHotel);

    return (
        <div className="container">
            <div className="bg-light">
                <h3 >Find deals on hotels, homes and much more... </h3>
                <p >From cosy country homes to funky city flats </p>
            </div>

            <div className="input-group mb-3 col-md-5">
                <input type="text" className="form-control" onChange={handelSearch} name="searchQuery" placeholder="Search Hotel name or City" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <span className="input-group-text btn btn-outline-secondary" onClick={onCancel} id="basic-addon2">&#10006;</span>
                </div>
            </div>


            {/* <input type="text" onChange={handelSearch} name="searchQuery" /><button onClick={onCancel}>&#10006;</button> */}
            {/* <h5>Search Hotels, or Destination</h5> */}

            {state.findHotel ? (state.findHotel.map((hotel, index) => {
                return (<div className="container mt-2" key={index}>
                    <Link to={`roomView/${hotel.id}`}>
                        <div className="col-md-8 text-dark">
                            <div className="d-sm-flex border" >
                                <img
                                    src="https://images.oyoroomscdn.com/uploads/hotel_image/89388/medium/261cd775d5772ed8.JPG"
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
            })) : (<h6>Search Hotels, or Destination</h6>)
            }
            {/* <FilterHotel hotels={state.rooms} /> */}
        </div>
    );
}
