import React from 'react';
import Buttons from './Buttons.js';

export default class AoA extends React.Component
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
      console.log("YvZ will mount");
      this.shuffle();
  }
  shuffle()
  {
      let characters = this.props.newCharacters(5);
      //console.log(characters);
      let teams = this.props.newTeams(1);
      //console.log(teams);
      this.setState({characters: characters, teams: teams});
  }
  render()
  { 
    return(    
      
       <div className="opaque">
        
        <h4>Marvel Comics Presents...</h4>
        
        <h1><strong className="red-one">Age of {this.state.characters[0].name}!</strong></h1>
        
        <div className="solicit text-center container-fluid">

          <h4><strong className="red-one">{this.state.characters[1].name}</strong> is dead - killed twenty years in the past during a freak time-travel accident - and the world that has arisen in their absence is dark and dangerous indeed. The conqueror <strong className="blue-one">{this.state.characters[0].name}</strong> rules with an iron fist, ruthlessly enforcing their dictum that only the strong shall survive - and in <strong className="blue-one">{this.state.characters[0].name}</strong>'s long shadow, hidden among a downtrodden humankind, are a group of ragtag freedom fighters led by <strong className="red-one">{this.state.characters[1].name}</strong>'s oldest friend, <strong className="red-one">{this.state.characters[2].name}</strong>: the Amazing <strong className="blue-one">{this.state.teams[0]}</strong>! When <strong className="red-one">{this.state.characters[3].name}</strong>, last survivor of the true Marvel Universe, locates <strong className="blue-one">{this.state.teams[0]}</strong> and explains how the world went wrong, these embittered heroes and their tenuous allies must risk everything - and undertake a dangerous and multi-pronged quest - to put things right!</h4>
          
        </div>
        <Buttons shuffle = {this.shuffle} />
      </div>
      
     );
  }
}