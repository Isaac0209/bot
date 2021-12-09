const execute = async (client,message,args,prefix) => {
    if(message.channel.name.includes('suporte-')) {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(' ') || x.user.username === args[0]);
        if(!member) {
            return message.channel.send(`Forma Incorreta! Forma Correta:${prefix}add <member>`);
        }
        try{
            message.channel.updateOverwrite(member.user, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true,
                ATTACH_FILES: true,
                READ_MESSAGE_HISTORY: true,
            }).then(() => {
                message.channel.send(`Adicionado ${member} com sucesso! No suporte ${message.channel}`);
            });
        }
        catch(e) {
            return message.channel.send('Ocorreu um erro!,tente novamente!');
        }
    }
};
module.exports = {
name: "add",
execute,
}