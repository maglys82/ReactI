import React from 'react';
import Tags from "./Tags";

function Card(props) {


    return (
        <div className="cardDog card">
            <div>
            <img width={500} src={props.imagen} />    
            </div>
            <h2>{props.nombre}</h2>
            <p>{props.descripcion}</p>
            <Tags color = {props.colorfondo} text={props.texto} />
            
        </div>
    );
}
export default Card