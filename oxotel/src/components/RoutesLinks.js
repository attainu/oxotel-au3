import React from 'react'
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from '../App'
import OurRooms from './OurRooms'
import About from './About'
import Contact from './Contact'

export default function RoutesLinks() {
    return (
        <Router>
            <div>
                <Route path="/home" component={App} />
                <Route path="/ourRooms" component={OurRooms} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/viewRoom" component={App} />
            </div>
        </Router>
    )
}
