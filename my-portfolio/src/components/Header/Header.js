import React from 'react';
import logo from '../../logo.svg';

import "./Header.css";

export default function Header(props) {
    return (
        <div className="header bg-dark text-white head">  
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                    <h1>{props.data.name}
                        <p className="lead">Test</p>
                    </h1>
                    </div>
                    <div className="col-md-5">
                        <div className="well well-lg"> 
                            <div className="row">
                                <div className="col-sm-6">
                                    <img src={logo} className="img-responsive"/>
                                </div>
                                <div className="col-sm-6">
                                    <strong>Full Stack Developer</strong>
                                    <p>HTML - CSS - Javascript - NoSQL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}