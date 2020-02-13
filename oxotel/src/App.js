import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
import DashboardFirst from "./dashboard/dekstop-1";
import { Footer } from "./components/Footer";
import RoutesLinks from "./components/RoutesLinks";
import { RoomView } from "./components/RoomView";


export default function App() {
    return (
        <>
            <NavbarComponent />
            <div className="App" />
            <RoutesLinks />
            <DashboardFirst />
            <Footer />
        </>
    );
}
