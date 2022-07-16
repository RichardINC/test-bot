const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(client, message, args) => {
  uid.ekle(`block.${message.author.id}`, 1)
setTimeout(() => {
    uid.sil(`block.${message.author.id}`)
}, ms(10000))
if(uid.cek(`block.${message.author.id}`) >= 5)
{
    let embed = new MessageEmbed()
    .setColor("RANDOM")
    .setFooter(config.footer)
  .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true, size: 2048 }))
    message.channel.send(embed.setDescription(`${message.member} komut spamı yaptığın için kara listeye alındın. <@${config.owner}> ile iletişime geçebilirsin.`))
} else {

let cmd = args[0]

if(cmd === "control") {
    
}
}
  };

module.exports.configuration = {
    name: "staff",
    aliases: ["st"],
    info: "Yetkili",
    usage: "Taslak",
    description: "Taslak Komutu."
};