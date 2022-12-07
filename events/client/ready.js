module.exports={
    name:"ready",
    once : true,
    async execute(client){
        console.log(`readyyy ${client.user.tag} is logged in and online`)
    }
}