import React from "react";
import "../components/css/dekstop-1.css"
import Dashboard from "./dashboard-section"

export default function DashboardFirst() {
    return (
        <>
            <div className="dash-img">
                {/* <Image alt="" id="dekstop1-img" src="https://i.imgur.com/x3TzdPA.jpg" /> */}
                <div className=" bg-overlay">
                    <div className="container d-flex justify-content-center text-center">
                        <h1 className="dash-h1">ENJOY A LUXURY EXPERINCE</h1>
                    </div>
                </div>
            </div>
            <section>
                <Dashboard />
            </section>
        </>
    );
}
