import React from 'react';
import './App.css';
import {Fetch} from 'react-data-fetching'
import {colors, endpoints, endpointsBackend, images} from "./properties";
import PhotoDiv from './common/PhotoDiv';
import UrlBuilder from './common/UrlBuilder';
import ReactImageFallback from "react-image-fallback";
import Rating from "react-rating";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.handleCheck = this.handleCheck.bind(this);

    }

    render() {
        return (
            <div className="App">
                <PhotoDiv/>

                <div className="divSpace"/>
                <div className="divCentered">
                    <div className={"divHeader "}>
                        <a className={"headerFont"} style={{"fontSize" : "200%"}} name="bestRestaurantHeader"> Najlepsze restauracje wedlug recenzji uzytkownikow: </a>
                    </div>
                </div>
                <div className="divSpace"/>

                <div className="container">
                    <div className="row">
                        <Fetch url={UrlBuilder.buildUrl(endpointsBackend.restaurant)}>
                            {({data}) => (
                                data.map(restaurant =>
                                    <div id={restaurant.id} key={restaurant.id + "div"} style={{"margin": "20px"}}>
                                        <h5 id={restaurant.id} key={restaurant.id + "header"}
                                            className={"headerFont"}>{restaurant.name}</h5>
                                        <Fetch
                                            url={UrlBuilder.buildUrl(endpointsBackend.restaurantRate) + restaurant.id}>
                                            {({data}) => (
                                                <div key={data.id + "divStars"}>
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
                                        <div id={restaurant.id} key={restaurant.id + "image"} className={"col notes"}
                                             style={{"cursor": "pointer"}} onClick={this.handleCheck}>

                                            <div id={restaurant.id} className="fill">
                                                <ReactImageFallback
                                                    id={restaurant.id}
                                                    src={restaurant.photoUrl}
                                                    fallbackImage={images.defaultRestaurantPhoto}
                                                    className="img"
                                                />
                                            </div>

                                        </div>
                                    </div>
                                )
                            )}
                        </Fetch>
                    </div>
                </div>
            </div>
        );
    }

    handleCheck(event) {
        let idOfClicked = event.target.getAttribute('id');
        this.props.history.push({
            pathname: endpoints.restaurant,
            state: {
                key: idOfClicked
            }
        });
    }

}

export default App;
