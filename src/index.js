import 'bootstrap';
import '@fortawesome/fontawesome-pro/js/all.js';
import './style.sass';
import React from 'react';
import ReactDOM from 'react-dom';
import Checker from './Checker';
const data = require("./ingredients.json");

class App extends React.Component{
    render(){
        return(

            <div>
                <nav className="navbar navbar-dark">
                    <a className="navbar-brand" href="#">Ingredient Checker</a>
                </nav>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 mx-auto">
                            <div className="jumbotron">
                                <h1 className="display-5">Gluten Search <i className="fas fa-cat-space fa-lg fa-flip-horizontal"></i></h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 mx-auto">
                            <Checker/>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

ReactDOM.render(<App/>, document.getElementById("index"));