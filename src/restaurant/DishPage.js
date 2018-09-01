import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import {colors, endpointsBackend, images} from "../properties";
import UrlBuilder from "../common/UrlBuilder";
import {Fetch} from "react-data-fetching";
import ReactImageFallback from "react-image-fallback";
import Rating from "react-rating";
import NewComment from "./NewComment";


class RegisterPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.history.location.state.key
        };
        this.loggedIn = sessionStorage.getItem('login') !== null;
        this.loggedUser = sessionStorage.getItem('login');
    }

    render() {
        return (
            <div>
                <div style={{"cursor": "pointer"}} onClick={() => window.history.back()}>
                    <i className="fa fa-angle-left" style={{"margin": "20px"}}></i>Powrot do strony restauracji
                </div>
                <div className="container">
                    <div className="jumbotron" style={{"background": "none"}}>
                        <Fetch url={UrlBuilder.buildUrl(endpointsBackend.dish) + this.state.id}>
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
                                                            <a className={"headerFont doubleFontSize"}> {data.rate}
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
                                                                            <i className="fa fa-user"></i> {data.login}</h4>
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

                                            <NewComment/>

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
}

export default RegisterPage;
