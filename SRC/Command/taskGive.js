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

    let sesli = args[5];
    let mesaj = args[1];
    let davet = args[2];
    let tagli = args[3];
    let kayit = args[4];

/////////////
 if(message.guild.members.cache.has(hedef)) {
    if(!sesli || !mesaj || !tagli || !davet || !kayit) { message.channel.send(`görev sistemini adam akıllı kullan sikmiyim!
1.ci mesaj 2.ci davet 3.cü tagli 4.cü kayıt 5.ci dakika bazlı sesli`)} else {
    
    message.channel.send("değer bir üye")
    message.channel.send(`<@${hedef}> isimli yetkiliye verilen görevler aşağıda listelenmiştir!
${mesaj} Adet Mesaj, ${davet} Adet Davet, ${tagli} Adet Taglı, ${kayit} Adet Kayıt, ${sesli} Dakika Sesli, `)
sid.ayarla("sid."+hedef+".mesaj", mesaj)
sid.ayarla("sid."+hedef+".sesli", sesli)
sid.ayarla("sid."+hedef+".tagli", tagli)
sid.ayarla("sid."+hedef+".kayit", kayit)
sid.ayarla("sid."+hedef+".davet", davet)
sid.ayarla("sid."+hedef+"", true)
} } else
//
 if(message.guild.roles.cache.has(hedef)) {
    if(!sesli || !mesaj || !tagli || !davet || !kayit) { message.channel.send(`görev sistemini adam akıllı kullan sikmiyim!
1.ci mesaj 2.ci davet 3.cü tagli 4.cü kayıt 5.ci dakika bazlı sesli`)} else {
        message.channel.send("değer bir rol")
    message.channel.send(`<@&${hedef}> isimli role verilen görevler aşağıda listelenmiştir!
${mesaj} Adet Mesaj, ${davet} Adet Davet, ${tagli} Adet Taglı, ${kayit} Adet Kayıt, ${sesli} Dakika Sesli, `)
sid.ayarla("sid."+hedef+".mesaj", mesaj)
sid.ayarla("sid."+hedef+".sesli", sesli)
sid.ayarla("sid."+hedef+".tagli", tagli)
sid.ayarla("sid."+hedef+".kayit", kayit)
sid.ayarla("sid."+hedef+".davet", davet)
} }  
/////////////
    }

};

module.exports.configuration = {
    name: "tgive",
    aliases: ["görevver", "taskgive", "taskg", "gv"],
    info: "Görev Verme",
    usage: "Taslak",
    description: "Taslak Komutu."
};