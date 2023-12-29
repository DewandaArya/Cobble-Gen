const ReplCraft = require('replcraft');
let client = new ReplCraft();

(async () => {
  try {
    // Log in to the ReplCraft client with the provided token
    await client.login(process.env.token);

    let cobble = 'minecraft:cobblestone';
      let stick = 'minecraft:stick';
      let tools = {
        sword: [
          cobble, null, null,
          cobble, null, null,
          stick , null, null
        ],
        pickaxe: [
          cobble, cobble, cobble,
          null  , stick , null  ,
          null  , stick , null
        ],
        shovel: [
          cobble, null, null,
          stick , null, null,
          stick , null, null
        ],
        axe: [
          cobble, cobble, null,
          cobble, stick , null,
          null  , stick , null
        ]
      };

      let items = {
        'minecraft:cobblestone': {
          location: [1, 0, 0],
          stacks: await client.getInventory(1, 0, 0)
        },
        'minecraft:stick': {
          location: [1, 0, 0],
          stacks: await client.getInventory(1, 0, 0)
        }
      }

      for (let [tool, ingredients] of Object.entries(tools)) {
        console.log("Crafting", tool);
        await client.craft(1, 0, 0, ingredients.map(itemType => {
          if (itemType == null) return null;

          let item = items[itemType].stacks.filter(item => {
            return item.type == itemType && item.amount > 0;
          })[0];
          if (!item) throw new Error(`Out of ${itemType}`);
          item.amount -= 1;

          let [x, y, z] = items[itemType].location;
          return { index: item.index, x, y, z };
        }));
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
    })();
