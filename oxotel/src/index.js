import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store/store";
import App from "./App";
import { Provider } from "react-redux";
import {
    BrowserRouter as Router,
    Route, Redirect
} from "react-router-dom";
// import Login from "./components/Login";
// import NotFound from "./components/NotFound";
// import Signup from "./components/Signup";
import Test from "./components/Test";


const Home = () => {

    const doRedirect = () => {
        let loggedIn = localStorage.getItem("signupData");

        if (loggedIn) {
            return <Redirect to="/test" />;
        }
        else {
            return <Redirect to="/" />;
        }
    }


    return (
        <Router>
            <div>
                <Route path="/" component={App} />
                <Route path="/test" component={Test} />
                {/* <RoutesLinks /> */}
                {/* <Route path="/login" component={Login} /> */}
                {/* <Route path="/signup" component={Signup} /> */}
                {/* <Route path="/signup" component={SignUpComponent} /> */}
                {doRedirect()}
                {/* <Route component={NotFound} /> */}
            </div>
        </Router>

    )
}


ReactDOM.render(<Provider store={store}> <Home /> </Provider>, document.getElementById('root'));