import { Fragment } from "react";
import React from "react";
import "./css/footer.css"

export function Footer() {
    return (
        <Fragment>
            <footer >
                <div className="mt-5 d-flex footer-main justify-content-around bg-light">
                    <div class="footer-content">
                        <h3>
                            Oxotel
                        </h3>

                        <p class="footer-links">
                            <a href="#" className='footer-link'>Home</a>
                            <a href="#" className='footer-link'>Our Rooms</a>
                            <a href="#" className='footer-link'>About</a>
                            <a href="#" className='footer-link'>Contact</a>
                        </p>

                        <p>Copyright &copy; 2020 oxotel.com</p>
                    </div>

                    <div class="footer-content">
                        <div>
                            {/* <i class="fa fa-map-marker" /> */}
                            <p>
                                <span>Oxotel Pvt. Ltd., Mumbai </span>, India
                    </p>
                        </div>

                        <div>
                            {/* <i class="fa fa-phone" /> */}
                            <p>+1 555 123456</p>
                        </div>
                        <div>
                            {/* <i class="fa fa-phone" /> */}
                            <p>Reception 24 H</p>
                        </div>

                        <div>
                            {/* <i class="fa fa-envelope" /> */}
                            <p>
                                <a href="#">
                                    support@oxotel.com
                            </a>
                            </p>
                        </div>
                    </div>

                    <div class="footer-content footer-right">
                        <p>
                            <h6 className="font-weight-bold">About the company</h6>
                            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
                            euismod convallis velit, eu auctor lacus vehicula sit amet.
                        </p>

                        <div class="footer-icons">
                            <a href="#">
                                {/* <i class="fa fa-facebook" /> */}
                            </a>
                            <a href="#">
                                {/* <i class="fa fa-twitter" /> */}
                            </a>
                            <a href="#">
                                {/* <i class="fa fa-linkedin" /> */}
                            </a>
                            <a href="#">
                                {/* <i class="fa fa-github" /> */}
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}
