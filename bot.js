var Discord = require('discord.io');

var bot = new Discord.Client({
    token: "NDA2ODg1MDA5MTY1Nzc4OTU0.DU5c3w.kNYSyfs1tucTj3Lh6QSuMYbldUM",
    autorun: true
});

bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('message', function(user, userID, channelID, message, event) {
  if (message.substring(0, 1) == '!') {
      var args = message.substring(1).split(' ');
      var cmd = args[0];

      args = args.splice(1);
      switch(cmd) {
          case 'hello':
              bot.sendMessage({
                  to: channelID,
                  message: 'Hi there!'
              });
          break;
          case 'weed':
              bot.sendMessage({
                  to: channelID,
                  message: 'Frequent usage of weed can have lead to idiocy!'
              });
          break;
          case 'omg':
            bot.joinVoiceChannel(channelID, function(error, events) {
              console.log('joined voice', channelID);
            });
          break;
       }
   }
});
