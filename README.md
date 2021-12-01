# DiscordJS-Bot-Template
A starting point for your first Discord.JS Bot

## Configuration
In discord developer portal, create an app. Once create not the values you'll need for the config below,
then give your bot a name and generate a user for it.
Replace the values in config-sample.json with the ones you generated when you created the app.
Rename config-sample.json to config.json

## Register commands
command registration/deployment is handled by deploy-commands.js
add your code and run "node deploy-commands.js" from project root

## Run Bot
Generate Oauth2 urls for your bot (specifically application.commands & bot) and
assign your bot permissions (Administrator). Copy the link, paste it in browser,
choose a server(guild) to deploy to.
You can bring the bot online by running "node index.js"

## Commands
Each command is its own file. The commands folder gets read in and any .js in the folder is treated as a command
