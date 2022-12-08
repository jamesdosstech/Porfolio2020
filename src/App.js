import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import './App.css';

//React Scroll
import { Link, animateScroll as scroll } from "react-scroll";

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

//component imports
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

//component SplashPages
import AboutSplash from './components/splashpages/aboutsplash';
import ContactSplash from './components/splashpages/contactsplash';
import ProjectSplash from './components/splashpages/projectsplash';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Garrett Love",
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'},
      ],
      home: {
        title: "Repertoire",
        subTitle: "Projects that make a difference",
        text: "Checkout my projects below"
      },
      about: {
        title: 'Who Am I?',
        name: 'James Doss ',
        quote: "'You've got to start with the customer experience and work backwards to the technology.'",
        closing: "This desire calls back to my experience in the arts. Developing animations for the web, capturing stories for " +
                  "the silver screen, and writing alleories that help us understand how to grow are integrated into my web design.",
        body: "I am a Full Stack Developer with experience in SPA-level designs. " +
              "My passion for development stems from the desire to give the user " +
              "the tools that allow access to information at their leisure, entertain at the visual level, and create an enjoyable experience.",
        introduction: 'is a full stack engineer with experience in Angular, AngularJS, Express JS, Node JS, Oracle SQL, MongoDB, and React.'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar fixed="top" className="border-bottom" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>
              James Doss
            </Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link 
                  className="nav-link"
                  activeClass="active"
                  to="aboutMe"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {500}
                >About</Link>
                <Link 
                  className="nav-link" 
                  activeClass="active"
                  to="projectz"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {500}
                  >Projects</Link>
                <Link 
                  className="nav-link" 
                  activeClass="active"
                  to="about-me"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {500}
                >Contact</Link>
                <a className="nav-link" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/jalexdoss/"><FontAwesomeIcon style={{paddingRight: '4px'}} icon={faLinkedin} /></a>
                <a className="nav-link" rel="noopener noreferrer" target="_blank" href="https://github.com/jadoss"><FontAwesomeIcon style={{paddingRight: '4px'}} icon={faGithub} /></a>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <AboutSplash />
          <AboutPage 
            className="navbar-top-space" 
            title={this.state.about.title} 
            subTitle={this.state.about.subTitle} 
            text={this.state.about.text} 
            quote={this.state.about.quote}
            closing={this.state.about.closing}
            body={this.state.about.body}
            introduction={this.state.about.introduction}
          />
          <ProjectSplash />
          <HomePage 
            title={this.state.home.title} 
            subTitle={this.state.home.subTitle} 
            text={this.state.home.text} 
          />
          <ContactSplash />
          <ContactPage  
            title={this.state.contact.title} 
            subTitle={this.state.contact.subTitle} 
            text={this.state.contact.text} 
          />
          {/* <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.title} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.title} />} />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} text={this.state.contact.title} />} /> */}

          <Footer />

        </Container>
      </Router>
    )
  }
}

export default App;
