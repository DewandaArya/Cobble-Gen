const ReplCraft = require('replcraft');
let client = new ReplCraft();

(async () => {
  try {
    // Log in to the ReplCraft client with the provided token
    await client.login(process.env.token);

    // Place an oak log block at coordinates (0, 0, 0) in your Minecraft world
    await client.setBlock(0, 0, 0, 'minecraft:oak_log');

    // Optionally, add more code here to handle after the block is set

  } catch (error) {
    // Handle any errors that may occur during the login or block placement
    console.error('An error occurred:', error);
  }
})(); 
