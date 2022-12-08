import React, { Component } from 'react';
import img from '../../images/arts.jpeg';

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
            <section id="projectz" style= { sectionStyle }>
                <h1 style={{
                    paddingTop: '150px', 
                    textAlign: 'center',  
                    color: 'white'}}>
                        Projects
                </h1>
            </section>
        );
    }
}

export default ContactSplash