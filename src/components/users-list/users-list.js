import React from "react";
import {connect} from "react-redux";
import UsersItem from "./users-item";

const UsersList = ({showUsers}) => {

    return (
        <>
            {
                showUsers &&
                <ul className={''}>
                    {showUsers.map((user) => (
                        <UsersItem user={user} key={user.id}/>
                    ))}
                </ul>
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return ({
        showUsers: state.showUsers
    })
}

export default connect(mapStateToProps, null)(UsersList)
