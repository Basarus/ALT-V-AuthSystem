# ALT-V-AuthSystem

Just install this script in your client folder and connect it to the main file.

alt.emitServer('client::auth:init') - Opens the menu

Use these calls to get data from the menu

web.on('cef::auth:authorization') && alt.onServer('server::auth:authorization') // -> { login, pass })    
web.on('cef::auth:registration') && alt.onServer('server::auth:registration') // -> { login, email, pass, re_pass })
web.on('cef::auth:recovery') && alt.onServer('server::auth:recovery') // -> {email })        


[![Alt text for your video](https://i.imgur.com/tVWhyQm.png)
