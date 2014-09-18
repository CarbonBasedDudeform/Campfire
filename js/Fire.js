function ParticleSystems(scene) {
	var pstex = THREE.ImageUtils.loadTexture('smokeparticle.png');
	var particleGroup = new SPE.Group({
	    texture: pstex,
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

	var inner_particleGroup = new SPE.Group({
	    texture: pstex,
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

	var smoke_particleGroup = new SPE.Group({
	    texture: pstex,
	    maxAge: 40
	});

	// Create a single emitter
	var smoke_particleEmitter = new SPE.Emitter({
	    type: 'cube',
	    position: new THREE.Vector3(0, 200, 0),
	    positionSpread: new THREE.Vector3(Math.random()*100,Math.random()*100,Math.random()*100),
	    acceleration: new THREE.Vector3(0, 100, 0),
	    accelerationSpread: new THREE.Vector3(Math.random()*30, 0, Math.random()*30),
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


	var hotash_particleGroup = new SPE.Group({
	    texture: pstex,
	    maxAge: 5
	});

	// Create a single emitter
	var hotash_particleEmitter = new SPE.Emitter({
	    type: 'cube',
	    position: new THREE.Vector3(0, -7, 0),
	    positionSpread: new THREE.Vector3(Math.random()*(180-50)+50,Math.random()*2,Math.random()*(180-50)+50),
	    acceleration: new THREE.Vector3(-1, -1, -1),
	    accelerationSpread: new THREE.Vector3(Math.random()*5, 0, Math.random()*5),
	    velocity: new THREE.Vector3(1, 0, 1),
	    particlesPerSecond: 100,
	    sizeStart: 10,
	    sizeEnd: 0,
	    opacityStart: 1,
	    opacityEnd: 0,
	    colorStart: new THREE.Color('#ff0000'),
	    colorEnd: new THREE.Color('#000000')
	});

	// Add the emitter to the group.
	particleGroup.addEmitter( hotash_particleEmitter );

	// Add the particle group to the scene so it can be drawn.
	scene.add( particleGroup.mesh );

	function addSpotLight(x, z) {
		var spotlight = new THREE.SpotLight( 0xffffff, 0.8 );
			spotlight.position.set( 0, 0, 0 );
			spotlight.target.position.set(x,40,z);
			spotlight.castShadow = true;
			spotlight.shadowMapWidth = 1024;
			//spotlight.shadowCameraVisible = true;
			scene.add( spotlight );
	}

	addSpotLight(100, 0);
	addSpotLight(-100, 0);
	addSpotLight(0, 100);
	addSpotLight(0, -100);

	var above_spotlight = new THREE.SpotLight( 0xffffff, 0.2 );
	above_spotlight.position.set( 0, 800, 0 );
	above_spotlight.castShadow = true;
	above_spotlight.shadowMapWidth = 1024;
	//above_spotlight.shadowCameraVisible = true;
	scene.add( above_spotlight );

	this.update = function() {
		particleGroup.tick( clock.getDelta() );
	}
}