import { Fragment } from "react";
import React from "react";
import "./css/footer.css";
import { Link } from "react-router-dom";



export function Footer() {
    return (
        <Fragment>
            <footer className="footer">
                <div className="mt-5 d-flex footer-main justify-content-around bg-light">
                    <div className="footer-content">
                        <h3>
                            Oxotel
                        </h3>

                        <p className="footer-links">
                            <span> <Link to="#" className='footer-link'>Home</Link>
                                <Link to="#" className='footer-link'>Our Rooms</Link>
                                <Link to="#" className='footer-link'>About</Link>
                                <Link to="#" className='footer-link'>Contact</Link>
                            </span>
                        </p>

                        <p>Copyright &copy; 2020 oxotel.com</p>
                    </div>

                    <div className="footer-content">
                        <div>
                            {/* <i className="fa fa-map-marker" /> */}
                            <p>
                                <span>Oxotel Pvt. Ltd., Mumbai </span>, India
                    </p>
                        </div>

                        <div>
                            {/* <i className="fa fa-phone" /> */}
                            <p>+1 555 123456</p>
                        </div>
                        <div>
                            {/* <i className="fa fa-phone" /> */}
                            <p>Reception 24 H</p>
                        </div>

                        <div>
                            {/* <i className="fa fa-envelope" /> */}
                            <p>
                                <Link to="#">
                                    support@oxotel.com
                            </Link>
                            </p>
                        </div>
                    </div>

                    <div className="footer-content footer-right">

                        <h6 className="font-weight-bold">About the company</h6>
                        <p>Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
                        euismod convallis velit, eu auctor lacus vehicula sit amet.
                        </p>

                        <div className="footer-icons">
                            <Link to="#">
                                {/* <i className="fa fa-facebook" /> */}
                            </Link>
                            <Link to="#">
                                {/* <i className="fa fa-twitter" /> */}
                            </Link>
                            <Link to="#">
                                {/* <i className="fa fa-linkedin" /> */}
                            </Link>
                            <Link to="#">
                                {/* <i className="fa fa-github" /> */}
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}
