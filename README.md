# DiscordJS-Bot-Template

A starting point for your first Discord.JS Bot
Built from the Discord.JS Guide.

## Configuration

In discord developer portal, create an app. Once create not the values you'll need for the config below,
then give your bot a name and generate a user for it.
Clone the repo, then run "npm install" in project root to install module dependancies.
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

Each command is its own file. The commands folder gets read in and any .js files in the folder are treated as individual commands.
