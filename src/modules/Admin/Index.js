import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser } from './Actions';

class AdminPage extends Component {
    componentDidMount() {
        this.props.getUser();
    }
    render() {
        return (
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>First Name</th>
                        <th>last name</th>
                        <th>address</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.userData.data.length > 0 ?
                        this.props.userData.data.map(data => {
                            return (
                                <tr key={data.id}>
                                    <td>{data.name.firstname}</td>
                                    <td>{data.name.lastname}</td>
                                    <td>{data.address.city}</td>
                                    <td>{data.email}</td>
                                    <td>
                                        <Link className="btn btn-primary" to={`/user-detail/${data.id}`}>View Details</Link>
                                    </td>
                                </tr>
                            )
                        })
                        : null
                    }
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        userData: state.userDataState,
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {

    return bindActionCreators(
        {
            getUser
        }, dispatch);
}


const connectedAdminPage = connect(mapStateToProps, mapDispatchToProps)(AdminPage);
export { connectedAdminPage as AdminPage };