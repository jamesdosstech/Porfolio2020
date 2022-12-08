import React, { Component } from 'react';
import img from '../../images/SplashBanner.jpeg';

var sectionStyle = {
    width: "100%",
    height: "300px",
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    filter: 'grayscale(100%)'
};

class AboutSplash extends Component {
    render() {
        return (
            <section id="aboutMe" style= { sectionStyle }>
                <h1 style={{
                    paddingTop: '150px', 
                    textAlign: 'center',
                    // fontWeight: '24px', 
                    color: 'white'}}>
                    About Me
                </h1>
            </section>
        );
    }
}

export default AboutSplash