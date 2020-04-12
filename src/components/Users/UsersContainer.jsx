import React from "react";
import * as axios from "axios";
import Users from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleFetchingAC,
    unFollowAC
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import preloader from "../../assets/images/preloader2.gif"
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(respounse => {
                this.props.setUsers(respounse.data.items);
                this.props.setTotalUsersCount(respounse.data.totalCount);
                this.props.toggleIsFetching(false);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(respounse => {
                this.props.setUsers(respounse.data.items);
                this.props.setTotalUsersCount(respounse.data.totalCount);
                this.props.toggleIsFetching(false);
            });
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   isFetching={this.props.isFetching}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleFetchingAC(isFetching))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);