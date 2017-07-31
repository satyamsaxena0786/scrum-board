import { SET_CURRENT_USER } from './../constants' ;
import isEmpty from 'lodash/isEmpty' ;

const initialState = {
    isAuthenticated: false, 
    currentUser: {}
}

export default (state = initialState, action={}) => {
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            }
        default: return state;
    }
}