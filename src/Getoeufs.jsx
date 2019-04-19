import React from 'react';
import axios from 'axios';

import Getoeufs from './Getoeufs.css'

export default class Eggs extends React.Component {
    state = {
        eggs: []
    }

    componentDidMount() {
        axios.get(`http://easteregg.wildcodeschool.fr/api/eggs/random`)
            .then(res => {
                const eggs = res.data;
                this.setState({ eggs });
            })
    }

    render() {
        return (
            <div>
                <img src={this.state.eggs.image} />
            </div>
        );
    };
}