const Discord = require('discord.js');
module.exports.execute = async(client, message, args) => {
  
   if (message.author.id === config.owner) {
     
    try {
  
      let code = args.join(' ')
      let evaled = eval(code)
      let tip = typeof(evaled)
  
      evaled = require('util').inspect(evaled)
  
      if (!code) return message.react(config.hata2)
      if (code.length > 1000) message.react(config.hata2)
  
      let embed = new Discord.MessageEmbed()
      .setColor('#000001')
      .addField('GİRİŞ', `\`\`\`js\n${code}\`\`\``)
      .addField('SONUÇ', `\`\`\`js\n${evaled.length > 1000 ? `${evaled.slice(0, 1000)}...` : `${clean(evaled)}` }\`\`\``)
      .addField('Tür', `\`${tip}\``, true)
      .addField('Uzunluk', `\`${evaled.length}\``, true)
      .addField('Gecikme', `\`${client.ws.ping} MS\``, true)
      message.channel.send(embed).then(async function(evalMessage) {
  
        await evalMessage.react(config.clear)
        await evalMessage.react(config.hide)
        await evalMessage.react(config.back)
  
        evalMessage.createReactionCollector((reaction, user) => user.id == message.author.id).on('collect', async function(react) {
  
          if (react.emoji.id == config.clear) {
  
            evalMessage.delete()
  
          } else if (react.emoji.id == config.hide) {
  
            evalMessage.edit(new Discord.MessageEmbed()
            .setColor('#000001')
            .addField('GİRİŞ', `\`\`\`fix\nBu yazı ${message.author.tag} tarafından gizlendi.\`\`\``)
            .addField('SONUÇ', `\`\`\`fix\nBu yazı ${message.author.tag} tarafından gizlendi.\`\`\``)
            .addField('Tür', `\`Gizlendi\``, true)
            .addField('Uzunluk', `\`Gizlendi\``, true)
            .addField('Gecikme', ` \`Gizlendi\` `, true))
  
            await react.users.remove(message.author.id)
  
          } else if (react.emoji.id == config.back) {
  
            evalMessage.edit(embed)
  
            await react.users.remove(message.author.id)
          };
        });
      });
  
    } catch (err) {
  
      let embed = new Discord.MessageEmbed()
      .setColor('#000001')
      .addField('HATA', `\`\`\`js\n${clean(err).length > 1000 ? `${clean(err).slice(0, 1000)}...` : `${clean(err)}`}\n\`\`\``)
      message.channel.send(embed).then(message.delete({timeout: 500})).then(async function(errorMessage) {
  
        await errorMessage.react(config.clear)
  
        errorMessage.createReactionCollector((reaction, user) => user.id == message.author.id).on('collect', async function(react) {
  
          if (react.emoji.id == config.clear) {
  
            errorMessage.delete()
          };
        });
      });
    };
   
    function clean(text) {
  
      if (typeof(text) == 'string') return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203))
      else
      return text
    };
  }
  
  };

module.exports.configuration = {
    name: "eval",
    aliases: ["eval"],
    info: "Eval",
    usage: "Taslak",
    description: "Taslak Komutu."
};