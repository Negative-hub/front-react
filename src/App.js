import React from "react";
import {Navbar} from "./components/Navbar";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {MongoDbState} from "./context/MongoDB/MongoDbState";
import {AlertState} from "./context/Alert/AlertState";
import {Alert} from "./components/Alert";

function App() {
    return (
        <AlertState>
            <MongoDbState>
                <BrowserRouter>
                    <Navbar/>
                    <Alert/>
                    <div className="container">

                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/about' component={About}/>
                        </Switch>

                    </div>
                </BrowserRouter>
            </MongoDbState>
        </AlertState>
    )
}

export default App;
