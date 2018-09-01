import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import {colors, endpointsBackend} from "../properties";
import Rating from "react-rating";
import {endpoints} from "../properties";
import ReactDOM from "react-dom";
import UrlBuilder from "../common/UrlBuilder";

class NewComment extends React.Component {

    constructor(props) {
        super(props);
        this.loggedIn = sessionStorage.getItem('login') !== null;
        this.loggedUser = sessionStorage.getItem('login');
        this.loggedUserId = sessionStorage.getItem('id');

        this.state = {
            userRefId: this.loggedUserId,
            dishRefId: this.getAttribute('id'),
            rate: '',
            review: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleRatingChange = this.handleRatingChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: inputValue
        });
    }

    handleRatingChange(event) {
        console.log(event);
        this.setState({
            rate: event
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log(this.state);
        // fetch(UrlBuilder.buildUrl(endpointsBackend.register), {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(this.state),
        // })
        //     .then((result) => (result.status === 400) ? result.json() : result)
        //     .then(function (response) {
        //         if (response.status === 400) {
        //             document.getElementById("passwordError").innerText = response.errors[0].defaultMessage;
        //         } else if (response.status === 409) {
        //             document.getElementById("loginError").innerText = messages.userExist;
        //         } else if (response.status === 200) {
        //             ReactDOM.render(<RegisterSucceed/>, document.getElementById('App'));
        //         }
        //     });
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
                            style={{"borderBottom": "1px solid #dddddd"}} id="login">
                            <i className="fa fa-user"></i> {this.loggedUser}</h4>
                    </div>
                    <div>
                        <Rating
                            emptySymbol="fa fa-star-o fa-2x"
                            fullSymbol="fa fa-star fa-2x"
                            style={{"color": colors.yellow}}
                            name="rate"
                            initialRating={this.state.rate}
                            onChange={this.handleRatingChange}
                        />
                    </div>

                    {/*review*/}

                    <a style={{
                        "fontSize": "120%"
                    }}><textarea name="review"
                                 rows="3"
                                 onChange={this.handleInputChange}
                                 className={"textInput"}
                                 placeholder={"Jak smakowalo Ci danie?"}/></a>

                    <button className={"btn btn-warning"} onClick={this.handleSubmit}>Zostaw recenzje</button>

                </div>
            </div>
        );
    }
}

export default NewComment;
