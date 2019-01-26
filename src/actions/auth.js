import { dispatch } from "rxjs/internal/observable/range";
import { USER_LOGGED_IN } from '../types'
import api from "../api";


// I make an api request then i get data and I dispatch redux action that you will change via reducers the redux store
export const login = (credentials) => () => api.user.login(credentials).then(user => dispatch(userLoggedIn(user)))



export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
})