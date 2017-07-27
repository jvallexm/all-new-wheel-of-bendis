import React from 'react';
import Buttons from './Buttons.js';

export default class YvZ extends React.Component
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
      let characters = this.props.newCharacters(10);
      //console.log(characters);
      let teams = this.props.newTeams(2);
      //console.log(teams);
      this.setState({characters: characters, teams: teams});
  }
  render()
  {

    return(
      <div className="opaque">
        
        <div>
                <h4>Marvel Comics Presents...</h4>
                <h1>
                    <strong>
                        <span className="red-one">{this.state.teams[0]}</span> vs <span className="blue-one">{this.state.teams[1]}</span>
                    </strong>
                </h1>
                
                <div className="solicit text-center container-fluid">
                  <h4>The <strong className="red-one">{this.state.teams[0]}</strong> and the <strong className="blue-one">{this.state.teams[1]}</strong> - 
                     the two most popular super-hero teams in history - go to war! This landmark pop-culture event brings together {
                        this.state.characters.map((d,i)=> <span key={d._id }className={i<5 ? "red-one":"blue-one"}>{d.name}{i==9?" ":", "}</span>)} and 
                        more in the story that changes them forever! And experience the larger-than-life battles too big for any other comic to contain!<br /></h4> <h3>
                  <span className = "red-one">{this.state.characters[0].name}</span> vs.  
                  <span className = "blue-one"> {this.state.characters[9].name}</span>!<br /> 
                  <span className = "red-one">{this.state.characters[1].name}</span> vs. 
                  <span className = "blue-one"> {this.state.characters[8].name}</span>!<br /> 
                  <span className = "red-one">{this.state.characters[3].name}</span> vs.  
                  <span className = "blue-one"> {this.state.characters[6].name}</span>!</h3>
                  <h4>And more! It's Marvel's biggest event ever - but will the <strong className="red-one">{this.state.teams[0]}</strong> or the <strong className="blue-one">{this.state.teams[1]}</strong> emerge triumphant?</h4>
                </div> 
        </div>
        <Buttons shuffle={this.shuffle} />
      </div>
    );
  }
}