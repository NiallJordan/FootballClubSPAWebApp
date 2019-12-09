import React, {Fragment} from "react";
import ClubPublic from "../clubPublic/clubPublic";
import * as api from "../../../api";
import ClubMoreInfo from "../clubMoreInfo/index";
import { withRouter, Route, Link } from "react-router-dom";
import "../../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ClubPage = props => {
  
  const { id } = props.match.params;
  const club = api.getClub(id);
   return (
    <Fragment>
       {club ? (
         <Fragment>
            <Link to="/">
            <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} size="3x" />
            <span>Back</span>
          </Link>
           <ClubPublic club = {club}/>
           {!props.history.location.pathname.endsWith("/moreInfo") && (<Link class="btn btn-primary active" to={`/clubs/${id}/moreInfo`}>See More Info</Link>
           )}
           <Route path={ `/clubs/:id/moreInfo`} render={(props) => <ClubMoreInfo {...props} club={club}/>}/>
        </Fragment>
       ):(
         <p>Waiting for club details</p>
       )}
    </Fragment>
  );
};

export default withRouter(ClubPage);