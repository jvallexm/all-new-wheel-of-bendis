import React from 'react';
import Buttons from './Buttons.js';

export default class Secret extends React.Component
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
        
        <h1><strong className="red-one">Marvel Super Heroes Secret Wars!</strong></h1>
        
        <div className="solicit text-center container-fluid">

              <h4>Drawn from Earth across the stars, the Marvel Universe's greatest villains and heroes are set against one another by the mysterious and unbelievably powerful <strong className="blue-one">{this.state.characters[0].name}</strong>, with the winner promised the ultimate prize. But as battle lines are drawn, new alliances forged and old enemies clash, one among them is not willing to settle for anything less than godhood. Can even the combined might of the <strong className="red-one">{this.state.teams[0]}</strong>, <strong className="blue-one">{this.state.characters[1].name}</strong>, the <strong className="red-one">{this.state.teams[1]}</strong> and the <strong className="blue-one">{this.state.teams[2]}</strong> prevent <strong className="red-one">{this.state.characters[2].name}</strong> from becoming the most powerful being in the universe?</h4>
          
         </div>
        
        <Buttons shuffle = {this.props.shuffle} />
      </div>
    );
  } 
}  