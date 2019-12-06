import React, {Component, Fragment} from "react";
import "./club.css";
import "../../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import buttons from "../../../config/buttonsConfig";
import api from '../../../dataStore/stubAPI'

class Club extends Component{
    state = {
        status: "",
        placeInLeague: this.props.club.placeInLeague,
        previousDetails: {
          placeInLeague: this.props.club.placeInLeague
        }
      };

    //-----------------HANDLERS----------------------
    handleEdit = () => this.setState({status:"edit"});
    handleCancel = () => {
        let {placeInLeague} = this.state.previousDetails;
        this.setState({ status:"", placeInLeague});
    };
    handlePlaceInLeagueChange = e => this.setState({placeInLeague: e.target.value});
    handleSave = e => {
        e.preventDefault();
        let updatedPlaceInLeague = this.state.email.trim();
        if(!updatedPlaceInLeague){
            return;
        }
        let {placeInLeague} =this.state;
        this.setState({status: "", previousDetails:{placeInLeague}});
        api.update(this.state.previousDetails.placeInLeague,updatedPlaceInLeague);
    };


    shouldComponentUpdate(nextProps, nextState){
        console.log(`shouldComponentUpdate of Club (${this.props.club.name})`)
        return false;
    }

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
        }
        console.log(`render of Club (${this.props.club.name})`)
        return (
        <div className="col-sm-3">
            <div className={`card ${cardColor} `}>
            <img className="card-img-tag center " alt={this.props.club.name} src={this.props.club.picture.logo} />
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
                    </Fragment>
                    ):(
                    <Fragment>
                        <p key="placeInLeague">
                            <FontAwesomeIcon icon={["fas", "medal"]} />
                            <span> {this.props.club.placeInLeague}</span>
                        </p>
                    </Fragment>
                    )}
                    </div>
                    <div className="card-footer">
                        <div className="btn-group d-flex btn-group-justified" role="group" aria-label="...">
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