import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import * as Constants from '../../Routes';
import { getUserDetails } from './Actions';
import { bindActionCreators } from 'redux';

class UserDetails extends Component {
    componentDidMount() {
        const userId = this.props.match.params.id;
        this.props.getUserDetails(userId);
    }
    render() {
        return (
            <div className="card text-center" style={{ width: '400px' }}>
                <div className="card-body">
                    {this.props.singleUserData ?
                        <React.Fragment>
                            <h4 className="card-title">{this.props.singleUserData.name.firstname} {this.props.singleUserData.name.lastname}</h4>
                            <h6>{this.props.singleUserData.email}</h6>
                            <p className="card-text">{this.props.singleUserData.address.city}</p>
                        </React.Fragment>
                        : <h4>No data Found</h4>
                    }
                    <Link to={Constants.Admin} className="btn btn-primary">See Profiles</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        singleUserData: state.singleUserDataState.singleData,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    
    return bindActionCreators(
        {
            getUserDetails
        }, dispatch);
}

const connectedUserDetailsPage = connect(mapStateToProps, mapDispatchToProps)(UserDetails);
export { connectedUserDetailsPage as UserDetails };
