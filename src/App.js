import React, { Component, Fragment } from "react";
import Header from "./components/header";
import ClubList from "./components/clubComponents/clubList";
import FilterControls from "./components/filterControls";
import ClubForm from "./components/clubComponents/clubForm";
import 'bootstrap/dist/css/bootstrap.css';

//import api from './dataStore/stubAPI';
import * as api from './api';
import _ from 'lodash';

class App extends Component {
  state = { search:"",league:"all", clubs:[{}]};

  componentDidMount(){
    api.getAll().then(resp => {
      this.setState({
        clubs: resp
      });
    }).catch(console.error);
  };

  handleChange = (type,value)=>{
    type === "name"
    ? this.setState({search : value})
    : this.setState({ league : value});
  };

  addClub = (name,logo,league,placeInLeague,phone,city,country,stadium_name,capacity,numberOfPlayers,yearEstablished,manager_name,titlesWon) => {
    api.add(name,logo,league,placeInLeague,phone,city,country,stadium_name,capacity,numberOfPlayers,yearEstablished,manager_name,titlesWon)
    .then(resp => {
      const newClub = {"id":resp.id,"name":name,"logo":logo,"league": league,"placeInLeague":placeInLeague,"phone":phone,"city":city,"country":country,"stadium_name":stadium_name,"capacity":capacity,"numberOfPlayers":numberOfPlayers,"yearEstablished":yearEstablished,"manager_name":manager_name, "titlesWon":titlesWon}
      this.setState({clubs: this.state.clubs.concat([newClub])});
    })
  };

  deleteClub  = (id) => {
    api.deleteClub(id).then(resp => {
      const club = {"id":resp.id};
      this.setState({clubs: this.state.clubs.splice([club])});
    })
  };

  render() {
    const clubs = _.sortBy(this.state.clubs, club => club.placeInLeague);
    let filteredClubs = clubs.filter( c => {
      const name = `${c.name}`;
      return name.toLowerCase().search(this.state.search.toLowerCase()) !== -1;
    });
    filteredClubs = this.state.league === "all" ? filteredClubs : filteredClubs.filter(c => c.league === this.state.league);
    let sortedClubs = _.sortBy(filteredClubs,c => c.placeInLeague);
    return (
    <Fragment>
        <Header noClubs={sortedClubs.length} />
        <FilterControls onUserInput={this.handleChange}/>
        <div className="row">
          <div className="col-md-3">
          <ClubForm handleAdd={this.addClub} />
          </div>
          <div className="col-md-9">
          <ClubList clubs={sortedClubs} deleteHandler={this.deleteClub}/>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;