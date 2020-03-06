import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
import { Footer } from "./components/Footer";
import LoggedIn from "./components/LoggedIn";
import NotLoggIn from "./components/NotLoggIn";


export default function App() {
    let LOGGEDIN = localStorage.getItem("signupData")
    return (
        <>
            <NavbarComponent />
            <div className="App">
            </div>
            {LOGGEDIN ? (<LoggedIn />) : <NotLoggIn />}


            <Footer />
        </>
    );
}
