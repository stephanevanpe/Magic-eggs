import React from 'react';
import {Button,Container,Row, Card,Col} from 'reactstrap';
import { Link } from 'react-router-dom';





export default class ViewRecipe extends React.Component {

  render() {
      
    return (
      <div>
          
          <Container>
            <Row noGutters style={{justifyContent: 'center',paddingTop: '10%'}}>
            <Col md="6">
              <Card style={{background:'white'}}>
                 <img src={this.props.location.state.RecipeImage} alt="Card image cap" />
             </Card>
             </Col>

             <Col md="6">
        <Card style={{JustifyContent: 'center',background:'blue',color:'white'}}>
        {this.props.location.state.RecipeList.map((listrecipee)=>{
            return (
               <h6 key={listrecipee}>{listrecipee}</h6>
            );
            
             })}
          <Button color="primary" tag={Link} to="/">Go Back</Button>
        </Card>
        </Col>
       
          </Row>
      </Container>

      </div>
    );
  }
};
