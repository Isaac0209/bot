const execute = async (client,message,args) => {
    if(message.channel.name.includes('suporte-')) {
        message.channel.delete();
    }
    else {
        return message.reply('você não pode usar este comando aqui. Use este comando quando quiser excluir um suporte.');
    }


}
module.exports = {
    name: "deletar",
    userperms: ['ADMINISTRATOR'],
    execute,
}