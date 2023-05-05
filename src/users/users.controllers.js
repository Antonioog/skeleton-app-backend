const Users = require('../models/users.models')
const uuid = require('uuid')
const hashPassword = require('../utils/crypto')

const createNewUser = async (userObj) => {
    const newUser = {
        id: uuid.v4(),
        firstName: userObj.firstName,
        lastName: userObj.lastName,
        email: userObj.email,
        password: hashPassword(userObj.password),
        birthday: userObj.birthday,
        phone: userObj.phone
    }
    const data = await Users.create(newUser)
    return data

}
