const Discord = require('discord.js');
const execute = (bot, msg, args) => { 


var list = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = msg.mentions.users.first() || bot.users.cache.get(args[0]);
if (!user) {
return msg.reply('lembre-se de mencionar um usuário válido para beijar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = msg.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Beijo')
        .setColor('#000000')
        .setDescription(`${msg.author} acaba de beijar ${user} Novo casal!`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Beijos Beijos Beijos')
        .setAuthor(msg.author.tag, avatar);
 msg.channel.send(embed);

}
module.exports = {
    name: "beijar",
    help: "Quer dar um beijo?",
    execute,
}