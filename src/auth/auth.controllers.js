const {findUserByEmail} = require('../users/users.controllers')
const { comparePassword } = require('../utils/crypto')

const checkUserCredentials = async (email, password) => {
    //user : false
    const user = await findUserByEmail(email)

    const validatePassword = comparePassword(password, user.password)
    
    return validatePassword ? user : false

}

module.exports = checkUserCredentials
