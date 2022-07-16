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
  
    let embed = new MessageEmbed()
    .setColor("RANDOM")
    .setFooter(config.footer)
  .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true, size: 2048 }))
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  if (!member) return message.channel.send(embed.setDescription(`Komutu doğru kullanmalısın. \`Örnek: ${config.prefix || '.'}task @Richârd/ID\``));
  let task = sid.cek(`sid.${member.id}`)
  ///
  let mesaj; 
  let davet; 
  let kayit; 
  let sesli; 
  let tagli; 
  ///

  let messagetask = sid.cek(`sid.${member.id}.mesaj`)
  let invitetask = sid.cek(`sid.${member.id}.davet`)
  let registertask = sid.cek(`sid.${member.id}.kayit`)
  let voicetask = sid.cek(`sid.${member.id}.sesli`)
  let taggedtask = sid.cek(`sid.${member.id}.tagli`)
  if(!task) { message.channel.send(embed.setDescription(`${member} isimli yetkiliye ait bir veri bulunamadı! **(SYNC REQUIRE)**`)) }

/////
  if(messagetask) {
mesaj = `Mesaj kanallarında ${messagetask} adet mesaj atmalısın!
${bar(messagetask, 5, 8)}
Ödül olarak \`qweXP\` verilecektir.`
                  }
  if(invitetask) {
davet = `Sunucuya ${invitetask} kullanıcı davet etmelisin!
${bar(invitetask, 5, 8)}
Ödül olarak \`qweXP\` verilecektir.`
                  }
  if(registertask) {
kayit = `Sunucumuzda ${registertask} kullanıcı kayıt etmelisin!
${bar(registertask, 5, 8)}
Ödül olarak \`qweXP\` verilecektir.`
                  }
  if(voicetask) {
sesli = `Sesli kanallarda ${voicetask} dakika geçirmelisin!
${bar(voicetask, 5, 8)}
Ödül olarak \`qweXP\` verilecektir.`
                  }
  if(taggedtask) {
tagli = `Sunucumuzdaki ${taggedtask} üye'ye tag aldırmalısın! (TAGQWE)
${bar(taggedtask, 5, 8)}
Ödül olarak \`qweXP\` verilecektir.`
                  }
let nettask = `${mesaj || ` `}

${davet || ` `}

${kayit || ` `}

${sesli || ` `}

${tagli || ` `}`
/////  
  if(task) {
message.channel.send(embed.setDescription(`${member} yetkilisinin görev bilgileri aşağıda verilmiştir;

${nettask}`))  
    }
  }
};

module.exports.configuration = {
    name: "tinfo",
    aliases: ["task", "görev", "gorev", "gorevim", "görevim"],
    info: "Görev Bilgi",
    usage: "Taslak",
    description: "Taslak Komutu."
};

function bar(gorevpuanlarim, gorevpuanlar, size) {
const progress = Math.round(size * ((gorevpuanlarim / gorevpuanlar) > 1 ? 1 : (gorevpuanlarim / gorevpuanlar)));
const emptyProgress = size - progress > 0 ? size - progress : 0;

const progressText = "<a:richarddolukutuorta:801740231824900107>".repeat(progress);
const emptyProgressText = "<:richardboskutuorta:801740232063451156>".repeat(emptyProgress);

return emptyProgress > 0 ? `<a:richardolukutuilk:801740231974977556>${progressText}${emptyProgressText}<:richardboskutuson:801740232197537832>` : `<a:richardolukutuilk:801740231974977556>${progressText}${emptyProgressText}<a:richarddolukutuson:801740231597359104>`;
    };
    