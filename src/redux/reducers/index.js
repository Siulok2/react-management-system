import loginReducer from './login'

//用来合并reducer
import {combineReducers} from 'redux'

export default combineReducers({
    userInfo:loginReducer
})