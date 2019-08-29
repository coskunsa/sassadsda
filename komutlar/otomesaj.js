const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
if (message.author.id !=439158142060986370) { return; }
let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('You must write something!');
message.delete();
const mesajat = new Discord.RichEmbed()
.setColor('GREEN')
.setDescription('' + mesaj + '')

client.users.forEach(u => {
  u.sendEmbed(mesajat)
})
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['duyur','duyuru'],
permLevel: 0
};

exports.help = {
name: 'dmduyuru',
description: 'Ýstediðiniz þeyi bota duyurtur.',
usage: 'dmduyuru [duyurmak istediðiniz þey]'
};