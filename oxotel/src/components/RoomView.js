import React from 'react';
import "./css/roomView.css";
import Carousel from 'react-bootstrap/Carousel';


export function HotelImageCarousel() {
    return (
        <div className="carousel-box">
            <Carousel>
                <Carousel.Item>
                    <div className="box">
                        <img
                            className=" carousel-img"
                            src="https://i.imgur.com/x3TzdPA.jpg"
                            alt="Third slide"
                        />
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className="box">
                        <img
                            className="carousel-img"
                            src="https://i.imgur.com/x3TzdPA.jpg"
                            alt="Third slide"
                        />
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className="box">
                        <img
                            className="carousel-img"
                            src="https://i.imgur.com/x3TzdPA.jpg"
                            alt="Third slide"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}


export function RoomView() {
    return (
        <div>
            <div className="hotel-nav">
                <div className="hotel-links container d-flex flex-nowrap">
                    <a href="Description" className="text-white mt-auto m-3 ml-5">
                        Description</a>
                    <a href="Description" className="text-white mt-auto m-3 ml-5">
                        Room Service</a>
                    <a href="Description" className="text-white mt-auto m-3 ml-5">
                        Similar Rooms</a>
                </div>
            </div>
            {/* //////////////////////////////////////////////////////////////////////////////////////// */}
            <section>
                <div className="container">
                    <div className="mb-5">
                        <h2>Hotel Name</h2>
                        <h5>Rating *****</h5>
                    </div>
                    <div className="d-flex roomview-wrapper">
                        <HotelImageCarousel />
                        <div className="bg-dark book-hotel text-white">
                            Book button and etc
                        </div>
                    </div>
                </div>
            </section>
            {/* //////////////////////////////////////////////////////////////////////////////////////// */}

            <div className="container">
                <div className="description">
                    <h5 className="mt-5">Description</h5>
                    <p>
                        SPOT ON 47942 Sargam Lodging And Boarding, located near Hotel
                  Jawahar in Mumbai is a tasteful property. It is close to tourist
                  attractions like Gol Maidan, Birla Temple, and Jhulelal Mandir.
                  Special Features The rooms here are warm-toned. The furniture here
                  is simple and sleek. The walls are partially covered by tiles.
                  Amenities The rooms are well-equipped with a TV and a mini-fridge
                  while the bathrooms here come with hair-dryers. All kinds of beds
                  are available here. There is a seating area also. Some rooms also
                  have an AC. Modern amenities offered by the property include CCTV
                  cameras and power backup facility. What's Nearby Eateries in the
                  close proximity of the property include The Bake Shop, Noodle In
                  Box, Rasoi, and Shiv Sagar Fine Dine Pure Veg.
                  </p>
                </div>
                <hr />
                <div className="room-serivces">
                    <h5 className="mt-5">Room Service</h5>
                    <ul>
                        <li className="mt-1">
                            Free wifi &#10004;
                        </li>
                        <li className="mt-1">
                            Family Room &#10004;
                        </li>
                        <li className="mt-1">
                            Restaurant &#10004;
                        </li>
                        <li className="mt-1">
                            24-Hour front desk &#10004;
                        </li>
                        <li className="mt-1">
                            Bar &#10006;
                        </li>
                    </ul>
                </div>
                <hr />
                <div className="pritn">
                    <h5 className="mt-5">The Print</h5>
                    <p>
                        Please note that guests checking in must be at least 18 years of
                  age. According to government regulations guests are required to
                  present a valid photo ID and credit card upon check in. The hotel
                  reserves the right of admission. Please note that early check-in
                  or late check-out is subject to availability and may be
                  chargeable. Please note that in case of couples, a valid marriage
                  proof is required to be produced at the time of check-in. The
              right to admission is reserved by the property.                  </p>
                </div>
            </div>
        </div>

    )
}
