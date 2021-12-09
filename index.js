const Discord = require("discord.js");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const logger = require("discordjs-logger");

dotenv.config();
const config = require("./config.json");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
bot.queues = new Map();
console.log(bot.commands);
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    bot.on(eventName, event.bind(null, bot));
    console.log(` ${files} Carregando..... `)
  });
});

const commandFiles = fs
  .readdirSync(path.join(__dirname, "/commands"))
  .filter((filename) => filename.endsWith(".js"));

for (var filename of commandFiles) {
  const command = require(`./commands/${filename}`);
  bot.commands.set(command.name, command);
}

bot.login(process.env.TOKEN);



bot.on("guildMemberAdd", async (member) => { 
  let mainRole2 = member.guild.roles.cache.find(role => role.name === "⁣     𝗥𝗲𝗴𝗶𝘀𝘁𝗿𝗼     ⁣");
  member.roles.add(mainRole2.id);
  let guild = await bot.guilds.cache.get("706258320297558079");
  let channel = await bot.channels.cache.get("826251196422684683");
 
  let mainRole = member.guild.roles.cache.find(role => role.name === "「✦」Sem Registro");
  member.roles.add(mainRole.id);
  //let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === ":slight_smile:");
  if (guild != member.guild) {
    return console.log("Sem boas-vindas pra você! Sai daqui saco pela.");
   } else {
    
    
      let embed = await new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle("Boas-vindas")
     
      .setDescription(`**${member.user}**, bem-vindo(a) ao servidor **${guild.name}**! Atualmente estamos com **${member.guild.memberCount} membros**, divirta-se conosco! :heart:`)
      
      .setTimestamp();

    channel.send(embed);
  }
  member.send
  ("Olá. Bem vindo ao discord do cidade mundo real!Não se esqueça de registrar para ter acesso aos canais do discord.Para se registrar, vá ao canal 【⛔】𝗥𝗲𝗴𝗶𝘀𝘁𝗿𝗲-𝗦𝗲 e siga os passos a passos. Bem vindo!");
});
bot.on("guildMemberRemove", async (member) => { 

  let guild = await bot.guilds.cache.get("706258320297558079");
  let channel = await bot.channels.cache.get("856296900030758942");
  
  //let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === ":sob:");
  if (guild != member.guild) {
    return console.log("Sem boas-vindas pra você! Sai daqui saco pela.");
   } else {
    
      let embed = await new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle("Adeus ")
     
      .setDescription(`**${member.user}**, Adeus Amigo(a), Agora Estamos com **${member.guild.memberCount} membros**, Sem Diversão para você agora :sob:`)
      
      .setTimestamp();

    channel.send(embed);
  }
});

bot.on("ready", function () {
  bot.user.setActivity('Cidade Mundo Real');
  console.log(`Estou conectado como ${bot.user.username}`);

  
});

bot.on("message", async (msg) => {
  
  

  if (msg.content.includes('discord.gg/'||'discordapp.com/invite/')) { 
    msg.delete() 
      .then(msg.channel.send('Link Deletado:\n**Não Envie Links De Outros Servers por favor**'))
  }
    if (msg.content === '*ping') {  
      msg.channel.send(`🏓Latencia **${Date.now() - msg.createdTimestamp}ms.** Latencia da api: **${Math.round(bot.ws.ping)}ms**`);
    }
  
  
    if (!msg.content.startsWith(process.env.PREFIX) || msg.author.bot) return;
  const args = msg.content.slice(process.env.PREFIX.length).split(" ");
  const command = args.shift();

  try {
    bot.commands.get(command).execute(bot, msg, args);
  } catch (e) {
    
    return msg.reply("Ops! Eu ainda não conheço esse comando! Digite *ajuda para obter todos comandos");
  }
  
  
});