import React from 'react';

export default class CharEdit extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      toon: undefined,
      error: [],
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  componentWillUpdate(prevProps)
  {
      if(this.state.toon.name != prevProps.toon.name)
        this.setState({toon: this.props.toon});
  }
  componentWillMount()
  {
      this.setState({toon: this.props.toon});
  }
  submit()
  {
    console.log("Checking to submit");
    var errs = [];
    if(this.props.toon.disambiguation!="" && this.state.toon.disambiguation.length<1)
      errs.push("Character must have a disambiguation.");
    var teams = this.state.toon.teams.toUpperCase();
    var theCheck = teams.includes("THE ");
    if(theCheck==true)
      errs.push("Team names cannot contain 'The'.");
    var isHero = this.state.toon.isHero.toUpperCase();
    console.log("Is hero uppercase: " + isHero);
    if(isHero!= "TRUE" && isHero!="FALSE")
      errs.push("Hero must be 'true' or 'false'.");
    var letter = this.state.toon.list.toUpperCase();
    console.log("Is list uppercase: " + letter);
    if(letter!="A" &&  letter!="B" && letter !="C" && letter!="D" && letter!="Z" && letter.length>0)
      errs.push("List must be A, B, C, D, Z");
    console.log(this.state.toon);
    if(errs.length>0)
      this.setState({error: errs});
    else
    {
      var sendToon = {
        _id: this.state.toon._id,
        name: this.state.toon.name,
        isHero: isHero.toLowerCase(),
        list: letter,
        disambiguation: this.state.toon.disambiguation,
        teams: this.state.toon.teams.split(",")
      };
      console.log("Looks good to me!");
      this.props.socket.emit("update one",{character: sendToon});
      this.props.nextOne();
    }
  }
  handleChange(e)
  {
    var newToon = this.state.toon;
    var field = e.target.name;
    newToon[field] = e.target.value;
    this.setState({toon: newToon});
  }
  render()
  {
    return(       
       <div className="text-center middle-text container-fluid log-in-panel">
        {this.state.submitted ? "" : <button className="submit-button btn btn-inverse x-btn">X</button>}
         
         {this.state.submitted ? <div className="search-for name-plate">
           <h4>{this.state.toon.name} {this.props.isNew ? "Added" : "Updated"}!</h4>
         </div>
         :<div className="search-for name-plate">
         <h4>{this.props.isNew ? "Adding" : "Editing"} {this.props.toon.name}</h4>
         
            <div className="text-center container-fluid">

            <div className="row">           
            <div className="col-xs-2">Alias:</div>
            <div className="col-xs-10"><input placeholder={this.props.toon.disambiguation==""? "Disambiguation" : this.props.toon.disambiguation} 
                                   value={this.state.toon.disambiguation}
                                   name="disambiguation"
                                   onChange={this.handleChange}
                                   /></div></div>
                                   
                                   
            <div className="row">           
            <div className="col-xs-2">Teams:</div>
            <div className="col-xs-10"><input placeholder="Teams, Separated, By, Comma" 
                                   value={this.state.toon.teams}
                                   name="teams"
                                   onChange={this.handleChange}
                                   /></div></div>
                       
            <div className="row">           
            <div className="col-xs-2">Hero:</div>
            <div className="col-xs-10"><input placeholder="Is Hero (True of False)"
                                   value={this.state.toon.isHero}
                                   name="isHero" 
                                   onChange={this.handleChange}
                                   /></div></div>
                                   
            <div className="row">                                
            <div className="col-xs-2">List:</div>
            <div className="col-xs-10"><input placeholder="List (A, B, C, D, or Z)"
                                   value={this.state.toon.list}
                                   name="list" 
                                   onChange={this.handleChange}
                                   /></div></div>
                       
           </div>             
           
           <div className="result error">
              {this.state.error.map( (d,i) => <div>{d}</div> )}
           </div>
           {/*    */}
         </div>}
         
         <div>
          <button className="submit-button btn btn-inverse"
                onClick={this.submit}
           >Next</button>
         </div>
         
       </div>
       );
  }
}