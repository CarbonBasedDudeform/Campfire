function ParticleSystems(scene) {
	var particleGroup = new SPE.Group({
    // Give the particles in this group a texture
    texture: THREE.ImageUtils.loadTexture('smokeparticle.png'),

    // How long should the particles live for? Measured in seconds.
    maxAge: 5
	});

	// Create a single emitter
	var particleEmitter = new SPE.Emitter({
	    type: 'cube',
	    position: new THREE.Vector3(0, 0, 0),
	    positionSpread: new THREE.Vector3(Math.random()*100, 0, Math.random()*100),
	    acceleration: new THREE.Vector3(0, 20, 0),
	    accelerationSpread: new THREE.Vector3(Math.random()*3, 0, Math.random()*3),
	    velocity: new THREE.Vector3(0, 15, 0),
	    particlesPerSecond: 2000,
	    sizeStart: 200,
	    sizeMiddle: 175,
	    sizeEnd: 0,
	    opacityStart: 1,
	    opacityEnd: 0,
	    colorStart: new THREE.Color('#FFFF33'),
	    colorEnd: new THREE.Color('red')
	});

	// Add the emitter to the group.
	particleGroup.addEmitter( particleEmitter );

	// Add the particle group to the scene so it can be drawn.
	

	var inner_particleGroup = new SPE.Group({
    // Give the particles in this group a texture
    texture: THREE.ImageUtils.loadTexture('smokeparticle.png'),

    // How long should the particles live for? Measured in seconds.
    maxAge: 5
	});

	// Create a single emitter
	var inner_particleEmitter = new SPE.Emitter({
	    type: 'cube',
	    position: new THREE.Vector3(0, 0, 0),
	    positionSpread: new THREE.Vector3(Math.random()*50, 10, Math.random()*50),
	    acceleration: new THREE.Vector3(0, 10, 0),
	    accelerationSpread: new THREE.Vector3(Math.random()*3, 0, Math.random()*3),
	    velocity: new THREE.Vector3(0, 15, 0),
	    particlesPerSecond: 2000,
	    sizeStart: 100,
	    sizeEnd: 0,
	    opacityStart: 1,
	    opacityEnd: 0.5,
	    colorStart: new THREE.Color('black'),
	    colorEnd: new THREE.Color('white')
	});

	// Add the emitter to the group.
	particleGroup.addEmitter( inner_particleEmitter );

	// Add the particle group to the scene so it can be drawn.

		var smoke_particleGroup = new SPE.Group({
    // Give the particles in this group a texture
    texture: THREE.ImageUtils.loadTexture('smokeparticle.png'),

    // How long should the particles live for? Measured in seconds.
    maxAge: 5
	});

	// Create a single emitter
	var smoke_particleEmitter = new SPE.Emitter({
	    type: 'cube',
	    position: new THREE.Vector3(0, 200, 0),
	    positionSpread: new THREE.Vector3(Math.random()*100,Math.random()*100,Math.random()*100),
	    acceleration: new THREE.Vector3(0, 100, 0),
	    accelerationSpread: new THREE.Vector3(Math.random()*300, 0, Math.random()*30),
	    velocity: new THREE.Vector3(0, 15, 0),
	    particlesPerSecond: 2000,
	    sizeStart: 200,
	    sizeEnd: 500,
	    opacityStart: 1,
	    opacityEnd: 0,
	    colorStart: new THREE.Color('black'),
	    colorEnd: new THREE.Color('white')
	});

	// Add the emitter to the group.
	particleGroup.addEmitter( smoke_particleEmitter );

	// Add the particle group to the scene so it can be drawn.
	scene.add( particleGroup.mesh );


	this.update = function() {
		particleGroup.tick( clock.getDelta() );
	}
}