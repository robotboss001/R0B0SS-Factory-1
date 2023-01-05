onEvent('worldgen.remove', event => {
    event.removeOres(ores => {
      ores.blocks = ['immersiveengineering:ore_lead', 
                     'immersiveengineering:deepslate_ore_lead', 
                     'immersiveengineering:ore_silver', 
                     'immersiveengineering:deepslate_ore_silver', 
                     'immersiveengineering:deepslate_ore_uranium', 
                     'immersiveengineering:ore_uranium', 
                     'immersiveengineering:deepslate_ore_nickel', 
                     'immersiveengineering:ore_nickel'] 
    })
})