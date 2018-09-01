import React from 'react';
import '../App.css';
import {endpoints, messages} from "../properties";
import UrlBuilder from "../common/UrlBuilder";
import {Form} from "react-bootstrap";
import LoginSucced from "./LoginSucceed";
import ReactDOM from "react-dom";

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            login: '',
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
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

    handleSubmit(event) {
        event.preventDefault();

        fetch(UrlBuilder.buildUrl(endpoints.login), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state),
        })
            .then(function (response) {
                if (response.status === 401) {
                    document.getElementById("loginError").innerText = messages.notAuthorized;
                } else if (response.status === 200) {

                    response.json().then(function(data) {
                        sessionStorage.login = data.login;
                    });

                    document.getElementById("loginButtonDiv").innerHTML = "";

                    ReactDOM.render(<LoginSucced/>, document.getElementById('App'));
                }
            });
    }

    render() {
        return (
            <div className="App" id="App">
                <div className="divSpace"/>
                <div className="divCentered">
                    <div className={"divHeader"}>
                        <h2 className={"headerFont"}> Logowanie: </h2>
                    </div>
                </div>
                <div className="divSpace"/>

                <div className="divCentered">
                    <div className="popUp">{this.renderForm()}</div>
                </div>
            </div>
        );
    }

    renderForm() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <label>
                    Login:
                    <input name="login" className="form-control" type="text" onChange={this.handleInputChange}/>
                    <p className={"error"} id={"loginError"}></p>
                </label>
                <br/>
                <label>
                    Haslo:
                    <input name="password" className="form-control" type="password" onChange={this.handleInputChange}/>
                    <p className={"error"} id={"passwordError"}></p>
                </label>
                <br/>
                <label><input className="btn btn-outline-warning my-2 my-sm-0" type="submit" value="Zaloguj"/></label>
            </Form>
        );
    }
}

export default LoginPage;
