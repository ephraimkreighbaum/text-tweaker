# Text Tweaker Discord bot
A Discord bot written in node.js that randomly replaces words in random sentences with any word of your choosing!

The code is quite simple, it is mostly an experiment I did to see how accurately Chat-GPT can generate code. I modified about 75% of the code.
Free for anyone to use and customize.

## Creating your bot through Discord Developer Portal
Go to the Discord Developer Portal (https://discord.com/developers/applications).
Create an application. Go to "Bot" on the sidebar and copy your token (you may have to click reset to see it). Save it for later and DO NOT SHARE THIS WITH ANYONE.
After copying this, scroll down to the Privileged Gateway Intents section and enable the three toggles. Save your changes.

Now go to "OAuth2" in the sidebar and choose "URL Generator". Select "bot". I'd just give it Admin, but the only perms it needs are 

Read messages/View Channels,
Send messages,
Send messages in threads,
Read message history,
and Use slash commands.

Scroll down and copy the url that was generated.
Paste it in your web browser in a new tab, and add it to the server you'd like it in.


## Customizing the bot
First go to https://github.com/EDKTech/Text-Tweaker/releases and download the latest .zip folder and extract it.
Open the "bot.js" file in your IDE (or just use Notepad).

Go to line 21 in the code. The word in the parenthesis is the word the bot will use. Default is "dumpy".

Now go to the very bottom of the code and you'll see a line that says `client.login('your-bot-token');`. Change "your-bot-token" to the token you created earlier.
Save the file.

## Installing/running the bot

### Windows (adding more documentation for other OSes later)
Go to https://nodejs.org and install the LTS version. Restart your computer, and open a CMD window.

Run `node -v` to check your installed version (this will also let you know you installed it correctly, if it says it doesn't recognize node as a command, re-run the installer).

Also run `npm -v`.

To install Discord.js, run `npm install discord.js`. You may need to update NPM (`npm update -g`).

Hold shift and right-click on the folder we extracted earlier. Click "Copy as path". In your CMD window, type `cd path-to-folder` and hit enter.

Now run `node bot.js` and hit enter. That's it!



Some features are planned to be added at some point. Hope this bot has some use to you!
