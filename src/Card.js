import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';

import Getoeufs from './Getoeufs';


const Exemple = (props) => {
    return (
        <CardDeck>
            <Card body inverse style={{ backgroundColor: 'rgba(255,255,255, 0.5)', borderColor: 'rgb(0,255,0)' }}>
                <Getoeufs/>
            </Card>
            <Card body inverse style={{ backgroundColor: 'rgba(255,255,255, 0.5)', borderColor: 'rgb(0,255,0)' }}>
                <Getoeufs />
            </Card>
            <Card body inverse style={{ backgroundColor: 'rgba(255,255,255, 0.5)', borderColor: 'rgb(0,255,0)' }}>
                <Getoeufs />
            </Card>
        </CardDeck>
    );
};

export default Exemple;