import React, { Component } from 'react';

import Particles from 'react-particles-js';
import "./index.css"

class animationTest extends Component {
    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://cdn.rawgit.com/progers/pathseg/master/pathseg.js";
        script.async = true;

        document.body.appendChild(script);
    }

    render() {

        return (

            <div>
                <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
                <Particles
                    params={{
                        polygon: {
                            enable: true,
                            type: 'n',
                            move: {
                                radius: 10
                            },
                            url: './index.svg'
                        }
                    }} />



                <p> hello</p>
            </div>
        );
    }
}

export default animationTest;