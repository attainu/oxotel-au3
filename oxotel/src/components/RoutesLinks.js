import React from 'react'
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from '../App'
import OurRooms from './OurRooms'
import About from './About'
import Contact from './Contact'
import Test from './Test';
import { Profile } from './Profile';
import { RoomView } from './RoomView';
import SearchHotel from './hotels/SearchHotel';

export default function RoutesLinks() {
    return (
        <div>
            <Route path="/home" component={App} />
            <Route path="/ourRooms" component={OurRooms} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/viewRoom" component={App} />
            <Route path="/profile" component={Profile} />
            <Route path="/roomView" component={RoomView} />
            <Route path="/search" component={SearchHotel} />
        </div>
    )
}
