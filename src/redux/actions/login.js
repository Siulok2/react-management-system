import {SAVE_USERINFO} from '../action_types'

export const createSaveUserAction = (personObj) => ({type:SAVE_USERINFO,data:personObj})