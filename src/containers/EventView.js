import React from 'react';
import AoA from './events/AoA.js';
import YvZ from './events/YvZ.js';

export default class EventView extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            view: 0,
            ticks: 0,
            eventClass: "event-avx"
        };
        this.shuffle = this.shuffle.bind(this);
    }
    componentWillMount()
    {
        this.shuffle;
    }
    shuffle()
    {
        let roll = Math.floor(Math.random*5);
        let eventClass = 'event-avx';
        
        
        this.setState({view: roll, eventClass: eventClass});
    }
    render()
    {
        return(
             <div className={this.state.eventClass}>
                  <div id="words" className="inside-event middle-text">
                        <AoA newCharacters={this.props.newCharacters} 
                                 newTeams={this.props.newTeams} />

                </div>        
            </div>
            
        );
    }
}