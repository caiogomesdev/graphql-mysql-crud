const UserModel = require("../../models/Usuario")
module.exports = {
    createUser: async (_, {nome, email})=>{
        const user = await UserModel.create({
            nome,
            email
        })
        return user
    }
}