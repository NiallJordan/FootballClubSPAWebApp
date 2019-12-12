import React, { Fragment } from "react";
import { capitalize } from "../../../util";
import "../../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./clubPublic.css";
import { Link } from "react-router-dom";
import ClubProfile from "../clubPublic/clubPublic"

export default ({ club }) => {
  const name = capitalize(`${club.name}`);
  return (
    <Fragment>
      <div className="row">
      <div className="col-2">
        <Link to="/">
          <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} size="3x" />
          <span>Returns</span>
        </Link>
        </div>
        <div className="col-3 offset-2">
          <h2>{name}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <img src={club.logo} className="club" alt={name} />
        </div>
        <div className="col-4">
          <ClubProfile club={club} />
        </div>
        <div className="col-5 bg-secondary text-light">
           <span>Map placeholder</span>
        </div>
      </div>
    </Fragment>
  );
};