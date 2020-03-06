import React, { useState, useEffect } from "react";
import { updateProfile } from "../api/api"

export default function Profile() {

    const [state, updateState] = useState({
        edit: false,
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const onEdit = () => {
        if (!state.edit) {
            updateState({
                ...state,
                edit: true
            });
        } else {
            updateState({
                ...state,
                edit: false
            });
        }
    };

    const changeHandler = e => {
        const { name } = e.target;
        updateState({
            ...state,
            [name]: e.target.value
        });
    };

    useEffect(() => {
        if (localStorage.getItem("signupData")) {
            let firstname = JSON.parse(localStorage.getItem("signupData")).firstname;
            let lastname = JSON.parse(localStorage.getItem("signupData")).lastname;
            let password = JSON.parse(localStorage.getItem("signupData")).password;
            let email = JSON.parse(localStorage.getItem("signupData")).email;

            updateState({
                firstname: firstname,
                lastname: lastname,
                password: password,
                email: email
            })
        } else {
            alert("User could not be created");
        }
    }, [])


    const handleSubmit = () => {
        if (validityCheck()) {

            const profileData = {
                password: state.password,
                firstname: state.firstname,
                lastname: state.lastname
            };

            try {
                console.log("Profile Data", JSON.stringify(profileData))

                let userId = JSON.parse(localStorage.getItem("signupData")).id;

                updateProfile(profileData, userId)
                // window.location.reload();
            } catch (e) {
                console.log(e.message);
            }
        } else {
            alert("Enter valid Details");
        }
    };

    const validityCheck = () => {
        return (
            state.firstname.length > 2 &&
            state.lastname.length > 2 &&
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
        <>
            <div className="container shadow-sm p-3 mb-5  bg-white mt-5 fullH rounded border">
                <h2>Profile</h2>
                <h5 className="mb-5">Basic info, for a faster booking experience</h5>
                <div className="mb-4">
                    <h3 className="font-weight-bold">
                        Edit Profile{" "}
                        <span onClick={onEdit}>
                            <button className="btn btn-outline-dark">&#9998;</button>
                        </span>
                    </h3>
                </div>
                <div className="">
                    {!state.edit ? (
                        <div>
                            <div>
                                <h5 className="d-inline">First Name</h5>
                                <h5 className="d-inline pl-5 ml-5">{state.firstname}</h5>
                                <hr />
                            </div>
                            <div>
                                <h5 className="d-inline">Last Name </h5>
                                <h5 className="d-inline pl-5 ml-5">{state.lastname}</h5>
                                <hr />
                            </div>
                            <div>
                                <h5 className="d-inline">Email id</h5>
                                <h5 className="d-inline pl-5 ml-5">{state.email}</h5>
                                <hr />
                            </div>
                            <div>
                                <h5 className="d-inline">Password</h5>
                                <h5 className="d-inline pl-5 ml-5">******</h5>
                                <hr />
                            </div>
                        </div>
                    ) : (
                            <div>
                                <div>
                                    <h5 className="d-inline">First Name</h5>
                                    <input
                                        name="firstname"
                                        className="d-inline pl-5 ml-5"
                                        value={state.firstname}
                                        onChange={changeHandler}
                                        required
                                    />
                                    <hr />
                                </div>
                                <div>
                                    <h5 className="d-inline">Last Name</h5>
                                    <input
                                        name="lastname"
                                        className="d-inline pl-5 ml-5"
                                        value={state.lastname}
                                        onChange={changeHandler}
                                        required
                                    />
                                    <hr />
                                </div>
                                <div>
                                    <h5 className="d-inline">Email id</h5>
                                    <h5 className="d-inline pl-5 ml-5">{state.email}</h5>
                                    <hr />
                                </div>
                                <div>
                                    <h5 className="d-inline">Password</h5>
                                    <input
                                        name="password"
                                        className="d-inline pl-5 ml-5"
                                        type="password"
                                        value={state.password}
                                        onChange={changeHandler}
                                        required
                                    />
                                    <hr />
                                </div>
                                <div>
                                    <h5 className="d-inline">Password</h5>
                                    <input
                                        name="confirmPassword"
                                        className="d-inline pl-5 ml-5"
                                        placeholder="Confirm Password"
                                        type="password"
                                        onChange={changeHandler}
                                        required
                                    />
                                    <small id="passwordHelpBlock" className="form-text text-muted">
                                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</small>
                                    <hr />
                                </div>
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="btn p-2 btn-primary"
                                >
                                    Update
                        </button>
                            </div>
                        )}
                </div>
            </div>
        </>
    );
}
