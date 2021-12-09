const Discord = require("discord.js");

const execute = async (bot, msg, args) => {
  msg.delete();
const content = args.join(" ");
  
 
   
  
if (!args[0]) {
  return msg.channel.send(`${msg.author.username}, escreva a sugestão após o comando`)
} else if (content.length > 1000) {
  return msg.channel.send(`${msg.author.username}, forneça uma sugestão de no máximo 1000 caracteres.`);
} else {
 
  var canal = bot.channels.cache.get("855503638604414986");
 
  const msg = await canal.send(
   
    new Discord.MessageEmbed()
    .setColor("#FFFFF1")
    
    .addField("Ideia", content)
   
    .setTimestamp()
  );
  

  const emojis = ["✔️", "❎"];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
 
}
if(!msg.content.startsWith(process.env.PREFIX) || canal) {
 msg.reply("Ideia Enviada!")
  }
}
module.exports = {
    name: "ideia",
    help: "Quer mandar uma ideia? digite *ideia (ideia)",
    execute,
}
