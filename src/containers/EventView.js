import React from 'react';
import AoA from './events/AoA.js';
import YvZ from './events/YvZ.js';
import Maximum from './events/Maximum.js';
import Secret from './events/Secret.js';
import Ig from './events/Ig.js';
import Civil from './events/Civil.js';


export default class EventView extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            view: -1,
            ticks: 0,
            eventClass: "",
            events: ["YvZ","AoA","Max","MSSW","Ig","Cw"]
        };
        this.shuffle = this.shuffle.bind(this);
    }
    componentWillMount()
    {
        this.shuffle();
    }
    componentDidMount()
    {
        let eventClass = "event-avx";
        if(this.state.view==1)
            eventClass = "event-aoa";
        if(this.state.view==2)
            eventClass = "event-maximum";
        if(this.state.view==3)
            eventClass = "event-secret-wars";
        if(this.state.view==4)
            eventClass = "event-ig";
        if(this.state.view==5)
            eventClass = "event-civil-war";    
        this.setState({eventClass: eventClass});    
    }
    shuffle()
    {
        let roll = Math.floor(Math.random()*this.state.events.length);
        //console.log("new roll: " + roll);
        let eventClass = "event-avx";
        if(roll==1)
            eventClass = "event-aoa";
        if(roll==2)
            eventClass = "event-maximum" 
        if(roll==3)
            eventClass = "event-secret-wars";
        if(roll==4)
            eventClass = "event-ig";
        if(roll==5)
            eventClass = "event-civil-war";
        this.setState({view: roll, eventClass: eventClass, ticks: this.state.ticks + 1});
    }
    render()
    {
        return(
             <div className={this.state.eventClass}>
                  <div id="words" className="inside-event middle-text">
                      {
                        this.state.view == 0    
                      ? <YvZ newCharacters={this.props.newCharacters} 
                             newTeams={this.props.newTeams} 
                             tick={this.state.ticks}
                             shuffle={this.shuffle}/>     
                      :this.state.view == 1 
                      ? <AoA newCharacters={this.props.newCharacters} 
                             newTeams={this.props.newTeams} 
                             tick={this.state.ticks}
                             shuffle={this.shuffle}/>         
                      :this.state.view==2
                      ? <Maximum newCharacters={this.props.newCharacters} 
                             newTeams={this.props.newTeams} 
                             tick={this.state.ticks}
                             shuffle={this.shuffle} />  
                      :this.state.view==3
                      ? <Secret newCharacters={this.props.newCharacters} 
                             newTeams={this.props.newTeams} 
                             tick={this.state.ticks}
                             shuffle={this.shuffle} />     
                      :this.state.view==4
                      ? <Ig newCharacters={this.props.newCharacters} 
                             newTeams={this.props.newTeams} 
                             tick={this.state.ticks}
                             shuffle={this.shuffle} />
                      : <Civil newCharacters={this.props.newCharacters} 
                             newTeams={this.props.newTeams} 
                             tick={this.state.ticks}
                             shuffle={this.shuffle} />                
                      }         

                </div>        
            </div>
            
        );
    }
}