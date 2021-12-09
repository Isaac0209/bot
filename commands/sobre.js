

const execute = (bot, msg, args) => {

    if (!msg.content.startsWith(process.env.PREFIX) || msg.author.bot) return;

    return msg.reply(`Olá, eu sou bot CMR Estou aqui para ajudar, Todos os comandos relacionado ao servidor irei executar,Quer a lista de comando digite *ajuda`);


}
module.exports = {
 name: "sobre",
 help: "Um Pouco Sobre Mim",
 execute,
}