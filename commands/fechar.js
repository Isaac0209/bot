const sourcebin = require('sourcebin_js');
const { MessageEmbed } = require('discord.js');
const execute = async (client, message, args) => {
    if(message.channel.name.includes('suporte-')) {
        const member = message.guild.members.cache.get(message.channel.name.split('suporte-').join(''));
        if(message.member.hasPermission('ADMINISTRATOR') || message.channel.name === `suporte-${message.author.id}`) {
            message.channel.messages.fetch().then(async (messages) => {
                const output = messages.array().reverse().map(m => `${new Date(m.createdAt).toLocaleString('en-US')} - ${m.author.tag}: ${m.attachments.size > 0 ? m.attachments.first().proxyURL : m.content}`).join('\n');

                let response;
                try {
                    response = await sourcebin.create([
                        {
                            name: ' ',
                            content: output,
                            languageId: 'text',
                        },
                    ], {
                        title: `Copia do chat ${message.channel.name}`,
                        description: ' ',
                    });
                }
                catch(e) {
                    return message.channel.send('Ocorreu um erro,tente novamente!');
                }

                const embed = new MessageEmbed()
                    .setDescription(`[\`📄 View\`](${response.url})`)
                    .setColor('GREEN');
                member.send('Aqui está uma copía do seu suporte, clique no link abaixo para ver a copía,Guarde essa copía,caso houver abuso de autoridade vá ate o forum e denuncie e poste o link dessa copía', embed);
            }).then(() => {
                try {
                    message.channel.updateOverwrite(member.user, {
                        VIEW_CHANNEL: false,
                        SEND_MESSAGES: false,
                        ATTACH_FILES: false,
                        READ_MESSAGE_HISTORY: false,
                    }).then(() => {
                        message.channel.send(`Obrigado,Espero que o seu problema foi resolvido!${message.channel}`);
                    });
                }
                catch(e) {
                    return message.channel.send('Ocorreu um erro,tente novamente!');
                }
            });
        }
    }
    else {
        return message.reply('você não pode usar este comando aqui. Use este comando quando estiver fechando um suporte.');
    }


};
module.exports = {
    name:"fechar",
    execute,
}