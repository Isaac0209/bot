const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

const execute = async (client,message,args) => {
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Você precisa de **BAN_MEMBERS** permissão!').then(m => m.delete({ timeout: 5000 }));

        if (!args[0]) return message.channel.send('Id do usuario!').then(m => m.delete({ timeout: 5000 }));

        let member;

        try {
            member = await client.users.fetch(args[0])
        } catch (e) {
            console.log(e)
            return message.channel.send('usuario invalido!').then(m => m.delete({ timeout: 5000 }));
        }

        const reason = args[1] ? args.slice(1).join(' ') : 'nenhuma razão';

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        message.guild.fetchBans().then( bans => {

            const user = bans.find(ban => ban.user.id === member.id );

            if (user) {
                embed.setTitle(`Sucesso Desbanido ${user.user.tag}`)
                    .setColor('#00ff00')
                    .addField('ID Usuario', user.user.id, true)
                    .addField('Tag Usuario', user.user.tag, true)
                    .addField('Razão do banimento', user.reason != null ? user.reason : 'Nenhuma razão')
                    .addField('Razão do desbanimento', reason)
                message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed))
            } else {
                embed.setTitle(`Usuario ${member.tag} Já Desbanido!`)
                    .setColor('#ff0000')
                message.channel.send(embed)
            }

        }).catch(e => {
            console.log(e)
            message.channel.send('Ocorreu um erro!')
        });

     

}

module.exports = {
    name: "desban",
    execute,
}