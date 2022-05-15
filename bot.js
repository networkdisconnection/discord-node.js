const {Client} = require('discord.js') ;
const client = new Client ;
const settings = require('./settings.json') ;

const prefix = `!` ;

client.on('ready',()=>{
console.log('${client.users.tag}登入惹') ;
}) ;


client.on('message',msg=>{
if(msg.content.startsWith(settings.prefix+`12`)){
    var num = Random() ;
    msg.channel.send({flies:["./picture/"+num+".jpg"]}) ;
}
if (msg.content.startsWith(settings.prefix+"12")){
    var num = Random(9,1);
    switch(num){
           case 1 : msg.channel.send({flies:["./picture/1.jpg"]}) ;break ;
           case 2 : msg.channel.send({flies:["./picture/2.jpg"]}) ;break ;
           case 3 : msg.channel.send({flies:["./picture/3.jpg"]}) ;break ;
           case 4 : msg.channel.send({flies:["./picture/4.png"]}) ;break ;
           case 5 : msg.channel.send({flies:["./picture/5.png"]}) ;break ;
         

    }
}


    
const backserver = msg.guild.channels.cache.find(ch => ch.name === 'server') ;


    if(msg.content.startsWith(prefix+"hello")){
        msg.reply("hi") ;
        msg.channel.send(`hi ${msg.author}`) ;
    }

if (msg.content.includes("早安")){

    var rnd = Random(3,1);
    switch (rnd){
        case 1:msg.reply("morning") ;break ;
        case 2:msg.reply("安安") ;break ;
        case 3:msg.reply("你好") ;break ;
    }
}

if (!msg.author.bot){
    backserver.send(`${msg.author.username} sent [${msg}]`);
}


function Random(max,min){
    var rnd =Math.floor(Math.random()*max)+min;
    return rnd ;
}

}) ;

client.login(settings.token) ;