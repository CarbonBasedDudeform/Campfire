function Tree( scene, x, z , shadow) {
	var init = 50;
	var initLength = 800;
	
	for (var i = 0; i < 1; i++)
	{	
		var w = init;
		var l = initLength;
		var geom = new THREE.CylinderGeometry(w, w, l, 4); //lower the better, improves performance and looks more 'tree-like'
		var mat = new THREE.MeshLambertMaterial( {color: 'brown'});
		var cyl = new THREE.Mesh(geom, mat);
		cyl.position.y = l * i;
		cyl.position.x = x;
		cyl.position.z = z;
		cyl.castShadow = shadow;
		scene.add(cyl);

		var geometry;
		if (shadow) geometry = new THREE.SphereGeometry( 500, 32, 32 );
		else geometry = new THREE.SphereGeometry( 500, 8, 8 );
		var material;
		if (shadow) material = new THREE.MeshLambertMaterial( {color: 'green'} );
		else material = new THREE.MeshBasicMaterial( {color: '#101010'});
		var sphere = new THREE.Mesh( geometry, material );
		sphere.position.set(x, initLength, z);
		sphere.castShadow = shadow;
		scene.add( sphere );
	}

	this.generate = function(depth) {

	}
}