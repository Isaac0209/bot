const sourcebin = require('sourcebin_js');
const { MessageEmbed } = require('discord.js');


const execute = async (client, message, args) => {
    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel;
    if (channel.name.includes('suporte-')) {
        if (message.member.hasPermission('ADMINISTRATOR') || channel.name === `suporte-${message.author.id}`) {
            channel.messages.fetch().then(async (messages) => {
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
                        title: `Chatia cópia de ${channel.name}`,
                        description: ' ',
                    });
                }
                catch(e) {
                    return message.channel.send('Ocorreu um erro tente novamente!');
                }

                const embed = new MessageEmbed()
                    .setDescription(`[\`📄 View\`](${response.url})`)
                    .setColor('GREEN');
                message.reply('Uma cópia da nossa conversa lá', embed);
            });
        }
    }
    else {
        return message.reply(
            'você não pode usar este comando aqui. Por favor, use este comando em um suporte aberto.',
        );
    }
}
module.exports = {
    nome: "transcript",
    execute,
}