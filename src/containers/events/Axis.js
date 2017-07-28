import React from 'react';
import Buttons from './Buttons.js';

export default class Axis extends React.Component
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
        
        <h1><strong><span className="red-one">{this.state.teams[1]}</span> and <span className="blue-one">{this.state.teams[0]}</span> Axis!</strong></h1>
        
        <div className="solicit text-center container-fluid">

             <h4><strong className="red-one">{this.state.characters[0].name}</strong> has exploited the gifts of the world's most powerful superhuman to broadcast pure hatred across the globe. Now, born of the murder of <strong className="blue-one">{this.state.characters[1].name}</strong>, World War Hate has begun. <strong className="red-one">{this.state.characters[2].name}</strong> discovers a secret truth that will upend not only his life, but also the lives of everyone he cares for. Can the <strong className="red-one">{this.state.teams[1]}</strong> and <strong className="blue-one">{this.state.teams[0]}</strong> finally unite? Would their combined strength be enough to hold back the darkness of <strong className="red-one">{this.state.characters[0].name}</strong>? <strong className="blue-one">{this.state.characters[3].name}</strong> murdered the wrong person, releasing the greatest evil the Marvel Universe has ever known. Now <strong className="red-one">{this.state.characters[4].name}</strong> and <strong className="blue-one">{this.state.characters[5].name}</strong> are all that stand in their way!</h4> 
          
         </div>
        
        <Buttons shuffle = {this.props.shuffle} />
      </div>
    );
  } 
}  