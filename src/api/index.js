import myAxios from './myAxios'

export let reqLogin = ({username,password}) => myAxios.post('/login',{username,password})