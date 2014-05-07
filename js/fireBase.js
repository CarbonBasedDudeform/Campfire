function fireBase(scene)
{
	var geometry = new THREE.CylinderGeometry( 5, 5, 200, 32 );
	var material = new THREE.MeshBasicMaterial( {color: '#4C1A00'} );
	for (var i = 0; i < 10; i++)
	{
		var cylinder = new THREE.Mesh( geometry, material );
		cylinder.position.y = -25;
		cylinder.rotation.z = (2*Math.PI) * (Math.random() * (1 - 0.0) + 0.0);
		cylinder.rotation.x = (Math.PI / 2) * (Math.random() * (1 - 0.6) + 0.6);
		scene.add( cylinder );
	}
}