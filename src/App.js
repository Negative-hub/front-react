import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {Alert} from "./components/Alert";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Weather} from "./pages/Weather";
import {MongoDbState} from "./context/MongoDB/MongoDbState";
import {AlertState} from "./context/Alert/AlertState";
import {WeatherState} from "./context/Weather/WeatherState";

function App() {
    return (
        <AlertState>
            <MongoDbState>
                <BrowserRouter>
                    <Navbar/>
                    <Alert/>
                    <div className="App">

                        <Switch>
                            <WeatherState>
                                <Route path='/' exact component={Home}/>
                                <Route path='/about' component={About}/>
                                <Route path='/weather' component={Weather}/>
                            </WeatherState>
                        </Switch>

                    </div>
                </BrowserRouter>
            </MongoDbState>
        </AlertState>
    )
}

export default App;
