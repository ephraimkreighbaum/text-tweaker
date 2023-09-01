# Text Tweaker Discord bot
A Discord bot written in node.js that randomly replaces words in random sentences with any word of your choosing!

Free for anyone to use and customize.

## Creating your bot through Discord Developer Portal
Go to the Discord Developer Portal (https://discord.com/developers/applications).
Create an application. Go to "Bot" on the sidebar and copy your token (you may have to click reset to see it). Save it for later and DO NOT SHARE THIS WITH ANYONE.
After copying this, scroll down to the Privileged Gateway Intents section and enable the three toggles. Save your changes.

Now go to "OAuth2" in the sidebar and choose "URL Generator". Select "bot". I'd just give it Admin, but the only perms it needs are 

Read messages/View Channels,
Send messages,
Send messages in threads,
Read message history.

Scroll down and copy the url that was generated.
Paste it in your web browser in a new tab, and add it to the server you'd like it in.


## Customizing the bot
First go to https://github.com/ephraimkreighbaum/Text-Tweaker/releases and download the latest .zip folder and extract it.
Open the "config.json" file in your IDE (or just use Notepad).

Fill in the Bot Token that you copied earlier.
Fill in the Channel ID (right-click on the channel you would like the bot to use and click "Copy Channel ID").
Fill in the word you'd like the bot to use.

## Installing/running the bot

### Windows
Go to https://nodejs.org and install the LTS version. Restart your computer, and open a CMD window.

Run `node -v` to check your installed version (this will also let you know you installed it correctly, if it says it doesn't recognize node as a command, re-run the installer).

Also run `npm -v`.

To install Discord.js, run `npm install discord.js`. You may need to update NPM (`npm update -g`).

Hold shift and right-click on the folder we extracted earlier. Click "Copy as path". In your CMD window, type `cd path-to-folder` and hit enter.

Now run `npm run start` and hit enter. That's it!

### Linux
Go to https://github.com/nvm-sh/nvm and follow the installation instructions. 
When installed, run `nvm install node`. This will install the latest version of node.js.

When installed, clone the Text-Tweaker repo: `git clone https://github.com/ephraimkreighbaum/Text-Tweaker.git`
Navigate inside the folder: `cd Text-Tweaker`. 
Edit the config: `nano config.json` and fill in the information [here](https://github.com/ephraimkreighbaum/Text-Tweaker#customizing-the-bot).

Install discord.js: `npm install discord.js`
You can do `npm run start` to start the bot, but if you close your terminal window the bot will shut down. 
If you follow the instructions [here](https://github.com/ephraimkreighbaum/Text-Tweaker#running-with-pm2) the bot will run continously. 

### Running with PM2
Now I added an option to run with PM2! 
After you install PM2 (installation process varies between OSes) just run `pm2 start text-tweaker-pm2.json`!


Join the support Discord server to learn about new features I have planned!
