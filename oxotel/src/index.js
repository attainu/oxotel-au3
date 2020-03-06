import React from "react";
import ReactDOM from "react-dom";
import store from "./store/store";
import App from "./App";
import { Provider } from "react-redux";
import {
    BrowserRouter as Router, Switch, Route
} from "react-router-dom";



const Home = () => {


    // const doRedirect = () => {
    //     let loggedIn = localStorage.getItem("signupData");

    //     if (loggedIn) {
    //         return <Redirect to="/" />;
    //     }
    //     else {
    //         return <Redirect to="/test" />;
    //     }
    // }


    return (
        <Router>
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </Router>
    )
}


ReactDOM.render(<Provider store={store}> <Home /> </Provider>, document.getElementById('root'));