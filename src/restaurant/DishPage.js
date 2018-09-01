import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import {colors, endpoints, endpointsBackend, images} from "../properties";
import UrlBuilder from "../common/UrlBuilder";
import {Fetch} from "react-data-fetching";
import ReactImageFallback from "react-image-fallback";
import Rating from "react-rating";


class RegisterPage extends React.Component {

    constructor(props) {
        super(props);

        this.loggedIn = sessionStorage.getItem('login') !== null;
        this.loggedUser = sessionStorage.getItem('login');
        this.loggedUserId = sessionStorage.getItem('id');

        this.state = {
            userRefId: this.loggedUserId,
            dishRefId: props.history.location.state.key,
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

        fetch(UrlBuilder.buildUrl(endpointsBackend.addOpinion), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state),
        })
            .then((result) => (result.status === 400) ? result.json() : result)
            .then(function (response) {
                window.location.reload();
            });
    }


    render() {
        if (!this.loggedIn) {
            return (
                <h6>Aby zobaczyc opinie i napisac wlasna recenzje musisz byc zalogowany! <a href={endpoints.login}>Zaloguj
                    sie</a></h6>
            )
        }

        return (
            <div>
                <div style={{"cursor": "pointer"}} onClick={() => window.history.back()}>
                    <i className="fa fa-angle-left" style={{"margin": "20px"}}></i>Powrot do strony restauracji
                </div>
                <div className="container">
                    <div className="jumbotron" style={{"background": "none"}}>
                        <Fetch url={UrlBuilder.buildUrl(endpointsBackend.dish) + this.state.dishRefId}>
                            {({data}) => (
                                <div>
                                    <div className="row">
                                        <div className="col-md-4 col-xs-12 col-sm-6 col-lg-4">
                                            <div className="fill notes" style={{"width": "300px", "height": "300px"}}>
                                                <ReactImageFallback
                                                    id={data.id}
                                                    src={data.photoUrl}
                                                    fallbackImage={images.defaultRestaurantPhoto}
                                                    className="img"
                                                />
                                                <div className={"centered-bottom-right"}>
                                                    <h5 className={"headerFont"}
                                                        style={{
                                                            "color": "black",
                                                            "background": colors.yellow,
                                                            "padding": "5px",
                                                            "textAlign": "center"
                                                        }}>
                                                        {this.priceFormat(data.price)}
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-xs-12 col-sm-6 col-lg-8">
                                            <div className="container" style={{"borderBottom": "1px solid black"}}>
                                                <Fetch
                                                    url={UrlBuilder.buildUrl(endpointsBackend.dishRate) + data.id}>
                                                    {({data}) => (
                                                        <div key={data.id + "divStars"}>
                                                            <a className={"headerFont doubleFontSize"}> {this.rateFormat(data.rate)}
                                                                <small style={{
                                                                    "color": "grey",
                                                                    "fontSize": "50%",
                                                                    "marginRight": "20px"
                                                                }}>/ 5
                                                                </small>
                                                            </a>
                                                            <Rating
                                                                emptySymbol="fa fa-star-o fa-2x"
                                                                fullSymbol="fa fa-star fa-2x"
                                                                fractions={2}
                                                                style={{"color": colors.yellow}}
                                                                initialRating={data.rate}
                                                                readonly
                                                            />
                                                        </div>
                                                    )}
                                                </Fetch>

                                                <h2 className={"headerFont"}>{data.name}</h2>
                                            </div>
                                            <hr/>

                                            {/*opinions*/}
                                            {/*opinions*/}
                                            {/*opinions*/}

                                            <Fetch
                                                url={UrlBuilder.buildUrl(endpointsBackend.opinionsForDish) + data.id}>
                                                {({data}) => (
                                                    data.map(opinion =>
                                                        <div className="notes"
                                                             style={{
                                                                 "padding": "10px",
                                                                 "margin": "20px",
                                                                 "fontSize": "80%"
                                                             }}>

                                                            {/*userInfo*/}
                                                            {/*userInfo*/}
                                                            {/*userInfo*/}

                                                            <Fetch
                                                                url={UrlBuilder.buildUrl(endpointsBackend.user) + opinion.userRefId}>
                                                                {({data}) => (
                                                                    <div>
                                                                        <h4 className={"headerFont"}
                                                                            style={{"borderBottom": "1px solid #dddddd"}}>
                                                                            <i className="fa fa-user"></i> {data.login}
                                                                        </h4>
                                                                    </div>
                                                                )}
                                                            </Fetch>
                                                            <div key={opinion.id + "divStars"}>
                                                                <a className={"headerFont doubleFontSize"}> {opinion.rate}
                                                                    <small style={{
                                                                        "color": "grey",
                                                                        "fontSize": "50%",
                                                                        "marginRight": "20px"
                                                                    }}>/ 5
                                                                    </small>
                                                                </a>
                                                                <Rating
                                                                    emptySymbol="fa fa-star-o fa-2x"
                                                                    fullSymbol="fa fa-star fa-2x"
                                                                    fractions={2}
                                                                    style={{"color": colors.yellow}}
                                                                    initialRating={opinion.rate}
                                                                    readonly
                                                                />
                                                            </div>

                                                            {/*review*/}
                                                            {/*review*/}
                                                            {/*review*/}

                                                            <a style={{
                                                                "fontSize": "120%"
                                                            }}>{opinion.review}</a>
                                                        </div>
                                                    )
                                                )}
                                            </Fetch>

{/*newcomment*/}

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

                                                    <button className={"btn btn-warning"}
                                                            onClick={this.handleSubmit}>Zostaw recenzje
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Fetch>

                    </div>

                </div>
            </div>
        )
            ;
    }

    priceFormat(number) {
        return parseFloat(Math.round(number * 100) / 100).toFixed(2) + " zl";
    }

    rateFormat(number) {
        return parseFloat(Math.round(number * 100) / 100).toFixed(1);
    }
}

export default RegisterPage;
