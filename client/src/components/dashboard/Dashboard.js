import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
// import "./font-awesome/css/all.min.css";
import { TopRatedMovies } from "./TopRatedMovies";
import { NowPlaying } from "./NowPlaying";
import {Homepage} from "./Homepage";
import {Header} from "./Header"
import { withRouter } from "react-router";


class Dashboard extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <div className="row">
          <div className="landing-copy col s12 center-align">

            <h4>
              <b>Hi</b> {user.name.split(" ")[0]}!
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                backgroundColor: "white"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-small waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
            <Homepage /> 
          </div>
        </div> 
      
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
