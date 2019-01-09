import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NavTabs from "./components/NavTabs";

const App = () => {
return (
    <Router>
        <div>
            <NavTabs />
            <Route exact path="/" component={Search} />
            <Route exact path="/books" component={Saved} />
            <Route exact path="/saved" component={Saved} />
        </div>
    </Router>
);
}

export default App;
