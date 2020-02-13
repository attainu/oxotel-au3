import React from 'react'
import "../components/css/dashbord-section.css"

function Dashboard() {
    return (
        <>
            <section className="dashboard-sections">
                <div className="section-1-container mt-5">
                    <h1 className="text-center">Our Rooms</h1>

                    <div className="wrapper d-flex justify-content-center flex-wrap">

                        <div className="section-1-content room-img-1">
                            <h1>HELLO</h1>
                        </div>
                        <div className="section-1-content room-img-2">
                            <h1>HELLO</h1>
                        </div>
                        <div className="section-1-content room-img-3">
                            <h1>HELLO</h1>
                        </div>
                        <div className="section-1-content room-img-4">
                            <h1>HELLO</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <section className="dashboard-sections">
                <div className="section-2-container">
                    <div className="section-2-main d-flex justify-content-center">
                        <div className="section-2-content text-center">
                            <h1>World's Fastest Growing Chain</h1>
                            <h3>
                                More Destination. More Ease.
                                    <br />
                                <h3>More Affordable</h3>
                            </h3>
                        </div>

                        <div className="section-2-content d-flex flex-wrap">
                            <div className="bg-dark m-1 flex-item-2 m-2">
                                hello
                            </div>
                            <div className="bg-dark flex-item-2 m-2">
                                hello
                            </div>
                        </div>
                    </div>

                    <div className="section-2-wrapper d-flex flex-wrap container justify-content-center mt-5">
                        <div className="section-2-wrapper-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                egestas magna at porttitor vehicula nullam augue ipsum dolor. READ
                                MORE
            </p>
                        </div>
                        <div className="section-2-wrapper-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                egestas magna at porttitor vehicula nullam augue ipsum dolor. READ
                                MORE
            </p>
                        </div>
                        <div className="section-2-wrapper-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                egestas magna at porttitor vehicula nullam augue ipsum dolor. READ
                                MORE
            </p>
                        </div>
                        <div className="section-2-wrapper-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                egestas magna at porttitor vehicula nullam augue ipsum dolor. READ
                                MORE
            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <section className="dashboard-sections">
                <div className="container mt-5">
                    <div className="card-deck">
                        <div className="card">
                            <img className="card-img-top" src="https://i.imgur.com/x3TzdPA.jpg" />
                            <div className="card-body">
                                <h5 className="card-title">Restaurants</h5>
                                <p className="card-text">
                                    Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.
              </p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="https://i.imgur.com/x3TzdPA.jpg" />
                            <div className="card-body">
                                <h5 className="card-title">Lounge Bar</h5>
                                <p className="card-text">
                                    Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.
              </p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="https://i.imgur.com/x3TzdPA.jpg" />
                            <div className="card-body">
                                <h5 className="card-title">Wellness</h5>
                                <p className="card-text">
                                    Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.
              </p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <section className="dashboard-sections">
                <div className="section-4 mt-5">
                    <div className="section-4-wrapper d-flex justify-content-between">
                        <div className="section-4-content section-4-img">
                            <div>
                                <h1>Hello</h1>
                            </div>
                        </div>
                        <div />

                        <div className="section-4-content container bg-dark text-white">
                            <h1 className="m-3">Discover our Locations</h1>
                            <div className="d-flex section-4-wrapper">
                                <p className="para">
                                    Phasellus enim libero, blandit vel sapien vitae, condimentum
                                    ultricies magna et. Quisque euismod orci ut et lobortis. Blandit
                                    vel sapien vitae, condimentum ultricies magna et orci ut et
                                    lobortis, Phasellus enim
              </p>
                                <p className="para">
                                    Phasellus enim libero, blandit vel sapien vitae, condimentum
                                    ultricies magna et. Quisque euismod orci ut et lobortis. Blandit
                                    vel sapien vitae, condimentum ultricies magna et orci ut et
                                    lobortis, Phasellus enim
              </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Dashboard;
