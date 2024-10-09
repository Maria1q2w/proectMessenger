import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setUsers, unfollow } from '../../redux/users-reduser';
import { toggleFollowingProgress, requestUsers }from '../../redux/users-reduser';
import Users from './Users';
import Preloader from '../common/Preloader';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getPageSize, getTotalUsersCount, getCurrentPage,  getFollowingInProgress, getIsFetching, getUsers } from '../../redux/users-selectors';


class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize, requestUsers } = this.props;
        requestUsers(currentPage, pageSize)
    }
    onPageChanged = (pageNumber) => {
        const {pageSize, requestUsers} = this.props;
        requestUsers(pageNumber, pageSize)
    }
    render() {
        return (<> 
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount= {this.props.totalUsersCount} 
        pageSize= {this.props.pageSize} 
        currentPage= {this.props.currentPage} 
        onPageChanged={this.onPageChanged} 
        users={this.props.users} 
        follow={this.props.follow} 
        unfollow={this.props.unfollow} 
        toggleFollowingProgress={this.props.toggleFollowingProgress} 
        followingInProgress={this.props.followingInProgress} /> 
    </>
    )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    withAuthRedirect,
    connect (mapStateToProps, {follow,
        unfollow,
        setUsers,
        setCurrentPage,
        toggleFollowingProgress,
        requestUsers}
))(UsersContainer)