import {endpoints} from "../properties";
import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";


class LoginButton extends React.Component {

    constructor() {
        super();
        this.loggedIn = sessionStorage.getItem('login') !== null;
        this.loggedUser = sessionStorage.getItem('login');
    }

    logoutUser() {
        window.sessionStorage.clear();
        window.location.reload();
    }


    render() {
        if (!this.loggedIn) {
            return (
                <div id={"loginButtonDiv"}>
                    <Button className="btn btn-warning my-2 my-sm-0" href={endpoints.login}>Logowanie</Button>
                </div>
            )
        }

        return (<Button className="btn btn-warning my-2 my-sm-0" onClick={this.logoutUser}>Wyloguj</Button>)
    }

}

export default LoginButton;



