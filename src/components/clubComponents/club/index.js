import React, {Component, Fragment} from "react";
import "./club.css";
import "../../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import buttons from "../../../config/buttonsConfig";
import { Link } from "react-router-dom";
//import api from '../../../dataStore/stubAPI'
import * as api from '../../../api';

class Club extends Component{
    state = {
        status: "",
        name:this.props.club.name,
        logo:this.props.club.logo,
        league:this.props.club.league,
        placeInLeague:this.props.club.placeInLeague,
        phone: this.props.club.phone,
        city: this.props.club.city,
        country: this.props.club.country,
        stadium_name: this.props.club.stadium_name,
        capacity: this.props.club.capacity,
        numberOfPlayers: this.props.club.numberOfPlayers,
        yearEstablished: this.props.club.yearEstablished,
        manager_name: this.props.club.manager_name,
        titlesWon: this.props.club.titlesWon,


        previousDetails: {
            name:this.props.club.name,
            logo:this.props.club.logo,
            league:this.props.club.league,
            placeInLeague:this.props.club.placeInLeague,
            phone: this.props.club.phone,
            city: this.props.club.city,
            country: this.props.club.country,
            stadium_name: this.props.club.stadium_name,
            capacity: this.props.club.capacity,
            numberOfPlayers: this.props.club.numberOfPlayers,
            yearEstablished: this.props.club.yearEstablished,
            manager_name: this.props.club.manager_name,
            titlesWon: this.props.club.titlesWon
        }
      };

    //-----------------HANDLERS----------------------
    handleEdit = () => this.setState({status:"edit"});
    handleCancel = () => {
        let {name,logo,league,placeInLeague,phone, city, country, stadium_name, capacity, numberOfPlayers,yearEstablished,manager_name,titlesWon} = this.state.previousDetails;
        this.setState({ status:"", name,logo,league,placeInLeague,phone, city, country, stadium_name, capacity, numberOfPlayers,yearEstablished,manager_name,titlesWon});
    };

    handleNameChange = e => this.setState({name: e.target.value});
    handleLogoChange = e => this.setState({logo: e.target.value});
    handleLeagueChange = e => this.setState({league: e.target.value});
    handlePhoneChange = e => this.setState({phone: e.target.value});
    handlePlaceInLeagueChange = e => this.setState({placeInLeague: e.target.value});
    handleCityChange = e => this.setState({city: e.target.value});
    handleCountryChange = e => this.getSnapshotBeforeUpdate({country: e.target.value});
    handleStadiumNameChange = e => this.setState({stadium_name: e.target.value});
    handleCapacityChange = e => this.setState({capacity: e.target.value});
    handleNumberOfPlayersChange = e => this.setState({numberOfPlayers: e.target.value});
    handleYearEstablishedChange = e => this.setState({yearEstablished: e.target.value});
    handleManagerNameChange = e => this.setState({manager_name: e.target.value});
    handleTitlesWonChange = e => this.setState({titlesWon: e.target.value});


    handleSave = e => {
        e.preventDefault();
        let updatedPlaceInLeague = this.state.placeInLeague.trim();
        let updatedPhone = this.state.phone.trim();

        let updatedName = this.state.name.trim();
        let updatedLogo = this.state.logo.trim();
        let updatedLeague = this.state.league.trim();
        let updatedCity = this.state.city.trim();
        let updatedCountry = this.state.country.trim();
        let updatedStadiumName = this.state.stadium_name.trim();
        let updatedCapacity = this.state.capacity.trim();
        let updatedNumberOfPlayers = this.state.numberOfPlayers.trim();
        let updatedYearEstablished = this.state.yearEstablished.trim();
        let updatedManagerName = this.state.manager_name.trim();
        let updatedTitlesWon = this.state.titlesWon.trim();

        if(!updatedPlaceInLeague || !updatedPhone || !updatedName || !updatedLogo  || !updatedLeague || !updatedCity || !updatedCountry || !updatedStadiumName || !updatedCapacity || !updatedNumberOfPlayers || !updatedYearEstablished || !updatedManagerName|| !updatedTitlesWon){
            return;
        }
        let {name,logo,league,placeInLeague,phone, city,country,stadium_name,capacity,numberOfPlayers,yearEstablished,manager_name,titlesWon} = this.state;
        this.setState({status: "", previousDetails:{name,logo,league,placeInLeague,phone, city,country,stadium_name,capacity,numberOfPlayers,yearEstablished,manager_name,titlesWon}});
        api.update(this.state.previousDetails.phone,updatedName,updatedLogo,updatedLeague,updatedPlaceInLeague, updatedPhone,updatedCity ,updatedCountry,updatedStadiumName,updatedCapacity, updatedNumberOfPlayers, updatedYearEstablished, updatedManagerName, updatedTitlesWon);
    };

    handleDelete = () =>  this.setState({ status : 'del'} );
    handleConfirm = (e) => {
        e.preventDefault();
        this.props.deleteHandler(this.state.phone);
    };


    // shouldComponentUpdate(nextProps, nextState){
    //     console.log(`shouldComponentUpdate of Club (${this.props.club.name})`)
    //     return false;
    // }

    render(){
        let activeButtons = buttons.normal;
        let leftButtonHandler = this.handleEdit;
        let rightButtonHandler = this.handleDelete;
        let cardColor = "bg-white";
        if (this.state.status === "edit") {
            cardColor = "bg-primary";
            activeButtons = buttons.edit;
            leftButtonHandler = this.handleSave;
            rightButtonHandler = this.handleCancel;
        }else if(this.state.status === 'del'){
            cardColor = "bg-warning";
            activeButtons = buttons.delete;
            leftButtonHandler = this.handleCancel;
            rightButtonHandler = this.handleConfirm;
        }
        console.log(`render of Club (${this.props.club.name})`)
        return (
        <div className="col-sm-3 clubCard">
            <div className={`card ${cardColor} `}>
                <Link to={`/clubs/${this.props.club.phone}`}>
                    <img className="card-img-tag center " height="200px" alt={this.props.club.name} src={this.props.club.logo} />
                </Link>
            <div className="card-body">
                <h5 className="card-title ">
                    {`${this.props.club.name}`}
                </h5>
                <p key="league">
                    <span> {this.props.club.league} </span>
                </p>
                {this.state.status === "edit" ?(
                    <Fragment>
                        <p>
                            <input type="text" className="form-control" value={this.state.placeInLeague} onChange={this.handlePlaceInLeagueChange}/>
                        </p>
                         <p>
                            <input type="text" className="form-control" value={this.state.phone} onChange={this.handlePhoneChange}/>
                        </p>
                    </Fragment>
                    ):(
                    <Fragment>
                        <p key="placeInLeague">
                            <FontAwesomeIcon icon={["fas", "medal"]} />
                            <span> {this.props.club.placeInLeague}</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={["fas", "phone"]} />
                            <span> {this.props.club.phone} </span>
                        </p>
                    </Fragment>
                    )}
                    </div>
                    <div className="card-footer">
                        <div className="btn-group d-flex center" role="group" aria-label="...">
                        <button type="button" className={"btn w-100 " + activeButtons.leftButtonColor} onClick={leftButtonHandler}>
                            {activeButtons.leftButtonVal}
                        </button>
                        <button type="button" className={"btn w-100 " + activeButtons.rightButtonColor} onClick={rightButtonHandler}>
                            {activeButtons.rightButtonVal}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Club;