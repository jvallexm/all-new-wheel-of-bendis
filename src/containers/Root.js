import React from 'react';
import io from 'socket.io-client';
const socket=io();

export default class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            characters: [],
            teams: ["Runaways","S.H.I.E.L.D.","Guardians of the Galaxy","Champions","Defenders","Inhumans","Young Avengers","Secret Avengers","Avengers","X-Men","X-Force","X-Factor","X-Statix","Avengers","Alpha Flight","S.H.I.E.L.D","Brotherhood of Evil Mutants","Sinister Six","Marvel Knights","Dark X-Men","Fantastic Four","Excalibur","Agents of Atlas","Heroes For Hire","Howling Commandos","West Cost Avengers","Freedom Force","Midnight Sons","Nextwave","Power Pack","New Mutants","Thunderbolts","Mauraders","Illuminati","Future Foundation","Invaders"]
        };
        this.sendCharacters = this.sendCharacters.bind(this);
        this.sendTeams = this.sendTeams.bind(this);
    }
    componentWillMount()
    {
        if(this.state.characters.length == 0)
            socket.emit("send me characters",{send: "characters"});
        socket.on("get characters",(data)=>{
            console.log("got characters from database");
            this.setState({characters: data.characters});
        });      
    }
    sendCharacters(num,team,min)
    {
        let characters = this.state.characters;
        let newCharacters = [];
        while(newCharacters.length < num)
        {
            let roll = Math.floor(Math.random()*characters.length);
            let idCheck = false;
            for(let i=0;i<newCharacters.length;i++)
            {
                if(characters[roll]._id == newCharacters[i]._id)
                {
                    idCheck=true;
                }
            }
            if(!idCheck)
            {
                newCharacters.push(characters[roll]);
            }
        }
        for(let w=0;w<newCharacters.length;w++)
        {
            for(let x=0;x<characters.length;x++)
            {
               if(characters[x].name == newCharacters[w].name && characters[x]._id != newCharacters[w]._id && newCharacters[w].disambiguation != "")
                  newCharacters[w].name = newCharacters[w].name + " (" + newCharacters[w].disambiguation + ")";
            }
        }    
        return newCharacters;
    }
    sendTeams(num)
    {
        let teams = this.state.teams;
        let newTeams = [];
        while(newTeams.length < num)
        {
            let roll = Math.floor(Math.random()*teams.length);
            if(newTeams.indexOf(teams[roll]) == -1)
                newTeams.push(teams[roll]);
        }
        return newTeams;
    }
    render()
    {
        return(
            <div id="whole-app">
              <div className="text-center container-fluid"> 
                  <h1 className="white-text">MARVEL Event Generator!</h1>
                  <div className="text-center container-fluid app">
                  
                          <div className="text-center off-top container-fluid">

                          </div>
                          
                          <div>
                                {this.state.characters.length > 0 ?
                                <EventView newCharacters={this.sendCharacters}
                                           newTeams={this.sendTeams}/>
                                : ""}
                          </div>
                  
                  </div>

              </div>
            </div>
        );
    }
}

class EventView extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            view: 0    
        };
    }
    componentWillMount()
    {
        this.setState({view: Math.floor(Math.random()*5)});
    }
    render()
    {
        return(
             <div className="event-avx">
                  <div id="words" className="inside-event middle-text">
                        <YvZ newCharacters={this.props.newCharacters} 
                                 newTeams={this.props.newTeams} />

                </div>        
            </div>
            
        );
    }
}

class Buttons extends React.Component
{
  render()
  {
    return(
         <div className="buttons">
                <button className="btn btn-red" onClick={this.props.shuffle}>Again!</button>
                <button className="btn btn-red"><i className="fa fa-facebook" /></button>
         </div>
         );
  }         
};

class YvZ extends React.Component
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