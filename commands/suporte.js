const execute = async (client, message, args, prefix) => {
    if(message.guild.channels.cache.find(channel => channel.name === `suporte-${message.author.id}`)) {
        return message.reply('você já tem um suporte aberto, feche o suporte existente antes de abrir um novo!');
    }

    message.guild.channels.create(`suporte-${message.author.id}`, {
        permissionOverwrites: [
            {
                id: message.author.id,
                allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
            },
            {
                id: message.guild.roles.everyone,
                deny: ['VIEW_CHANNEL'],
            },
        ],
        type: 'text',
    }).then(async channel => {
        message.reply(`Sala de suporte criada! Clique no link ${channel} Para ver a sala de suporte.`);
        channel.send(`Olá ${message.author}, Tenham calma alguem víra atender-lo,Caso quiser fechar o suporte\`*fechar\``);
        let logchannel = message.guild.channels.cache.find(channel => channel.name === `ticket-logs`)
        if(logchannel) {
            logchannel.send(`suporte ${message.author.id} criado. Clique aqui para ver <#${channel.id}>`);
        }
    });



}
module.exports = {
    name: "suporte",
    help: "Precisa de ajuda? Digite *suporte e espere um adm te responder!",
    execute,
}