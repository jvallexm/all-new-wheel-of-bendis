import React from 'react';
import Buttons from './Buttons.js';

export default class AgeOf extends React.Component
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
      let teams = this.props.newTeams(6);
      this.setState({characters: characters, teams: teams});
  }
  render()
  {
    return(
       <div className="opaque">
         
         <h4>Marvel Comics Presents...</h4>
        
        <h1><strong className="red-one">Age of {this.state.characters[0].name.indexOf("(") == -1 ? this.state.characters[0].name : this.state.characters[0].name.substr(0,this.state.characters[0].name.indexOf("(")-1)}!</strong></h1>
        
        <div className="solicit text-center container-fluid">

             <h4>For years, the Marvel Universe has lived in fear that <strong className="red-one">{this.state.characters[0].name}</strong> would one day evolve to fulfill their greatest desire: to wipe out all life and take over the Earth. That day has arrived! The impossible has happened and <strong className="red-one">{this.state.characters[0].name}</strong> rules the planet! And as the few super hero survivors that remain try desperately to stay alive, <strong className="blue-one">{this.state.characters[1].name}</strong> learns the staggering secret of <strong className="red-one">{this.state.characters[0].name}</strong>'s victory. As a near-broken <strong className="blue-one">{this.state.characters[2].name}</strong> leads a ragtag counterattack, <strong className="blue-one">{this.state.characters[3].name}</strong> makes a controversial and desperate decision - that creates an all-new Marvel Universe! But can even this rash act defeat <strong className="red-one">{this.state.characters[0].name}</strong>? The event of the year has arrived!</h4> 
          
         </div>
        
        <Buttons shuffle = {this.props.shuffle} />
      </div>
    );
  } 
}  