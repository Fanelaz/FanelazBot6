const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN);

var prefix = ("f6!");

client.on("message", (message) =>{

    if(message.content === "Bonjour") {
        message.channel.send("Bien le bonjour cher Minecraftien!")
    }


    if(message.content === prefix + "help"){
        message.channel.send("Veux-tu de l'aide?") 
    }


});
