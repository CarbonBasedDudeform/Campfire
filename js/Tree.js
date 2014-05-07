function Tree( scene, x, z ) {
	var init = 50;
	var initLength = 400;
	
	for (var i = 0; i < 3; i++)
	{	
		var w = init;
		var l = initLength;
		var geom = new THREE.CylinderGeometry(w, w, l, 32);
		var mat = new THREE.MeshLambertMaterial( {color: 'brown'});
		var cyl = new THREE.Mesh(geom, mat);
		cyl.position.y = l * i;
		cyl.position.x = x;
		cyl.position.z = z;
		scene.add(cyl);
	}
}