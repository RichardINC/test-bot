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
if (!member) return message.channel.send(embed.setDescription(`Komutu doğru kullanmalısın. \`Örnek: ${config.prefix || '.'}sync @Richârd/ID\``));
let task = sid.cek(`sid.${member.id}`)
if(task) { message.channel.send(embed.setDescription("Belirtilen yetkilinin görevleri belirlenmiş!"))} else {
let rolü;
  let sesli;
  let mesaj;
  let davet;
  let tagli;
  let kayit;

  if (member.roles.cache.has(sync.perm1)) 
  {
  rolü = sync.perm1;
  sesli = sid.cek("sid."+sync.perm1+".sesli");
  mesaj = sid.cek("sid."+sync.perm1+".mesaj");
  davet = sid.cek("sid."+sync.perm1+".davet");
  tagli = sid.cek("sid."+sync.perm1+".tagli");
  kayit = sid.cek("sid."+sync.perm1+".kayit");
  }
///////

  if (member.roles.cache.has(sync.perm2)) 
  {
  rolü = sync.perm2;
  sesli = sid.cek("sid."+sync.perm2+".sesli");
  mesaj = sid.cek("sid."+sync.perm2+".mesaj");
  davet = sid.cek("sid."+sync.perm2+".davet");
  tagli = sid.cek("sid."+sync.perm2+".tagli");
  kayit = sid.cek("sid."+sync.perm2+".kayit");
  }
///////

if (member.roles.cache.has(sync.perm3)) 
{
rolü = sync.perm3;
sesli = sid.cek("sid."+sync.perm3+".sesli");
mesaj = sid.cek("sid."+sync.perm3+".mesaj");
davet = sid.cek("sid."+sync.perm3+".davet");
tagli = sid.cek("sid."+sync.perm3+".tagli");
kayit = sid.cek("sid."+sync.perm3+".kayit");
}
///////

if (member.roles.cache.has(sync.perm4)) 
{
rolü = sync.perm4;
sesli = sid.cek("sid."+sync.perm4+".sesli");
mesaj = sid.cek("sid."+sync.perm4+".mesaj");
davet = sid.cek("sid."+sync.perm4+".davet");
tagli = sid.cek("sid."+sync.perm4+".tagli");
kayit = sid.cek("sid."+sync.perm4+".kayit");
}
///////

if (member.roles.cache.has(sync.perm5)) 
{
rolü = sync.perm5;
sesli = sid.cek("sid."+sync.perm5+".sesli");
mesaj = sid.cek("sid."+sync.perm5+".mesaj");
davet = sid.cek("sid."+sync.perm5+".davet");
tagli = sid.cek("sid."+sync.perm5+".tagli");
kayit = sid.cek("sid."+sync.perm5+".kayit");
}
///////

if (member.roles.cache.has(sync.perm6)) 
{
rolü = sync.perm6;
sesli = sid.cek("sid."+sync.perm6+".sesli");
mesaj = sid.cek("sid."+sync.perm6+".mesaj");
davet = sid.cek("sid."+sync.perm6+".davet");
tagli = sid.cek("sid."+sync.perm6+".tagli");
kayit = sid.cek("sid."+sync.perm6+".kayit");
}
///////

if (member.roles.cache.has(sync.perm7)) 
{
rolü = sync.perm7;
sesli = sid.cek("sid."+sync.perm7+".sesli");
mesaj = sid.cek("sid."+sync.perm7+".mesaj");
davet = sid.cek("sid."+sync.perm7+".davet");
tagli = sid.cek("sid."+sync.perm7+".tagli");
kayit = sid.cek("sid."+sync.perm7+".kayit");
}
///////

if (member.roles.cache.has(sync.perm8)) 
{
rolü = sync.perm8;
sesli = sid.cek("sid."+sync.perm8+".sesli");
mesaj = sid.cek("sid."+sync.perm8+".mesaj");
davet = sid.cek("sid."+sync.perm8+".davet");
tagli = sid.cek("sid."+sync.perm8+".tagli");
kayit = sid.cek("sid."+sync.perm8+".kayit");
}
///////

if (member.roles.cache.has(sync.perm9)) 
{
rolü = sync.perm9;
sesli = sid.cek("sid."+sync.perm9+".sesli");
mesaj = sid.cek("sid."+sync.perm9+".mesaj");
davet = sid.cek("sid."+sync.perm9+".davet");
tagli = sid.cek("sid."+sync.perm9+".tagli");
kayit = sid.cek("sid."+sync.perm9+".kayit");
}
///////

if (member.roles.cache.has(sync.perm10)) 
{
rolü = sync.perm10;
sesli = sid.cek("sid."+sync.perm10+".sesli");
mesaj = sid.cek("sid."+sync.perm10+".mesaj");
davet = sid.cek("sid."+sync.perm10+".davet");
tagli = sid.cek("sid."+sync.perm10+".tagli");
kayit = sid.cek("sid."+sync.perm10+".kayit");
}
///////

if (member.roles.cache.has(sync.perm11)) 
{
rolü = sync.perm11;
sesli = sid.cek("sid."+sync.perm11+".sesli");
mesaj = sid.cek("sid."+sync.perm11+".mesaj");
davet = sid.cek("sid."+sync.perm11+".davet");
tagli = sid.cek("sid."+sync.perm11+".tagli");
kayit = sid.cek("sid."+sync.perm11+".kayit");
}
///////

if (member.roles.cache.has(sync.perm12)) 
{
rolü = sync.perm12;
sesli = sid.cek("sid."+sync.perm12+".sesli");
mesaj = sid.cek("sid."+sync.perm12+".mesaj");
davet = sid.cek("sid."+sync.perm12+".davet");
tagli = sid.cek("sid."+sync.perm12+".tagli");
kayit = sid.cek("sid."+sync.perm12+".kayit");
}
///////

if (member.roles.cache.has(sync.perm13)) 
{
rolü = sync.perm13;
sesli = sid.cek("sid."+sync.perm13+".sesli");
mesaj = sid.cek("sid."+sync.perm13+".mesaj");
davet = sid.cek("sid."+sync.perm13+".davet");
tagli = sid.cek("sid."+sync.perm13+".tagli");
kayit = sid.cek("sid."+sync.perm13+".kayit");
}
///////

if (member.roles.cache.has(sync.perm14)) 
{
rolü = sync.perm14;
sesli = sid.cek("sid."+sync.perm14+".sesli");
mesaj = sid.cek("sid."+sync.perm14+".mesaj");
davet = sid.cek("sid."+sync.perm14+".davet");
tagli = sid.cek("sid."+sync.perm14+".tagli");
kayit = sid.cek("sid."+sync.perm14+".kayit");
}
///////

if (member.roles.cache.has(sync.perm15)) 
{
rolü = sync.perm15;
sesli = sid.cek("sid."+sync.perm15+".sesli");
mesaj = sid.cek("sid."+sync.perm15+".mesaj");
davet = sid.cek("sid."+sync.perm15+".davet");
tagli = sid.cek("sid."+sync.perm15+".tagli");
kayit = sid.cek("sid."+sync.perm15+".kayit");
}
///////

if (member.roles.cache.has(sync.perm16)) 
{
rolü = sync.perm16;
sesli = sid.cek("sid."+sync.perm16+".sesli");
mesaj = sid.cek("sid."+sync.perm16+".mesaj");
davet = sid.cek("sid."+sync.perm16+".davet");
tagli = sid.cek("sid."+sync.perm16+".tagli");
kayit = sid.cek("sid."+sync.perm16+".kayit");
}
///////

if (member.roles.cache.has(sync.perm17)) 
{
rolü = sync.perm17;
sesli = sid.cek("sid."+sync.perm17+".sesli");
mesaj = sid.cek("sid."+sync.perm17+".mesaj");
davet = sid.cek("sid."+sync.perm17+".davet");
tagli = sid.cek("sid."+sync.perm17+".tagli");
kayit = sid.cek("sid."+sync.perm17+".kayit");
}
///////

if (member.roles.cache.has(sync.perm18)) 
{
rolü = sync.perm18;
sesli = sid.cek("sid."+sync.perm18+".sesli");
mesaj = sid.cek("sid."+sync.perm18+".mesaj");
davet = sid.cek("sid."+sync.perm18+".davet");
tagli = sid.cek("sid."+sync.perm18+".tagli");
kayit = sid.cek("sid."+sync.perm18+".kayit");
}
///////


  message.channel.send(embed.setDescription(`${member} isimli yetkilinin görevleri <@&${rolü}> rolünün görevleri ile senkronize edildi!
${mesaj} Adet Mesaj, ${davet} Adet Davet, ${tagli} Adet Taglı, ${kayit} Adet Kayıt, ${sesli} Dakika Sesli, `));
sid.ayarla("sid."+member.id+".mesaj", mesaj)
sid.ayarla("sid."+member.id+".sesli", sesli)
sid.ayarla("sid."+member.id+".tagli", tagli)
sid.ayarla("sid."+member.id+".kayit", kayit)
sid.ayarla("sid."+member.id+".davet", davet)
sid.ayarla("sid."+member.id+"", true)

}
}
  };

module.exports.configuration = {
    name: "tsync",
    aliases: ["tasksync", "gsenkronizasyon", "gsenkronize"],
    info: "Görev Senkronizasyon",
    usage: "Taslak",
    description: "Taslak Komutu."
};