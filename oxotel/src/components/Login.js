import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { getuser, verifyLoginDetails } from "../api/api";
import { useDispatch } from "react-redux";


// import { Link } from "react-router-dom";

const Login = props => {
    const [state, setState] = useState({
        email: "",
        password: ""
    });

    useEffect(() => {
        getuser();
        console.log("mounted")
    }, [])

    const history = useHistory();

    const dispatch = useDispatch();


    const handleChange = e => {
        // console.log(e.target.value)
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const login = async () => {
        // console.log("hello")
        if (emailValidity() && state.password) {
            try {
                let data = {
                    email: state.email,
                    password: state.password
                }

                console.log(props)

                let res = await verifyLoginDetails(history, data, dispatch, props)
                console.log(res)
                props.handleClose()
                // history.push("/test");

            } catch (e) {
                console.log(e.message);
                alert("Email and password did not match");
            }
        } else {
            alert("Enter valid email address and password");
        }
    };

    const emailValidity = () => {
        return (
            state.email && state.email.includes("@") && state.email.includes(".")
        );
    };

    // const { email, password } = state;
    return (
        <div className="login-form">
            <form>
                <h2 className="text-center">Login</h2>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            {" "}
                            <i className="fa fa-envelope" />{" "}
                        </span>
                    </div>
                    <input
                        id="eml"
                        name="email"
                        className="form-control"
                        placeholder="Email address"
                        type="email"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            {" "}
                            <i className="fa fa-lock" />{" "}
                        </span>
                    </div>
                    <input
                        id="psw"
                        name="password"
                        className="form-control"
                        placeholder="Enter password"
                        type="password"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <button onClick={login} className="btn btn-primary login-btn btn-block">
                        Sign in
          </button>
                </div>
                <div className="or-seperator text-center">
                    <i>or</i>
                </div>
                <p className="text-center">Login with your social media account</p>
                <div className="text-center social-btn">
                    <Link to="#" className="btn btn-primary">
                        <i className="fa fa-facebook" />
                        &nbsp; Facebook
          </Link>
                    <Link to="#" className="btn btn-danger ml-3">
                        <i className="fa fa-google" />
                        &nbsp; Google
          </Link>
                </div>
            </form>
            <p className="text-center text-muted small pt-2">
                Don't have an account?{" "}
                <Link to="#" onClick={props.handleSave}>
                    Sign up here!
                </Link>
            </p>
        </div>
    );
};

export default Login;
