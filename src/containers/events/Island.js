import React from 'react';
import Buttons from './Buttons.js';

export default class Island extends React.Component
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
        
        <h1><strong className="red-one">{this.state.characters[0].name.indexOf("(") == -1 ? this.state.characters[0].name : this.state.characters[0].name.substr(0,this.state.characters[0].name.indexOf("(")-1)}-Island!</strong></h1>
        
        <div className="solicit text-center container-fluid">

             <h4>Between keeping New York City safe. being a member of the <strong className="blue-one">{this.state.teams[0]}</strong> and the <strong className="red-one">{this.state.teams[1]}</strong>, and their day job, <strong className="blue-one">{this.state.characters[0].name}</strong>'s life is as crazy as it's ever been. And it's about to get even crazier. Welcome to <strong className="red-one">{this.state.characters[0].name.indexOf("(") == -1 ? this.state.characters[0].name : this.state.characters[0].name.substr(0,this.state.characters[0].name.indexOf("(")-1)}-Island</strong>, where a million New Yorkers suddenly possess <strong className="blue-one">{this.state.characters[0].name}</strong>'s powers - but none of the responsibility! Can they play world-saving super hero while the Big Apple gets eaten alive from the inside out when they're suddenly not quite so special? When they're surrounded by a million people just as powerful as them? And just wait until you meet <strong className="red-one">{this.state.characters[1].name}</strong>, the Mayor!</h4> 
          
         </div>
        
        <Buttons shuffle = {this.props.shuffle} />
      </div>
    );
  } 
}  