import React from 'react';
import { Button, Card } from 'reactstrap';





export default class Reload extends React.Component {

    render(
    ) {
        return (
            <div>
                <input type="button" value="Refresh Button" onClick="window.location.reload()"/> 
            </div>
        );
    }
}