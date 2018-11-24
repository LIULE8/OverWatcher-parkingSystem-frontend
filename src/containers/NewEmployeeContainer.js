import {connect} from 'react-redux'
import NewEmployee from "../components/NewEmployee";
import usersApi from '../apis/UsersApi'

const mapStateToProps = (state, ownProps) =>{
    return {
        value: state[ownProps.index],
        newEmployees:state.newEmployees
    }
};

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        createEmployee:(values)=>{
            usersApi.addNewEmployee(values,dispatch)
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewEmployee)