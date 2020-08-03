import React from "react";
import '../style.css'

const UsersItem = ({user, key}) => {
    return (
        <li key={key} className={'list_item'}>
            {`${user.firstName} ${user.lastName }`}
        </li>
    )
}

export default UsersItem
