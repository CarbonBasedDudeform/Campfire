function Skybox(scene)
{
	var skyTexture = new THREE.ImageUtils.loadTexture( 'img/skybox.jpg' );
	var geometry = new THREE.PlaneGeometry( 1000000, 1000000 );
	var gmaterial = new THREE.MeshLambertMaterial( {map: skyTexture, side: THREE.DoubleSide} );
	var planezy = new THREE.Mesh( geometry, gmaterial );
	planezy.position.z = -500000;
	planezy.position.y = 500000;
	scene.add( planezy );
	var planezy2 = new THREE.Mesh( geometry, gmaterial );
	planezy2.position.z = 500000;	
	planezy2.position.y = 500000;
	scene.add( planezy2 );
	var planexy = new THREE.Mesh( geometry, gmaterial );
	planexy.position.x = -500000;
	planexy.position.y = 500000;
	planexy.rotation.y += Math.PI / 2;
	scene.add( planexy );
	var planexy2 = new THREE.Mesh( geometry, gmaterial );
	planexy2.position.x = 500000;
	planexy2.position.y = 500000;
	planexy2.rotation.y += Math.PI / 2;
	scene.add( planexy2 );

	geometry = new THREE.PlaneGeometry( 1000000, 1000000 );
	var planetop = new THREE.Mesh( geometry, gmaterial );
	planetop.position.y = 1000000;
	planetop.rotation.x += Math.PI / 2;
	scene.add( planetop );

}