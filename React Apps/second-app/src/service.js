import {user} from './model'

export function getFullName() {
    return user.fname + user.lname
}