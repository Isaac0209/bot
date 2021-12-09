const execute = (bot, msg, args) => {
    let string = "**===== AJUDA =====**\n\n";
    bot.commands.forEach((command) => {
      if (command.help) {
        string += `${process.env.PREFIX}${command.name}: ${command.help}\n`;
      }
    });
    return msg.channel.send(string);
  };
  
  module.exports = {
    name: "ajuda",
    help: "Exibe a ajuda de todos os comandos",
    execute,
  };