const {Discord, Client, MessageEmbed} = require('discord.js');
const client = global.client = new Client({ fetchAllMembers: true });
const config = global.config = require("./SRC/Settings/config.json");
const sync = global.sync = require("./SRC/Settings/sync.json");
const Veritabani = require("richard.db");
require('discord-buttons')(client);
const ms = global.ms = require("ms")
const uid = global.uid = new Veritabani("./SRC/Models/uid.json");
const sid = global.sid = new Veritabani("./SRC/Models/sid.json");
const fs = require("fs");
const commands = new Map();
global.commands = commands;
const aliases = new Map();
global.aliases = aliases;
global.client = client;

client.login(config.token);

/////////////// ACILIS
  client.on("ready", async () => {
    client.user.setPresence({ activity: { name: config.activity }, status: "dnd" });
  });
  /////////////// ACILIS

  fs.readdir("./SRC/Command", (err, files) => {

    if(err) return console.error(err);

    files = files.filter(file => file.endsWith(".js"));

    files.forEach(file => {

        let prop = require(`./SRC/Command/${file}`);

        if(!prop.configuration) return;

        console.log(`[ COMMAND ] ${prop.configuration.info} komutu yüklendi! `);

        if(typeof prop.onLoad === "function") prop.onLoad(client);

        commands.set(prop.configuration.name, prop);

        if(prop.configuration.aliases) prop.configuration.aliases.forEach(aliase => aliases.set(aliase, prop));

    });

});

  client.on("message", (message) => {

        if (message.author.bot ||!message.content.startsWith(config.prefix) || !message.channel || message.channel.type == "dm") return;

        let args = message.content

          .substring(config.prefix.length)

          .split(" ");
          let embed = new MessageEmbed()
          .setColor("RANDOM")
          .setFooter(config.footer)
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true, size: 2048 }))
          
        if(uid.cek(`blockedqwe.${message.author.id}`)) { message.react(config.hata) 
          setTimeout(() => {
            uid.sil(`blockedqwe.${message.author.id}`)
        }, 10000)} else
        if(uid.cek(`blocked.${message.author.id}`)) { message.channel.send(embed.setDescription(`${message.member} komut spamı yaptığın için kara listeye alındın. <@${config.owner}> ile iletişime geçebilirsin.`)) 
        uid.ekle(`blockedqwe.${message.author.id}`, 1)} else {
    let command = args[0];

        let bot = message.client;

        args = args.splice(1);

        let calistirici;

        if (commands.has(command)) {

          calistirici = commands.get(command);

          calistirici.execute(bot, message, args);

        } else if (aliases.has(command)) {

          calistirici = aliases.get(command);

          calistirici.execute(bot, message, args);

        }
      }  })


fs.readdir("./SRC/Events", (err, files) => {

    if(err) return console.error(err);

    files.filter(file => file.endsWith(".js")).forEach(file => {

        let prop = require(`./SRC/Events/${file}`);
        if(!prop.configuration) return;

        client.on(prop.configuration.name, prop);
        console.log(`[ EVENT ] ${prop.configuration.info} aktivitesi yüklendi!`)

    });

});
