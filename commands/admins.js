const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {
  const embed = new MessageEmbed()
  .setColor('#0000FF')
  .setAuthor('Lista administrativa ')
  .setTitle('Fórum')
  .setURL('https://discord.gg/P4bY4w9k')
  .setDescription('**Desenvolvedor/Fundador**\n [CMR]Pedro\n**Diretores**\nN/A\n**Administradores**\nN/A\n**Moderadores**\nN/A\n**Ajudantes**\nN/A\n**Trainee**\nN/A')
  .setImage('https://i.imgur.com/z6uYZnJ.jpg')

  .setTimestamp();
 
  msg.channel.send({ embed });
};

module.exports = {
  name: "admins",
  help: "Lista de admins",
  execute,
};