onEvent('item.registry', event => {
	event.create('palamod:paladium_sword', 'sword').tier('paladium').attackDamageBaseline(8.5).speed(100).speedBaseline(6)
  event.create('palamod:paladium_axe', 'axe').tier('paladium').attackDamageBaseline(7.5).speed(100).speedBaseline(6)
  event.create('palamod:paladium_pickaxe', 'pickaxe').tier('paladium').attackDamageBaseline(6.5).speed(100).speedBaseline(6)
  event.create('palamod:paladium_shovel', 'shovel').tier('paladium').attackDamageBaseline(6.5).speed(100).speedBaseline(6)
})


onEvent('item.registry.tool_tiers', event => {
    event.add('paladium', tier => {
      tier.uses = 4999
      tier.speed = 100.0
      tier.attackDamageBonus = 0.0
      tier.level = 5
      tier.enchantmentValue = 18
      tier.repairIngredient = '#forge:ingot/paladium'
    })
  })

 