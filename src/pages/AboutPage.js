import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import profileImage from '../images/profile.jpeg';
import {Container, Row, Col, Image, Button } from 'react-bootstrap'

function AboutPage(props) {
    
    return(
        <div>
            <Hero title={props.title}/>
            <Content>
                <Container>
                    <Row>
                        <Col xs ={12} md={12}>
                            <div className="scrollable-content center" style={{height: '200px'}} fluid={true}>
                                <p>
                                    <em>{props.quote}</em>
                                </p>
                                <p>
                                    {props.body}
                                </p>    
                                <p>
                                    {props.closing}
                                </p>                             
                            </div>
                            <div style={{paddingTop: '40px'}}>
                            <a href="https://drive.google.com/file/d/1n1ofm6BBZmnryepzUb6A0-4hiEKS9b8M/view?usp=sharing" target="_blank"><Button>Resume</Button></a>
                            </div>                           
                        </Col>
                    </Row>
                    <br></br>
                    <br></br>
                </Container>
            </Content>
        </div>
    )
}

export default AboutPage;