import React from 'react';
import { Button, Card } from 'reactstrap';





export default class Reload extends React.Component {

    render(
    ) {
        return (
            <div style={{display:'flex', justifyContent : 'center'}}>
                <button>
                <a href="javascript:window.location.reload()">Try again</a>
                </button>
            </div>
        );
    }
}