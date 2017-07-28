import React from 'react';
import Buttons from './Buttons.js';

export default class Ig extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
       characters: [],
       teams: []
    };
    this.shuffle = this.shuffle.bind(this);
  }
  componentWillMount()
  {
      this.shuffle();
  }
  componentWillUpdate(prevProps)
  {
    if(prevProps.tick != this.props.tick)
    {
      this.shuffle();
    }
  }
  shuffle()
  {
      let characters = this.props.newCharacters(12);
      let teams = this.props.newTeams(2);
      this.setState({characters: characters, teams: teams});
  }
  render()
  {
    return(
       <div className="opaque">
         
        <h4>Marvel Comics Presents...</h4>
        
        <h1><strong className="red-one">Infinity Gauntlet!</strong></h1>
        
        <div className="solicit text-center container-fluid">

          <h4>Death has released <strong className="blue-one">{this.state.characters[1].name}</strong> from her cold embrace, and they plan to repay this debt by murdering half the universe! But even as <strong className="blue-one">{this.state.characters[1].name}</strong> gathers the six Infinity Gems from across the galaxy, assembling them into the Infinity Gauntlet and gaining truly godlike powers, a host of heroes gather to oppose them - including <strong className="red-one">{this.state.characters[2].name}</strong>, <strong className="blue-one">{this.state.characters[3].name}</strong>, <strong className="red-one">{this.state.characters[4].name}</strong>, <strong className="blue-one">{this.state.characters[5].name}</strong>, <strong className="red-one">{this.state.characters[6].name}</strong> and the <strong className="blue-one">{this.state.characters[7].name}</strong>! Even with <strong className="red-one">{this.state.characters[8].name}</strong>, <strong className="blue-one">{this.state.characters[9].name}</strong>, and the universe's cosmic powers aiding them, can Marvel's mightiest possibly prevail against <strong className="blue-one">{this.state.characters[1].name}</strong> the all-powerful? </h4>
          
        </div>
        
        <Buttons shuffle = {this.props.shuffle} />
      </div>
    );
  } 
}  