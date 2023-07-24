// Require the discord.js library
const Discord = require('discord.js');

// Create a new client instance
const client = new Discord.Client();

// Define a function that replaces words with a word of your choice
function changeWord(message) {

  // Split the message into words, eg "Hello, World!" will be split into ("Hello,","world")
  let words = message.split(' ');

  // Loop through the words and randomly replace some of them
  for (let i = 0; i < words.length; i++) {

    // Generate a random number between 0 and 1
    let random = Math.random();

    // If the random number is less than 0.2, replace the word (in my case "dumpy")
    if (random < 0.2) {
      words[i] = 'dumpy';
    }
  }

  // Join the words back together, eg ("Hello,","world") back to "Hello, World!" (or Hello, [yourWord])
  return words.join(' ');
}

// When the bot is ready, log a message to the console
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// When the bot receives a message, check if it is from another user and not a bot
client.on('message', message => {

  // Ignore messages from bots
  if (message.author.bot) return;

  // Get the content of the message
  let content = message.content;

  // Call the change function on the content
  let changed = changeWord(content);
  
  // Send the changed message to the same channel
  message.channel.send(changed);
});

// Log in to Discord with your bot's token
client.login('your-bot-token');
