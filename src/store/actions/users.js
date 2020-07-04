import * as actionsTypes from './actionsTypes'
import axios from 'axios'
import { ENDPOINT } from '../../utils/globals'

export const registerUser = ( namaDepan, namaBelakang,email, password ) => {
    return {
    type: actionsTypes.ADD_USER,
    payload: axios.post(`${ENDPOINT}users/register`, {
    'namaDepan': namaDepan,
    'namaBelakang': namaBelakang,
    'email': email,
    'password': password
    })
    }
    }
    export const loginUser = ( email, password ) => {
        return {
        type: actionsTypes.LOGIN_USER,
        payload: axios.post(`${ENDPOINT}users/login`, {
        'email': email,
        'password': password
        })
        }
        } 