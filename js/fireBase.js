function fireBase(scene)
{
	vertShader = document.getElementById('shader-vs').innerHTML;

	fragShader = document.getElementById('shader-fs').innerHTML;

	attributes = { 
		rand: {
			type: 'f',
			value: []
		}};

	uniforms = {
	  scale: {type: 'f', value: 1.0},

	  alpha: {type: 'f', value: 1.0}

	};



	material = new THREE.ShaderMaterial({

	  uniforms: uniforms,

	  attributes: attributes,

	  vertexShader: vertShader,

	  fragmentShader: fragShader,

	  transparent: true

	});

	var geometry = new THREE.CylinderGeometry( 5, 5, 200, 32 );
	var vertices = geometry.vertices;
	var values = attributes.rand.value
	for(var v = 0; v < vertices.length; v++) {
	    values.push(1.0 + Math.random());
	}

	for (var i = 0; i < 10; i++)
	{
		var cylinder = new THREE.Mesh( geometry, material );
		cylinder.position.y = -25;
		cylinder.rotation.z = (2*Math.PI) * (Math.random() * (1 - 0.2) + 0.2);
		cylinder.rotation.x = (Math.PI / 2);// * (Math.random() * (1 - 0.6) + 0.6);
		scene.add( cylinder );
	}
}