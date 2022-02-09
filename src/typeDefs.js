const {loadSchemaSync} = require("@graphql-tools/load")
const {GraphQLFileLoader} = require("@graphql-tools/graphql-file-loader")

const {resolve} = require("path")


module.exports = loadSchemaSync(resolve(__dirname, "schema", "index.graphql"), 
{
    loaders: [new GraphQLFileLoader()]
})