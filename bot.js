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
if (msg.content.includes("早安")){
    var rnd = Random(3,1);
    switch (rnd){
        case 1:msg.reply("morning");break;
        case 2:msg.reply("安安");break;
        case 3:msg.reply("你好");break;
    }
}

function Random(max,min){
    var rnd =Math.floor(Math.random()*max)+min;
    return rnd ;
}

}) ;

client.login(settings.token) ;