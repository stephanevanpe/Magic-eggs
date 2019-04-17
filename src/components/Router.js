import React from 'react';
import {BrowserRouter,Switch,Route } from 'react-router-dom';
import ViewRecipe from './ViewRecipe'
import App from '../App';

const Router =()=>(

    <BrowserRouter>

    <Switch>
        <Route path="/" component={App} exact />
        <Route path="/Viewrecipe/:id" component={ViewRecipe} />
    </Switch>
    
    </BrowserRouter>

);

export default Router;