// priority: 0

onEvent('block.registry', event => {

	event.create('roboss:statue_roboss')
	.material('metal')
	.hardness(1.0)
	.displayName('Statue of R0B0TB0SS')
	.renderType('cutout')
	.notSolid()
	.lightLevel(0.5)
	.box(3,0,3,13,21,13, true)

	event.create('roboss:statue_kikongin')
	.material('metal')
	.hardness(1.0)
	.displayName('Statue of Kikongin')
	.renderType('cutout')
	.notSolid()
	.lightLevel(0.5)
	.box(3,0,3,13,21,13, true)

	event.create('roboss:statue_laimx')
	.material('metal')
	.hardness(1.0)
	.displayName('Statue of Laimx')
	.renderType('cutout')
	.notSolid()
	.lightLevel(0.5)
	.box(3,0,3,13,21,13, true)

	event.create('roboss:statue_blakdestroyer')
	.material('metal')
	.hardness(1.0)
	.displayName('Statue of Blakdestroyer')
	.renderType('cutout')
	.notSolid()
	.lightLevel(0.5)
	.box(3,0,3,13,21,13, true)

	event.create('roboss:logo')
	.material('metal')
	.hardness(1.0)
	.displayName('Logo')
	.renderType('cutout')
	.notSolid()
	.lightLevel(0.5)
	
})