const execute = async(client, message, args) => {
    client.guilds.cache.get("706258320297558079").roles.cache.get("826220450555494450").members.forEach((membro) => {
        membro.user.send(`Olá, não esqueça de se registrar no discord do servidor para ter acesso a todas as áreas.`)
        message.channel.send(`Membros avisados${membro}`);
        
    })

    
   
}
module.exports = {
    name: "daraviso",
    execute,
}