const { Discord, MessageEmbed } = require("discord.js");
const moment = require("moment");
const { MessageButton, MessageActionRow } = require('discord-buttons');
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
    
    ///////////////////

        let member = message.member;

    let discordRegister = moment
        .utc(message.guild.members.cache.get(member.id).user.createdAt)
        .format("**DD/MM/YYYY**")
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`);

        let serverJoin = moment
        .utc(message.guild.members.cache.get(member.id).joinedAt)
        .format("**DD/MM/YYYY**")
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`);


    ///////////////////

    let sayi1 = new MessageButton()
    .setID("1")
    .setLabel("1")
    .setStyle("gray");
    
    let sayi2 = new MessageButton()
    .setID("2")
    .setLabel("2")
    .setStyle("gray");
    
    let sayi3 = new MessageButton()
    .setID("3")
    .setLabel("3")
    .setStyle("gray");
    
    let sayi4 = new MessageButton()
    .setID("4")
    .setLabel("4")
    .setStyle("gray");
    
    let sayi5 = new MessageButton()
    .setID("5")
    .setLabel("5")
    .setStyle("gray");
    
    let sayi6 = new MessageButton()
    .setID("6")
    .setLabel("6")
    .setStyle("gray");
    
    let sayi7 = new MessageButton()
    .setID("7")
    .setLabel("7")
    .setStyle("gray");
    
    let sayi8 = new MessageButton()
    .setID("8")
    .setLabel("8")
    .setStyle("gray");
    
    let sayi9 = new MessageButton()
    .setID("9")
    .setLabel("9")
    .setStyle("gray");
    
    const row1 = new MessageActionRow().addComponents(sayi1, sayi2, sayi3)
    const row2 = new MessageActionRow().addComponents(sayi4, sayi5, sayi6)
    const row3 = new MessageActionRow().addComponents(sayi7, sayi8, sayi9)

message.channel.send(`Aşağıdaki menüden kendinize bir işlem seçip sunucu içinde depolanan verilerinizi öğrenebilirsiniz.

**~** 1: Sunucuya giriş tarihinizi öğrenin.
**~** 2: Kayıt olmuş olduğunuz isimleri öğrenin. 
**~** 3: Devam eden cezanız (varsa) hakkında bilgi alın. 

**~** 4: Ceza puanınızı öğrenin. 
**~** 5: Geçmiş cezalarınızı öğrenin 
**~** 6: Üstünüzde bulunan rollerin listesini alın.

**~** 7: Tekrar sesli kayıt olun.
**~** 8: Sunucu ses kanallarında toplan geçirdiğiniz süreyi öğrenin.
**~** 9: Hesabınızının açılış tarihini öğrenin.`, { components: [ row1, row2, row3]})  

client.on('clickButton', async (button) => {
    // Button1
    if (button.id === '1') {
        await button.think(true);
        await button.reply.edit(serverJoin)
}

    // Button2
    if (button.id === '2') {
        await button.think(true);
        await button.reply.edit(`sa karşim 2`)
}

    // Button3
    if (button.id === '3') {
        await button.think(true);
        await button.reply.edit(`sa karşim 3`)
}


    // Button4
    if (button.id === '4') {
        await button.think(true);
        await button.reply.edit(`sa karşim 4`)
}


    // Button5
    if (button.id === '5') {
        await button.think(true);
        await button.reply.edit(`sa karşim 5`)
}


    // Button6
    if (button.id === '6') {
        await button.think(true);
        await button.reply.edit(`${member.roles.cache.size <= 5 ? member.roles.cache.filter(x => x.name !== "@everyone").map(x => x).join(', ') : `Listelenemedi! (${member.roles.cache.size})`}`)
}


    // Button7
    if (button.id === '7') {
        await button.think(true);
        await button.reply.edit(`sa karşim 7`)
}


    // Button8
    if (button.id === '8') {
        await button.think(true);
        await button.reply.edit(`sa karşim 8`)
}


    // Button9
    if (button.id === '9') {
        await button.think(true);
        await button.reply.edit(discordRegister)
}


    // Button10
    if (button.id === '10') {
        await button.think(true);
        await button.reply.edit(`sa karşim 10`)
}


});
}
  };

module.exports.configuration = {
    name: "kb",
    aliases: ["info", "bilgi"],
    info: "Kullanıcı Bilgi",
    usage: "Taslak",
    description: "Taslak Komutu."
};