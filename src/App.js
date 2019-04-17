import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';
import Particles from 'react-particles-js';
import { Card, CardImgOverlay, CardImg } from 'reactstrap';

const APP_ID ="59a70ad4";
const APP_KEY = "e277ba5dd5d7330c9716948c3fc87001";

const particelOps ={
  particles: {
    number: {
      value : 250,
      density:{
        enable: true,
        value_area:1000,
      }
  },
  shape:{
    value:'star',
  },
  line_linked:{
    enable:true,

  },

},
interactivity: {
  detect_on: "canvas",
  events: {
    onhover: {
      enable: false,
      mode: 'repulse'
    },
    onclick: {
      enable: true,
      mode: 'push'
    },
  }
  
  }

}

class App extends Component {
  state = {
    hitsArray: []
  }

  getSearchName = async (e)=>{
    e.preventDefault();

    const valueSearch = e.target.elements.searchname.value;

    await fetch(`https://api.edamam.com/search?q=${valueSearch}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=12`)
    .then(response =>  response.json())
    .then(resData => this.setState({hitsArray: resData.hits},
      console.log(resData.hits))
  );

  this.componentDidMount=()=>{
    const jsond = localStorage.getItem("hitsArray");
    const recipes = JSON.parse(jsond);
    this.setState({hitsArray:recipes});

  }

  this.componentDidUpdate=()=>{
    const recip = JSON.stringify(this.state.hitsArray);
    localStorage.setItem("hitsArray",recip);
  }

    
  }
  render() {
    return (
      <div style={{
        width: '100%',height:'100%'}}>
 
      <Particles params={particelOps} style={{
                width: '100%',height:'100%'}}/>
        <CardImgOverlay>
        <h1 className="App-title">Hello Toi</h1>
        <main>
        <Form getSearchNameProp={this.getSearchName} />
        <Recipes sendRecipesProp = {this.state.hitsArray}/>
        </main>
        </CardImgOverlay>
      
   </div>
    );
  }
}


export default App;
