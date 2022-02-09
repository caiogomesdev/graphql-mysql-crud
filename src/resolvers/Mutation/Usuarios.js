const usuario = require("../../models/Usuario")
const UserModel = require("../../models/Usuario")
module.exports = {
    createUser: async (_, {nome, email})=>{
        const user = await UserModel.create({
            nome,
            email
        })
        return user
    },
    updateUser: async (_,{id, data})=>{
        const user = await usuario.findByPk(id)
        user.set({...data})
        return await user.save();
    },
    deleteUser: async ( _, {id})=>{
        const user = await usuario.findByPk(id)
        return await user.destroy()
    }
}