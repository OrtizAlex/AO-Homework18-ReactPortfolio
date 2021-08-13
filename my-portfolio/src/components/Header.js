import React from 'react';

export default function Header(props) {
    return (
        <header>
            <div class="container-fluid container-lg">
                <div class="row overflow-hidden">
                    <div class="col-6">
                        <div>
                            <div class="text-center justify-center me">
                                <div>
                                    <h2>{props.data.name}</h2>
                                </div>
                                <div class="container-fluid">
                                    <p>
                                        Full Stack Web Developer
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}