import React from "react";
import Paginator from "../common/paginator/Paginator";
import User from "./User";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, followingInProgress, follow, unfollow}) => {
    return <div>
        <Paginator
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            totalUsersCount={totalUsersCount}
            pageSize ={pageSize}/>
        {
            users.map(u => <User key={u.id}
                                 user={u}
                                 followingInProgress={followingInProgress}
                                 follow={follow}
                                 unfollow={unfollow}/>)
        }
    </div>

};

export default Users