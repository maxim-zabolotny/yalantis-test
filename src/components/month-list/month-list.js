import React from "react";
import {connect} from "react-redux";
import MonthItem from "./month-item";

const MonthList = ({months}) => {
    return (
        <ul>
            {months.map(month => {
               return <MonthItem month={month} key={month.number} />
            })}
        </ul>
    )
}
const mapStateToProps = (state) => ({
    months: state.months
})

export default connect(mapStateToProps, null)(MonthList)
