import React, { Component } from 'react';
import './clubForm.css';

export default class Form extends Component {
  state={name:'',logo:'',league:'',placeInLeague:'',phone:'',city:'',country:'',stadium_name:'',capacity:'',numberOfPlayers:'',yearEstablished:'',manager_name:'',titlesWon:''};
  
  handleNameChange=(e) => this.setState({name: e.target.value});
  handleLogoChange=(e) => this.setState({logo: e.target.value});
  handleLeagueChange=(e) => this.setState({league: e.target.value});
  handlePlaceChange=(e) => this.setState({placeInLeague: e.target.value});
  handlePhoneChange=(e) => this.setState({phone: e.target.value});
  handleCityChange=(e) => this.setState({city: e.target.value});
  handleCountryChange=(e) => this.setState({country: e.target.value});
  handleStadiumChange=(e) => this.setState({stadium_name: e.target.value});
  handleCapacityChange=(e) => this.setState({capacity: e.target.value});
  handleNumOfPlayersChange=(e) => this.setState({numberOfPlayers: e.target.value});
  handleYearChange=(e) => this.setState({yearEstablished: e.target.value});
  handleManagerChanger=(e) => this.setState({manager_name: e.target.value});
  handleTitlesWonChange=(e) => this.setState({titlesWon: e.target.value});

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd( this.state.name, this.state.logo, this.state.league, this.state.placeInLeague, this.state.phone, this.state.city, this.state.country, this.state.stadium_name, this.state.capacity, this.state.numberOfPlayers, this.state.yearEstablished, this.state.manager_name, this.state.titlesWon)
    this.setState({
      name:'',
      logo:'',
      league:'',
      placeInLeague:0,
      phone:'',
      city:'',
      country:'',
      stadium_name:'',
      capacity:0,
      numberOfPlayers:0,
      yearEstablished:0,
      manager_name:'',
      titlesWon:0
    })
}


  loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
  };

    render() {
        return (
        <form  className="form bg-dark text-light">
            <h3>Add a Club</h3>
            <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="Name"
                value={this.state.name}
                onChange={this,this.handleNameChange}></input>
            </div>
            <div className="form-group">
                <input type="file" accept="image/*" id="file" onChange={this, this.handleLogoChange} name="image"
                  className="form-control"
                  placeholder="Logo"
                  value={this.state.logo}
                  ></input>
            </div>
            <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="League"
                value={this.state.league}
                onChange={this, this.handleLeagueChange}></input>
            </div>
            <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="Place In League"
                value={this.state.placeInLeague}
                onChange={this,this.handlePlaceChange}></input>
            </div>
            <div className="form-group">
                <input type="text"
                  className="form-control"
                placeholder="Phone"
                value={this.state.phone}
                onChange={this,this.handlePhoneChange}></input>
            </div>
            <div className="form-group">
                <input type="text"
                  className="form-control"
                placeholder="City"
                value={this.state.city}
                onChange={this,this.handleCityChange}
                ></input>
            </div>
            <div className="form-group">
                <input type="text"
                  className="form-control"
                placeholder="Country"
                value={this.state.country}
                onChange={this,this.handleCountryChange}></input>
            </div>
            <div className="form-group">
                <input type="text"
                  className="form-control"
                placeholder="Stadium Name"
                value={this.state.stadium_name}
                onChange={this,this.handleStadiumChange}></input>
            </div>
            <div className="form-group">
                <input type="text"
                  className="form-control"
                placeholder="Capacity"
                value={this.state.capacity}
                onChange={this,this.handleCapacityChange}></input>
            </div>
            <div className="form-group">
                <input type="text"
                  className="form-control"
                placeholder="Number of Players"
                value={this.state.numberOfPlayers}
                onChange={this,this.handleNumOfPlayersChange}></input>
            </div>
            <div className="form-group">
                <input type="text"
                  className="form-control"
                placeholder="Year Established"
                value={this.state.yearEstablished}
                onChange={this,this.handleYearChange}></input>
            </div>
            <div className="form-group">
                <input type="text"
                  className="form-control"
                placeholder="Manager Name"
                value={this.state.manager_name}
                onChange={this,this.handleManagerChanger}></input>
            </div>
            <div className="form-group">
                <input type="text"
                  className="form-control"
                placeholder="Titles Won"
                value={this.state.titlesWon}
                onChange={this,this.handleTitlesWonChange}></input>
            </div>
            <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Add</button>
        </form>
        );
    }
}