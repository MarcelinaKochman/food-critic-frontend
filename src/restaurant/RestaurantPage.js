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
        this.state = {
            id: props.history.location.state.key
        };

        this.handleCheck = this.handleCheck.bind(this);
    }

    render() {
        return (
            <div>
                <div style={{"cursor": "pointer"}}
                     onClick={() => window.location = (endpoints.home + "#bestRestaurantHeader")}>
                    <i className="fa fa-angle-left" style={{"margin": "20px"}}></i>Powrot do wszystkich restauracji
                </div>

                <div className="container">
                    <div className="jumbotron" style={{"background": "none"}}>

                        <Fetch url={UrlBuilder.buildUrl(endpointsBackend.restaurant) + this.state.id}>
                            {({data}) => (
                                <div>
                                    <div className="row" key={data.id + "divNotes"}>
                                        <div className="col-md-4 col-xs-12 col-sm-6 col-lg-4" key={data.id + "div4"}>
                                            <div className="fill notes" style={{"width": "300px", "height": "300px"}}
                                                 key={data.id + "divNotes1"}>
                                                <ReactImageFallback
                                                    src={data.photoUrl}
                                                    fallbackImage={images.defaultRestaurantPhoto}
                                                    className="img"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-xs-12 col-sm-6 col-lg-8" key={data.id + "8"}>
                                            <div className="container" style={{"borderBottom": "1px solid black"}}
                                                 key={data.id + "cont0"}>
                                                <Fetch
                                                    url={UrlBuilder.buildUrl(endpointsBackend.restaurantRate) + data.id}>
                                                    {({data}) => (
                                                        <div key={data.id + "divStars"}>
                                                            <a className={"headerFont doubleFontSize"}> {data.rate}
                                                                <small style={{
                                                                    "color": "grey",
                                                                    "fontSize": "50%",
                                                                    "marginRight": "20px"
                                                                }}>/ 5 </small>
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

                                            <ul className="fa-ul">
                                                <li><i className="fa-li fa fa-phone"></i>{data.phoneNumber}</li>
                                                <li><i className="fa-li fa fa-map-marker-alt"></i>{data.address}</li>
                                                <li><i className="fa-li fa fa-globe"></i><a href={data.webPage}
                                                                                            target="_blank">{data.webPage}</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <br/>
                                    <div className="container" key={data.id + "cont1"}
                                         style={{"borderBottom": "1px solid " + colors.yellow, textAlign: "center"}}>
                                        <h2 className={"headerFont text-warning"}>Menu:</h2>
                                    </div>
                                    <br/>

                                    {/*menu*/}
                                    <div className="container" key={data.id + "container"}>
                                        <div className="row" key={data.id + "row"}>
                                            {data.menu.map((dish) => (
                                                    <Fetch url={UrlBuilder.buildUrl(endpointsBackend.dish) + dish}>
                                                        {({data}) => (
                                                            <div id={data.id} key={data.id + "divMargin"}
                                                                 style={{"margin": "20px"}}>

                                                                <div id={data.id} key={data.id + "divNotes"}
                                                                     className={"col notes"}
                                                                     style={{"cursor": "pointer"}}
                                                                     onClick={this.handleCheck}>

                                                                    <div id={data.id} className="fill"
                                                                         key={data.id + "divPhoto"}>
                                                                        <ReactImageFallback
                                                                            id={data.id}
                                                                            src={data.photoUrl}
                                                                            fallbackImage={images.defaultDishPhoto}
                                                                            className="img"
                                                                            style={{"display": "inline"}}
                                                                        />
                                                                        <div className={"centered"} id={data.id}
                                                                             style={{"textAlign": "center"}}
                                                                             key={data.id + "divRating"}>

                                                                            <Fetch
                                                                                url={UrlBuilder.buildUrl(endpointsBackend.dishRate) + data.id}>
                                                                                {({data}) => (
                                                                                    <div key={data.id + "divStars"}
                                                                                         id={data.id}>
                                                                                        <Rating
                                                                                            id={data.id}
                                                                                            emptySymbol="fa fa-star-o fa-2x"
                                                                                            fullSymbol="fa fa-star fa-2x"
                                                                                            fractions={2}
                                                                                            style={{
                                                                                                "color": colors.yellow,
                                                                                                "pointerEvents": "none"
                                                                                            }}
                                                                                            initialRating={data.rate}
                                                                                            readonly
                                                                                        />
                                                                                    </div>
                                                                                )}
                                                                            </Fetch>

                                                                            <h3 id={data.id} key={data.id}
                                                                                style={{"display": "inline"}}
                                                                                className={"headerFont brightHeader"}>{data.name}
                                                                            </h3>
                                                                        </div>
                                                                        <div className={"centered-bottom-right"}
                                                                             style={{"textAlign": "center"}}
                                                                             key={data.id + "divPrice"}
                                                                             id={data.id}>
                                                                            <h5 className={"headerFont"}
                                                                                id={data.id}
                                                                                style={{
                                                                                    "color": "black",
                                                                                    "background": colors.yellow,
                                                                                    "padding": "5px"
                                                                                }}>
                                                                                {this.priceFormat(data.price)}
                                                                            </h5>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        )}
                                                    </Fetch>
                                                )
                                            )}
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

    handleCheck(event) {
        let idOfClicked = event.target.getAttribute('id');
        this.props.history.push({
            pathname: endpoints.dish,
            state: {
                key: idOfClicked
            }
        });
    }

}

export default RegisterPage;
