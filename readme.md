# Replcraft Template

This template allows you to connect to Minecraft servers running the Replcraft plugin. To set it up, you'll need to create a structure and obtain a token. Check the blog post for more details. You can click on the token in chat to copy it, select `copy to clipboard` when prompted. Paste the token into a secret called `token`.

## API
See `./lib/replcraft.js` for full documentation.  
List: `get_size` `location` `get_block` `set_block` `get_sign_text` `set_sign_text` `watch` `unwatch` `watch_all` `unwatch_all` `poll` `unpoll` `poll_all` `unpoll_all` `get_entities` `get_inventory` `move_item` `get_power_level` `craft`