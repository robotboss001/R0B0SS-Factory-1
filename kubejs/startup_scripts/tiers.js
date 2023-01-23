

  onEvent('item.registry.armor_tiers', event => {
    // Slot indicies are [FEET, LEGS, BODY, HEAD]
    event.add('tier_id', tier => {
      tier.durabilityMultiplier = 15 // Each slot will be multiplied with [13, 15, 16, 11]
      tier.slotProtections = [2, 5, 6, 2]
      tier.enchantmentValue = 9
      tier.equipSound = 'minecraft:item.armor.equip_iron'
      tier.repairIngredient = '#forge:ingots/iron'
      tier.toughness = 0.0 // diamond has 2.0, netherite 3.0
      tier.knockbackResistance = 0.0
    })
  })