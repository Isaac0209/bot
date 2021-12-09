const execute = async (client, message, args) => {
    if (message.channel.name.includes('suporte-')) {
        const member = message.guild.members.cache.get(message.channel.name.split('suporte-').join(''));
        try {
            message.channel.updateOverwrite(member.user, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true,
                ATTACH_FILES: true,
                READ_MESSAGE_HISTORY: true,
            })
                .then(() => {
                    message.channel.send(`Sucesso Re-aberto! ${message.channel}`);
                });
        }
        catch (e) {
            return message.channel.send('Ocorreu Um Erro! Tente Novamente');
        }
    }
    else {
        return message.reply(
            'você não pode usar este comando aqui. Use este comando em um suporte fechado.',
        );
    }

}
module.exports = {
    name: "open",
    execute,
}