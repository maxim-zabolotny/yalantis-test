import React, {useEffect, useState} from 'react'
import {showUsers} from "../../redux/actions/app-actions";
import {connect} from "react-redux";
import '../style.css'

const MonthItem = ({users, month, showUsers}) => {
    const colors = [
        { min: 0, max: 2, color: '#6c757d' },
        { min: 3, max: 6, color: '#0d6efd' },
        { min: 7, max: 10, color: '#4ab563' },
        { min: 11, max: Math.pow(10, 1000), color: '#dc3545' }
    ]
    const [monthUsersState ,setMonthUsersState] = useState([])
    const [monthColor, setMonthColor] = useState(null)

    const sortByMonth = () => {
        const usersInMonth = []
        users.map(user => {
            if (new Date(user.dob).getMonth() + 1 === month.number) {
                return usersInMonth.push(user)
            }
        })
        setMonthUsersState(usersInMonth)
        monthColorHandler(usersInMonth.length)
    }
    const monthColorHandler = (usersLength) => {
        colors.map(col => {
            if (usersLength >= col.min
                && usersLength <= col.max) {
                setMonthColor(col.color)
            }
        })
    }

    useEffect(() => {
       if (users) (sortByMonth());
    }, [users])
    return (
        <li
            className={'list-item'}
            style={monthColor? {backgroundColor: monthColor}: null}
            onMouseEnter={() => showUsers(monthUsersState)}
            onMouseLeave={() => showUsers(null)}
        >{month.name}</li>
    )
}

const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProps = (dispatch) => ({
    showUsers: (users) => dispatch(showUsers(users))
})


export default connect(mapStateToProps, mapDispatchToProps)(MonthItem)
