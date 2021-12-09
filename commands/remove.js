const execute = async(client, message, args, prefix) => {
    if(message.channel.name.includes('suporte-')) {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(' ') || x.user.username === args[0]);
        if(!member) {
            return message.channel.send(`Forma Incorreta! Forma Certa:${prefix}Remover <member>`);
        }
        try{
            message.channel.updateOverwrite(member.user, {
                VIEW_CHANNEL: false,
                SEND_MESSAGES: false,
                ATTACH_FILES: false,
                READ_MESSAGE_HISTORY: false,
            }).then(() => {
                message.channel.send(`Removido com sucesso ${member} De ${message.channel}`);
            });
        }
        catch(e) {
            return message.channel.send('erro! tente novamente');
        }
    }
}
module.exports = {
    name: "remover",
    execute,
    userperms: ['ADMINISTRATOR'],
}