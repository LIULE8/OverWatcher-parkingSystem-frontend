import {connect} from 'react-redux'
import Employees from "../components/Employees";
import EmployeesApi from "../apis/UsersApi"


const mapStateToProps = (state, ownProps) => {
    return {
        Employees: state.users
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        selectedEmployeeByValue: (value, selected) => {
            EmployeesApi.findEmployeesByConditions(value, selected, dispatch);
        },
        frozenOrUnfrozen: (userId, aliveStatus, finish) => {
            EmployeesApi.frozenOrUnfrozen(userId, aliveStatus, finish, dispatch)
        },
        confirm: (userId, user, finish) => {
            EmployeesApi.editEmploy(userId, user, finish, dispatch)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees)