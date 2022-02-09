const usuarios = require("../../models/Usuario")
module.exports = {
    users: async ()=>{
        const users = await usuarios.findAll()
        return users
    },
    user: async (_, {id})=>{
        const user = await usuarios.findByPk(id)
        return user
    }
}