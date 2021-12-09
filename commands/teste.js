const Discord = require("discord.js");
const client = new Discord.Client(); 

const execute = async (client, message, args) => {
  
  let mainRole = message.guild.roles.cache.find(role => role.name === "「✦」Sem Registro");
  message.member.roles.add(mainRole.id);
  
}
module.exports = {
 name: "teste",
 
 execute,
}