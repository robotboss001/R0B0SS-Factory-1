onEvent('item.registry', event => {
    event.create('palamod:paladium_helmet', 'helmet').tier('paladium')
    event.create('palamod:paladium_chestplate', 'chestplate').tier('paladium')
    event.create('palamod:paladium_leggings', 'leggings').tier('paladium')
    event.create('palamod:paladium_boots', 'boots').tier('paladium')
  })

  onEvent('item.registry.armor_tiers', event => {
    // Slot indicies are [FEET, LEGS, BODY, HEAD]
    event.add('paladium', tier => {
      tier.durabilityMultiplier = 15 // Each slot will be multiplied with [13, 15, 16, 11]
      tier.slotProtections = [2, 5, 6, 2]
      tier.enchantmentValue = 9
      tier.equipSound = 'minecraft:item.armor.equip_netherite'
      tier.repairIngredient = '#forge:ingots/paladium'
      tier.toughness = 0.0 // diamond has 2.0, netherite 3.0
      tier.knockbackResistance = 0.0
    })
  })