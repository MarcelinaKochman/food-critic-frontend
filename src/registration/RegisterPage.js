import React from 'react';
import '../App.css';
import {endpointsBackend, messages} from "../properties";
import UrlBuilder from "../common/UrlBuilder";
import {Form} from "react-bootstrap";
import RegisterSucceed from "./RegisterSucceed";
import ReactDOM from "react-dom";

class RegisterPage extends React.Component {
    constructor() {
        super();
        this.state = {
            login: '',
            password: '',
            matchingPassword: ''
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

        fetch(UrlBuilder.buildUrl(endpointsBackend.register), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state),
        })
            .then((result) => (result.status === 400) ? result.json() : result)
            .then(function (response) {
                if (response.status === 400) {
                    document.getElementById("passwordError").innerText = response.errors[0].defaultMessage;
                } else if (response.status === 409) {
                    document.getElementById("loginError").innerText = messages.userExist;
                } else if (response.status === 200) {
                    ReactDOM.render(<RegisterSucceed/>, document.getElementById('App'));
                }
            });
    }

    render() {
        return (
            <div className="App" id="App">
                <div className="divSpace"/>
                <div className="divCentered">
                    <div className={"divHeader"}>
                        <h2 className={"headerFont"}> Rejestracja: </h2>
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
                <label>
                    Potwierdz haslo:
                    <input name="matchingPassword" className="form-control" type="password"
                           onChange={this.handleInputChange}/>
                    <p className={"error"} id={"matchingPasswordError"}></p>
                </label>
                <br/>
                <label><input className="btn btn-outline-warning my-2 my-sm-0" type="submit" value="Zarejestruj"/></label>
            </Form>
        );
    }
}

export default RegisterPage;
