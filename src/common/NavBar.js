import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import {endpoints} from "../properties";
import LoginButton from "./LoginButton";

class NavBar extends React.Component {

    render() {
        return (
            <div className="NavBar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Food-critic</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href={endpoints.home}>Strona domowa<span className="sr-only">(current)</span></a>
                            </li>
                            {/*<li className="nav-item">*/}
                                {/*<a className="nav-link" href={endpoints.home}>Link</a>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item dropdown">*/}
                                {/*<a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
                                    {/*Dropdown*/}
                                {/*</a>*/}
                                {/*<div className="dropdown-menu" aria-labelledby="navbarDropdown">*/}
                                    {/*<a className="dropdown-item" href="/">Action</a>*/}
                                    {/*<a className="dropdown-item" href="/">Another action</a>*/}
                                    {/*<div className="dropdown-divider"></div>*/}
                                    {/*<a className="dropdown-item" href="/">Something else here</a>*/}
                                {/*</div>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                                {/*<a className="nav-link disabled" href="/">Disabled</a>*/}
                            {/*</li>*/}
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-warning my-2 my-sm-0" type="submit" style={{marginRight:"8px"}}>Search</button>
                        </form>
                        <Button className="btn btn-warning my-2 my-sm-0" href={endpoints.register} style={{marginRight:"8px"}}>Rejestracja</Button>
                        <LoginButton/>
                    </div>
                </nav>
            </div>
        );
    }

}

export default NavBar;
