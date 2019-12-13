import React, { Component, Fragment } from "react";
import { Redirect } from 'react-router-dom';
import Header from "./components/header";
import ClubList from "./components/clubComponents/clubList";
import FilterControls from "./components/filterControls";
import 'bootstrap/dist/css/bootstrap.css';
//import api from './dataStore/stubAPI';
import * as api from './api';
import _ from 'lodash';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { search:"",league:"all", clubs:[{}], login:false};
  }

  async componentDidMount(){
    this._isMounted= true
    try{
      const resp = await api.getAll();
      console.log(resp);
      if(this._isMounted){
        this.setState({
          clubs: resp,
          login:false,
        });
      }
     } catch (e){
       if(this._isMounted)this.setState({
         login:true
       });
    }
  };

  handleChange = (type,value)=>{
    type === "name"
    ? this.setState({search : value})
    : this.setState({ league : value});
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
    const {login} = this.state;
    return (
    <Fragment>
        <Header noClubs={sortedClubs.length} />
        <FilterControls onUserInput={this.handleChange}/>
        <div className="row">
          <div className="col-md-12">
          <ClubList clubs={sortedClubs} deleteHandler={this.deleteClub}/>
          </div>
        </div>
        {login && (<Redirect to='/login'/>)}
      </Fragment>
    );
  }
}

export default App;