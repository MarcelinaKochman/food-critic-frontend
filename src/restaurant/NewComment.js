import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import {colors} from "../properties";
import Rating from "react-rating";
import {endpoints} from "../properties";

class NewComment extends React.Component {

    constructor() {
        super();
        this.loggedIn = sessionStorage.getItem('login') !== null;
        this.loggedUser = sessionStorage.getItem('login');
    }

    render() {
        if (!this.loggedIn) {
            return (
                <h6>Aby dodac opinie musisz byc zalogowany! <a href={endpoints.login}>Zaloguj sie</a></h6>
            )
        }

        return (
            <div id={"newComent"}>
                <h5>Dodaj opinie:</h5>
                <div className="notes"
                     style={{
                         "padding": "10px",
                         "margin": "20px",
                         "fontSize": "80%"
                     }}>

                    {/*userInfo*/}

                    <div>
                        <h4 className={"headerFont"}
                            style={{"borderBottom": "1px solid #dddddd"}}>
                            <i className="fa fa-user"></i> {this.loggedUser}</h4>
                    </div>
                    <div>
                        <Rating
                            emptySymbol="fa fa-star-o fa-2x"
                            fullSymbol="fa fa-star fa-2x"
                            style={{"color": colors.yellow}}
                        />
                    </div>

                    {/*review*/}

                    <a style={{
                        "fontSize": "120%"
                    }}><textarea rows="3" className={"textInput"} placeholder={"Jak smakowalo Ci danie?"}/></a>
                </div>
            </div>
        );
    }
}

export default NewComment;
