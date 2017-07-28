import React from 'react';
import AoA from './events/AoA.js';
import YvZ from './events/YvZ.js';

export default class EventView extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            view: -1,
            ticks: 0,
            eventClass: "",
            events: ["YvZ","AoA"]
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
        this.setState({eventClass: eventClass});    
    }
    shuffle()
    {
        let roll = Math.floor(Math.random()*this.state.events.length);
        //console.log("new roll: " + roll);
        let eventClass = "event-avx";
        if(roll==1)
            eventClass = "event-aoa";
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
                      : <AoA newCharacters={this.props.newCharacters} 
                             newTeams={this.props.newTeams} 
                             tick={this.state.ticks}
                             shuffle={this.shuffle}/>         
                      }         

                </div>        
            </div>
            
        );
    }
}