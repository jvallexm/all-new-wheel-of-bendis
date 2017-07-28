import React from 'react';
import Buttons from './Buttons.js';

export default class Maximum extends React.Component
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
        
        <h1><strong className="red-one">Maximum {this.state.characters[0].name}!</strong></h1>
        
        <div className="solicit text-center container-fluid">

          <h4><strong className="blue-one">{this.state.characters[0].name}</strong>, the apprentice of <strong className="blue-one">{this.state.characters[1].name}</strong>, has assembled an army of <strong className="red-one">{this.state.characters[2].name}</strong>'s criminally insane adversaries to spread the message of hostility, chaos and wholesale slaughter: <strong className="blue-one">{this.state.characters[3].name}</strong>, <strong className="blue-one">{this.state.characters[4].name}</strong>, <strong className="blue-one">{this.state.characters[5].name}</strong> and the <strong className="blue-one">{this.state.characters[2].name} Doppelganger</strong>! Outmanned and overpowered, <strong className="red-one">{this.state.characters[2].name}</strong> must assemble their own band of super-beings to combat the rising tide of evil: <strong className="red-one">{this.state.characters[6].name}</strong>, <strong className="red-one">{this.state.characters[7].name}</strong>, <strong className="red-one">{this.state.characters[8].name}</strong>, <strong className="red-one">{this.state.characters[9].name}</strong>, <strong className="red-one">{this.state.characters[10].name}</strong> and ... <strong className="blue-one">{this.state.characters[1].name}</strong>?!<br/> <strong className="red-one">{this.state.characters[2].name}</strong>'s worst enemy becomes their uneasy ally in the battle to halt <strong className="blue-one">{this.state.characters[0].name}</strong>'s mad rampage. But when he finds himself at odds with a number of their allies, who want to finish <strong className="blue-one">{this.state.characters[0].name}</strong> and their cronies once and for all, <strong className="red-one">{this.state.characters[2].name}</strong> must decide whether to violate their personal code of honor to rid the world of pure evil. Can they find an alternative before it's too late? Either choice carries dire consequences! </h4>          
        </div>
        <Buttons shuffle = {this.props.shuffle} />
      </div>
    );
  } 
}  