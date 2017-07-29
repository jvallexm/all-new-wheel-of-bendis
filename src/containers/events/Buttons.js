import React from 'react';

export default class Buttons extends React.Component
{
  render()
  {
    return(
         <div className="buttons">
                <button className="btn btn-red" onClick={this.props.shuffle}>Again!</button>
         </div>
         );
  }         
};