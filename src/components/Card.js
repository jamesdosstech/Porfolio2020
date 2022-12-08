import React from 'react';
import CardInfo from '../components/CardInfo';

function Card(props) {
    return(
        <div className="d-inline-block d-card" onClick={(e) => props.click(props.item)}>
            <p>{props.item.title}</p>
            <img className="d-card-image" src={props.item.imgSrc} alt={props.item.imSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} github={props.item.github}/> }
        </div>
    )
}

export default Card;