import React from 'react';
import io from 'socket.io-client';
const socket=io();
import EventView from './EventView.js';

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



