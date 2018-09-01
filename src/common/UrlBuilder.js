import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {localProperties} from "../properties";

class UrlBuilder extends React.Component {

    static buildUrl(endpoint){
        return "http://" + localProperties.hostname + endpoint + "/";
    }

}

export default UrlBuilder;