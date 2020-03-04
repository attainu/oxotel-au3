import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addNewuser } from "../api/api";

const Signup = props => {

    const [state, updateState] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstname: "",
        lastname: ""
    });


    const changeHandler = e => {
        const { name } = e.target;
        // console.log(e.target.value)
        updateState({
            ...state,
            [name]: e.target.value
        });
    };

    const handleSubmit = () => {
        if (validityCheck()) {

            const signupData = {
                email: state.email,
                password: state.password,
                firstname: state.firstname,
                lastname: state.lastname
            };

            console.log("dbdata", JSON.stringify(signupData))

            try {
                console.log("dbdata", JSON.stringify(signupData))
                addNewuser(signupData);

                alert('Details Submitted Successfully')
                // window.location.reload();
                props.handleSave();
            } catch (e) {
                console.log(e.message);
                alert("User could not be created");
            }
        } else {
            alert("Enter valid Details");
        }
    };

    const validityCheck = () => {
        return (
            state.firstname.length > 2 &&
            state.lastname.length > 2 &&
            state.email &&
            state.email.includes("@") &&
            state.email.includes(".") &&
            state.password &&
            state.confirmPassword &&
            state.password === state.confirmPassword &&
            checkPassword(state.password)
        );
    };

    const checkPassword = str => {
        var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return re.test(str);
    };

    return (
        <div className="signup-form">
            {/* <form > */}
            <div className="card bg-light">
                <article className="card-body ">
                    <h4 className="card-title mt-3 text-center">Create Account</h4>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                {" "}
                                <i className="fa fa-envelope" />{" "}
                            </span>
                        </div>
                        <input
                            name="email"
                            className="form-control"
                            placeholder="Email Address"
                            type="email"
                            required
                            value={state.email}
                            onChange={changeHandler}
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
                            className="form-control"
                            type="text"
                            name="firstname"
                            placeholder="First Name"
                            required
                            value={state.firstname}
                            onChange={changeHandler}
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
                            className="form-control"
                            type="text"
                            name="lastname"
                            placeholder="Last Name"
                            required
                            value={state.lastname}
                            onChange={changeHandler}
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
                            name="password"
                            className="form-control"
                            placeholder="Create Password"
                            type="password"
                            required
                            value={state.password}
                            onChange={changeHandler}
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
                            name="confirmPassword"
                            className="form-control"
                            placeholder="Confirm Password"
                            type="password"
                            required
                            value={state.confirmPassword}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="text-left font-italic mb-2">
                        <small id="passwordHelpBlock" class="form-text text-muted">
                            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</small>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block" onClick={handleSubmit}>
                            {" "}
                            Create Account{" "}
                        </button>
                    </div>
                    <p className="text-center text-muted small">
                        Already have an account?{" "}
                        <Link to="#" onClick={props.handleSave}>
                            Sign in here!
              </Link>
                    </p>
                </article>
            </div>
            {/* </form> */}
        </div>
    );
};

export default Signup;
