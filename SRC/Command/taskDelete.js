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
    
    let hedef = args[0]
    if(!hedef)  {
        message.channel.send('Geçerli bir rol veya üye belirt')
        }

 if(message.guild.members.cache.has(hedef)) {
    
    message.channel.send("değer bir üye")
    message.channel.send(`<@${hedef}> isimli yetkiliye verilen görevler temizlenmiştir!`)
sid.sil("sid."+hedef+".mesaj")
sid.sil("sid."+hedef+".sesli")
sid.sil("sid."+hedef+".tagli")
sid.sil("sid."+hedef+".kayit")
sid.sil("sid."+hedef+".davet")
sid.sil("sid."+hedef+"")
    } else
//
 if(message.guild.roles.cache.has(hedef)) {
        message.channel.send("değer bir rol")
    message.channel.send(`<@&${hedef}> isimli role verilen görevler temizlenmiştir!`)
sid.sil("sid."+hedef+".mesaj")
sid.sil("sid."+hedef+".sesli")
sid.sil("sid."+hedef+".tagli")
sid.sil("sid."+hedef+".kayit")
sid.sil("sid."+hedef+".davet")
sid.sil("sid."+hedef+"", false)
}   
/////////////
    }

};

module.exports.configuration = {
    name: "tdelete",
    aliases: ["görevsil", "taskdelete", "taskd"],
    info: "Görev silme",
    usage: "Taslak",
    description: "Taslak Komutu."
};