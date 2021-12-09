const execute = async(bot,message,args) => {
    message.delete();
    let mainRole = message.guild.roles.cache.find(role => role.name === "「✦」Sem Registro");
    let mainRole2 = message.guild.roles.cache.find(role => role.name === "「✔️」Registrado");
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('| So Admins Podem Registra!');
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(' ') || x.user.username === args[0]);
if(!member) {
    return message.channel.send(`Forma Incorreta! Forma Correta: *registro <member>`);
}
try{(args[0])
    member.roles.remove(mainRole.id);
    member.roles.add(mainRole2.id);
  message.reply(`Usuario ${member} Registrado!`)
    member.send(`Olá ${member} seu registro foi feito com sucesso! um administrador aprovou seu registro!`);
}
catch(e) {
    return message.channel.send(`Ocorreu um erro!,"**${e}**" Fale com o isaac! e reporte o nome do erro para ele!`);
}

}
module.exports = {
    name: "registro",
    execute,
}