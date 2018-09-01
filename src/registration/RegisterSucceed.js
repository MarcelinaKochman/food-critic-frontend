import React from "react";
import {endpoints} from "../properties";

class RegisterSucceed extends React.Component {

    render() {
        return (
            <div>
                <div className="divSpace"/>
                <div className="divSpace"/>
                <div className="divSpace"/>
                <div className="divSpace"/>
                <div className="divCentered">
                    <div className={"divHeader"}>
                        <div className="vertical-center">
                            <div className="container">
                                <div className="row">
                                    <h2 className={"headerFont"}>Rejestracja zakonczona sukcesem!</h2>
                                </div>
                                <div className="divSpace"></div>
                                <div className="row-center">
                                <div className="row">
                                    <a className="btn btn-outline-warning my-2 my-sm-0" href={endpoints.login}>Zaloguj sie</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default RegisterSucceed;