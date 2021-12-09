const Discord = require("discord.js");
const client = new Discord.Client(); 

const execute = async (client, message, args,) => {
  
  var motivo = args.slice(1).join(" ");
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(' ') || x.user.username === args[0]);
  let mainRole = message.guild.roles.cache.find(role => role.id === "843153121693532162");
  
  var log = message.guild.channels.cache.find(ch => ch.id === "826605249825472543");
  
  if(!member) {
    return message.channel.send("Cade o usuario?");
   }
   
   if (!motivo) return message.channel.send(` Cade O Motivo?.`)
  let aguardando = "aguardando";
   
    member.roles.add(mainRole.id);
    message.channel.send(`O Usuário ${member} Acabou de ser punido pelo motivo **${motivo}** e foi silenciado! `)
    member.send(`Você Foi Punido Pelo Motivo **${motivo}** E você acabou sendo sileciando, Um Admin virá vim conversar com você aguarde!`);
    const msg = await log.send(
      
      new Discord.MessageEmbed()
    .setColor("#FFFFF1")
    .setTitle(`Usuario ${member} Foi Silenciado Por ${message.author.username}`)
    .addField("Motivo:", motivo)
    .addField("**Status**", aguardando )
    
   
    .setTimestamp()

      
      
   
  );
  
 

 
   
}


module.exports = {
 name: "silenciar",
 
 execute,
}