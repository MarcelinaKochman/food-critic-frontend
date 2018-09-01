import React from 'react';
import './PhotoDiv.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import breakfast from '../img/restaurant-691397_1920.jpg';
import {colors} from "../properties";

class PhotoDiv extends React.Component {

    render() {
        return (
            <div className="PhotoDiv">
                <div className="photoDiv">
                    <img src={breakfast} className="fillPhotoDiv" alt="homePhoto"/>
                    <div className="centered">
                        <h1>Mozna nie jesc w ogole, ale nie mozna jesc zle.</h1>
                        <h3>Recenzje restauracji i dan</h3>
                        <h1><a href="#bestRestaurantHeader" style={{"color": colors.yellow}}><i className="fa fa-angle-down" ></i></a></h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default PhotoDiv;
