import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';
import Content from '../components/Content';
import Axios from 'axios';
import emailjs from 'emailjs-com';


class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            disabled: false,
            emailSent: null
        }
    }

    sendEmail = (event) => {
        event.preventDefault();
        this.setState({
            disabled: true,
        });
        emailjs.sendForm('service_qkhly7s', 'template_e5r8et5', event.target, 'user_tCjB5etybtjZVuy0D2ApA')
        .then((result) => {
            console.log(result.text);
            this.setState({
                disabled: false,
                emailSent: true,
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        }, (error) => {
            console.log(error.text);
            this.setState({
                disabled: false,
                emailSent: true,
                name: '',
                email: '',
                subject: '',
                message: '',  
            })
        });
        event.target.reset();
    }
    

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            disabled: true,
        });

        Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });    
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    }); 
                }   
            })
            .catch(err => {
                console.log(err);

                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })
    }

    render() {
        return(
            <div>
                <Hero title={this.props.title} />

                <Content>
                    <Form onSubmit={this.sendEmail}> 
                        <Form.Group>
                            <Form.Label htmlFor="full-name">
                                Full Name
                            </Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="email">
                                Email
                            </Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="subject">
                                Subject
                            </Form.Label>
                            <Form.Control id="subject" name="subject" type="text" value={this.state.subject} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="message">
                                Message
                            </Form.Label>
                            <Form.Control id="message" name="message" as="textarea" row="3" value={this.state.message} onChange={this.handleChange} />
                        </Form.Group>

                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>

                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}

                    </Form>
                </Content>
            </div>
        )
    }   
}

export default ContactPage;