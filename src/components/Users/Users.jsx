import React from  'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, followingInProgress, unfollow, follow, ...props}) => {
    return (<div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize} />
        <div>
            {users.map(u => <User key= {u.id} user={u} followingInProgress={followingInProgress} unfollow={unfollow} follow={follow} />
            )}
        </div>
    </div>)
}

export default Users;