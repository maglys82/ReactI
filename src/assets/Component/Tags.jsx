import React from 'react';
import Badge from 'react-bootstrap/Badge';

function Tags(props) {
    return (
        <div>
            <Badge bg= {props.color}>{props.text}</Badge>
        </div>
    );
}

export default Tags;