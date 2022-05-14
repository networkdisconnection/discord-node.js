const {Client} = require('discord.js') ;
const client = new Client ;
const settings = require('./settings.json') ;

const prefix = `!` ;

client.on('ready',()=>{
console.log('${client.users.tag}登入惹') ;
}) ;

client.on('message',msg=>{
    if(msg.content.startsWith(prefix+"hello")){
        msg.reply("hi") ;
        msg.channel.send(`hi ${msg.author}`) ;
    }
}) ;

client.login(settings.token) ;