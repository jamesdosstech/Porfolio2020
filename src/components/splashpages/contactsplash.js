import React, { Component } from 'react';
import img from '/Users/james/Github/PortfolioDesigns/portfolio2020-june/src/images/drawing.JPG';

var sectionStyle = {
    width: "100%",
    height: "300px",
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    filter: 'grayscale(100%)'
};

class ContactSplash extends Component {
    render() {
        return (
            <section id="about-me" style= { sectionStyle }>
                <h1 style={{
                    paddingTop: '150px', 
                    textAlign: 'center',
                    color: 'white',}}>
                    Contact Me Here
                </h1>
            </section>
        );
    }
}

export default ContactSplash