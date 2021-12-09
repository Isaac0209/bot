const Discord = require("discord.js");

const execute = async(client,message,args) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('| So Admins Podem Registra!');
    const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  message.channel.send(sayMessage);

}
module.exports = {
    name: "avisar",
    execute,
}