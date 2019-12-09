import React, { Component } from "react";
import Club from "../club";
import './clubList.css';

export default class ClubList extends Component {
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log('shouldComponentUpdate of ClubsList')
    //     if(this.props.clubs.length === nextProps.clubs.length){
    //         return false;
    //     }else{
    //         return true;
    //     }
    // }

    render() {
        console.log('render of filterClubList')
        const clubCards = this.props.clubs.map(c => (
          <Club key={c.phone} club={c} deleteHandler={this.props.deleteHandler} />
        ));
        return (
        <div className="container-fluid clubs bg-info">
            <div className="row">{clubCards}</div>
        </div>
        );
    }
}