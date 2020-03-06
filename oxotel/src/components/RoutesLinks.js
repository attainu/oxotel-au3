import React from 'react'
import { Route } from "react-router-dom";
import OurRooms from './OurRooms'
import About from './About'
import Contact from './Contact'
// import Test from './Test';
import Profile from './Profile';
import { RoomView } from './RoomView';
import SearchHotel from './hotels/SearchHotel';
import Logout from './Logout';
import DashboardFirst from '../dashboard/dekstop-1';
import SingleRoom from './hotels/RoomFilter';
import LocationFilter from './hotels/LocationFilter';


export default function RoutesLinks() {
    return (
        <div>
            <Route path="/home" component={DashboardFirst} />
            <Route path="/ourRooms" component={OurRooms} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/profile" component={Profile} />
            <Route path="/roomView/:id" component={RoomView} />
            <Route path="/search" component={SearchHotel} />
            <Route path="/roomfilter/:size" component={SingleRoom} />
            <Route path="/locations" component={LocationFilter} />
            <Route path="/logout" component={Logout} />
        </div>
    )
}
