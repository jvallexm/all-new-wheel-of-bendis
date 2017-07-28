import React from 'react';
import Buttons from './Buttons.js';

export default class Civil extends React.Component
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
      let teams = this.props.newTeams(10);
      this.setState({characters: characters, teams: teams});
  }
  render()
  {
    return(
       <div className="opaque">
         
         <h4>Marvel Comics Presents...</h4>
        
        <h1><strong className="red-one">Civil War!</strong></h1>
        
        <div className="solicit text-center container-fluid">

              <h4> When the <strong className="blue-one">{this.state.teams[0]}</strong> kick off a deadly disaster in Stamford, Connecticut, the cry goes out for superhuman registration. With <strong className="red-one">{this.state.characters[0].name}</strong> leading the pro-registration camp, and <strong className="blue-one">{this.state.characters[1].name}</strong> very much anti-registration, the Marvel Universe splits down the middle as friendships, teams and even families are torn apart. This earth-shattering event has consequences for the <strong className="red-one">{this.state.teams[1]}</strong>, <strong className="blue-one">{this.state.teams[2]}</strong>, <strong className="red-one">{this.state.teams[3]}</strong>, <strong className="blue-one">{this.state.characters[2].name}</strong> and everyone else on the Front Line!<br/> War - this is what it's good for!</h4>
          
         </div>
        
        <Buttons shuffle = {this.props.shuffle} />
      </div>
    );
  } 
}  