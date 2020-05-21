import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
const Character = props =>{

    return (

    <div>
        <Card >
        <CardImg top width="100%" src={props.charcter.image} alt={`${props.charcter.name}'s img`} />
        <CardBody className="text-left">
            <CardTitle>{props.charcter.name}</CardTitle>
            <CardText>{props.charcter.status}</CardText>
        </CardBody>
        </Card>
    </div>)

}

export default Character;
