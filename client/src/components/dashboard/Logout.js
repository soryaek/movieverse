import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import Dashboard from './Dashboard'

class Logout extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       showComponent: false,
    //     };
    //     this._onButtonClick = this._onButtonClick.bind(this);
    //   }

    //   _onButtonClick() {
    //     this.setState({
    //       showComponent: true,
    //     });
    //   }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };


    //   render() {
    //     return (
    //       <div>
    //         <Button onClick={this._onButtonClick}>Button</Button>
    //         {this.state.showComponent ?
    //            <NewComponent /> :
    //            null
    //         }
    //       </div>
    //     );
    //   }   
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
                        {/* <div> */}
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
                                // onClick={this._onButtonClick}
                                className="btn btn-small waves-effect waves-light hoverable blue accent-3"
                            >
                                Back to homepage
                        {/* {this.state.showComponent ? <Dashboard /> : null} */}
                            </button>
                        </Link>
                        {/* </div> */}

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

                {/* <div className="container-btn">
                    <div className="center-btn">
                        <Link to="/dashboard">
                            <button className="btn-btn" onClick={this._onButtonClick}>
                                <svg className="home-logout" width="180px" height="60px" viewBox="0 0 180 60" className="border">
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                                </svg>
                                <span>Back to homepage</span>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="container-btn2">
                    <div className="center-btn">
                        <Link to="/dashboard">
                            <button className="btn-btn" onClick={this.onLogoutClick}>
                                <svg className="home-logout" width="180px" height="60px" viewBox="0 0 180 60" className="border">
                                    <polyline points="179,1 179,1 1,59 1,1 179,1" className="bg-line" />
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                                </svg>
                                <span>Logout</span>
                            </button>
                        </Link>
                    </div>
                </div> */}

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


// export const Logout = () => {
//     return (
//         <div className="center mt-5">
//             <h4>Are you sure you want to logout?</h4>
//             <button>YES</button> 
//             <button> NO</button>
//         </div>
//     )
// }

