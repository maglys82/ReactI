import React from 'react';
import Tags from "./Tags";
import CardBootstrap from 'react-bootstrap/Card';


function Card(props) {


    return (

        <CardBootstrap className="cardDog card" style={{ width: '18rem' }}>
            <CardBootstrap.Img variant="top" src={props.imagen} />
            <CardBootstrap.Body>
                <CardBootstrap.Title>{props.nombre}</CardBootstrap.Title>
                <CardBootstrap.Text>
                    {props.descripcion}
                </CardBootstrap.Text>
                <Tags color={props.colorfondo} text={props.texto} />
            </CardBootstrap.Body>
        </CardBootstrap>

    );
}
export default Card