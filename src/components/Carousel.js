import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import tetris from '../images/tetris.jpg';
import got from '../images/got.jpg';
import weather from '../images/weather.jpg';
import fireboard from '../images/fireboard.jpg';
import doosetrain from '../images/doosetrain.jpg';
import shopping from '../images/Shopping.jpg'

import Card from '../components/Card';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "Fireboard React Application",
                    subTitle: 'A firestation Scheduler',
                    imgSrc: fireboard,
                    github: 'https://github.com/danielryne/fireboard',
                    link: 'https://fireboard-app.herokuapp.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: "Doosetrain React Application",
                    subTitle: 'A Localized Interactive Live-Stream Platform for local Dj Doosetrain',
                    imgSrc: doosetrain,
                    github: 'https://github.com/jamesdosstech/boxcar_cadavar',
                    link: 'http://www.doosetrain.com',
                    selected: false
                },
                {
                    id: 2,
                    title: "Tetris React Application",
                    subTitle: 'A simple game of tetris using React with React Hooks',
                    imgSrc: tetris,
                    github: 'https://github.com/jadoss/reactTetris_w_hooks',
                    link: 'https://jadoss.github.io/reactTetris_w_hooks/',
                    selected: false
                },
                {
                    id: 3,
                    title: "What to Weather Javascript Application",
                    subTitle: 'A shopping App that provides you the tools to fair the Weather',
                    imgSrc: weather,
                    github: 'https://github.com/anjunha93/what-to-weather',
                    link: 'https://anjunha93.github.io/what-to-weather/',
                    selected: false
                },
                {
                    id: 4,
                    title: "Game of Thrones RPG Javascript Application",
                    subTitle: 'A Role Playing Game where you level up to over come your enemies',
                    imgSrc: got,
                    github: 'https://github.com/jadoss/RPG',
                    link: 'https://jadoss.github.io/RPG/',
                    selected: false
                },
                {
                    id: 5,
                    title: "Mock E-Commerce",
                    subTitle: 'A mock e-commerce Shop using React hooks, redux, firebase',
                    imgSrc: shopping,
                    github: 'https://github.com/jamesdosstech/mock_ecommerce',
                    link: 'https://deft-marzipan-8a65dc.netlify.app/',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        console.log(id);

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel;