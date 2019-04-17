import React from 'react';
import { Card, CardBody, CardTitle,Col, CardDeck, Button } from 'reactstrap';
import { Link } from 'react-router-dom';



const Recipes = props =>(
    <CardDeck>
    {props.sendRecipesProp.map((EachRecipe)=>{
        return (
            //THE KEY MUST BE UNIQUE
            
                <Col xl="4" style={{paddingBottom:"2%",paddingTop:"2%"}} key={EachRecipe.recipe.shareAs}>
                <Card body inverse style={{ backgroundColor: '#0099ff', borderColor: '#0099ff' }}>
                    <img width="100%" src={EachRecipe.recipe.image} alt={EachRecipe.recipe.label}/>
                    <CardBody>
                        <CardTitle>{EachRecipe.recipe.label}</CardTitle>
                    </CardBody>

                    <Button color="primary" tag={Link} to={{ pathname : `/Viewrecipe/${EachRecipe.recipe.label}`,
                    state:{RecipeImage:EachRecipe.recipe.image,
                           RecipeList:EachRecipe.recipe.ingredientLines}
                    }}>
                    ViewRecipe
                    </Button>
                  
                  
                </Card>
               </Col>
            
        );
        
      })}
      </CardDeck>
);

export default Recipes ;