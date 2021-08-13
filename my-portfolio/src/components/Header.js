import React from 'react';
import logo from '../logo.svg';

export default function Header(props) {
    return (
        <div min-height="270px" background-color="#000044" color="#aaaacc">  
            <div class="container">
                <div class="row">
                    <div class="col-md-7">
                    <h1>{props.data.name}
                        <p class="lead">Full Stack Developer</p>
                    </h1>
                    </div>
                    <div class="col-md-5">
                        <div class="well well-lg"> 
                            <div class="row">
                                <div class="col-sm-6">
                                    <img src={logo} class="img-responsive"/>
                                </div>
                                <div class="col-sm-6">
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