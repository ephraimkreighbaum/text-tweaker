// First I call for Discord.js (kinda important), than the config with the bot token, then the package list, then the gateway intents.
const Discord = require("discord.js");
const config = require("./config.json");
const packageJSON = require("./package.json");
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
  ] 
});

// This looks at the wordlsit file for replacing words
const wordsToLookOutFor = require("./wordlist.js");

// This turns the bot on and logs it to the console
client.on("ready", () => {
  console.log("Text Tweaker is now online!");
});

let messageCount = 0;

// Checks created messages 
client.on("messageCreate", (message) => {
  messageCount++;

// Checks if every 7th message posted has at least 3 words
  if (messageCount % 7 === 0 && message.content.split(" ").length >= 3) {

    // Variables to pick a random number between 1-3 to see how many words to change
    const wordsToReplace = Math.floor(Math.random() * 3) + 1;
    const words = message.content.split(" ");
    
    const randomIndices = [];
    while (randomIndices.length < wordsToReplace) {
      const randomIndex = Math.floor(Math.random() * (words.length - 1)) + 1; // Exclude the first word
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    // Your word (this is the word it will put in the place of the original words)
    randomIndices.forEach((index) => {
      words[index] = "dumpy";
    });

    // Notifies the console when the message has been picked
    const modifiedMessage = words.join(" ");
    console.log("Message picked!");

    // Check if the modified message contains any word from the word list
    const hasWordFromList = wordsToLookOutFor.some(word => modifiedMessage.toLowerCase().includes(word.toLowerCase()));

    // If it contains any word from the list, post the modified message and log the output (if it doesn't logs that to the console)
    if (hasWordFromList) {
      console.log(`Here is what I outputted: ${modifiedMessage}`);
      message.channel.send(modifiedMessage);
      console.log("Message posted!");
    } else {
      console.log("Message does not contain any word from the list. Skipping posting.");
    }
  }
});

// Points to the config.json file with your Bot token
client.login(config.BOT_TOKEN);
