import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";

class Logout extends Component {

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

                        <h4><b>Hi</b> {user.name.split(" ")[0]}!</h4>
                        <br />
                        <br />
                        <h4>Are you sure you want to log out?</h4>

                        <Link to="/dashboard">
                            <button
                                style={{
                                    width: "170px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem",
                                    backgroundColor: "white",
                                    height: "50px"
                                }}

                                className="btn btn-small waves-effect waves-light hoverable blue accent-3"
                            >
                                Back to homepage

                            </button>
                        </Link>
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
                            Log out
                        </button>


                    </div>
                </div>

            </div>
        );
    }
}

Logout.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Logout);


