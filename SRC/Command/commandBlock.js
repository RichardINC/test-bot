const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(client, message, args) => {
  
uid.ekle(`block.${message.author.id}`, 1)
setTimeout(() => {
    uid.sil(`block.${message.author.id}`)
}, 10000)
if(uid.cek(`block.${message.author.id}`) >= 5)
{
uid.ayarla(`blocked.${message.author.id}`, true)
} else {

message.channel.send("qweeee")
    }
};

module.exports.configuration = {
    name: "cmd",
    aliases: ["Taslak"],
    info: "Komut Engeli",
    usage: "Taslak",
    description: "Taslak Komutu."
};