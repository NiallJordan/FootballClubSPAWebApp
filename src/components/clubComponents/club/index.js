import React, {Component, Fragment} from "react";
import "./club.css";
import "../../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import buttons from "../../../config/buttonsConfig";
import { Link } from "react-router-dom";
import api from '../../../dataStore/stubAPI'
//import * as api from '../../../api';

class Club extends Component{
    state = {
        status: "",
        phone: this.props.club.phone,
        placeInLeague: this.props.club.placeInLeague,
        previousDetails: {
            phone:this.props.club.phone,
            placeInLeague: this.props.club.placeInLeague
        }
      };

    //-----------------HANDLERS----------------------
    handleEdit = () => this.setState({status:"edit"});
    handleCancel = () => {
        let {placeInLeague,phone} = this.state.previousDetails;
        this.setState({ status:"", placeInLeague,phone});
    };
    handlePhoneChange = e => this.setState({phone: e.target.value});
    handlePlaceInLeagueChange = e => this.setState({placeInLeague: e.target.value});
    handleSave = e => {
        e.preventDefault();
        let updatedPlaceInLeague = this.state.placeInLeague.trim();
        let updatedPhone = this.state.phone.trim();

        if(!updatedPlaceInLeague || !updatedPhone){
            return;
        }
        let {placeInLeague,phone} = this.state;
        this.setState({status: "", previousDetails:{placeInLeague,phone}});
        api.update(this.state.previousDetails.phone,updatedPlaceInLeague,updatedPhone);
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