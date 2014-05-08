function Skybox(scene)
{
	var skyTexture = new THREE.ImageUtils.loadTexture( 'img/skybox.jpg' );
	var geometry = new THREE.PlaneGeometry( 50000, 50000 );
	var gmaterial = new THREE.MeshLambertMaterial( {map: skyTexture, side: THREE.DoubleSide} );
	var planezy = new THREE.Mesh( geometry, gmaterial );
	planezy.position.z = -25000;
	planezy.position.y = 25000;
	scene.add( planezy );
	var planezy2 = new THREE.Mesh( geometry, gmaterial );
	planezy2.position.z = 25000;	
	planezy2.position.y = 25000;
	scene.add( planezy2 );
	var planexy = new THREE.Mesh( geometry, gmaterial );
	planexy.position.x = -25000;
	planexy.position.y = 25000;
	planexy.rotation.y += Math.PI / 2;
	scene.add( planexy );
	var planexy2 = new THREE.Mesh( geometry, gmaterial );
	planexy2.position.x = 25000;
	planexy2.position.y = 25000;
	planexy2.rotation.y += Math.PI / 2;
	scene.add( planexy2 );

	geometry = new THREE.PlaneGeometry( 50000, 50000 );
	var planetop = new THREE.Mesh( geometry, gmaterial );
	planetop.position.y = 25000;
	planetop.rotation.x += Math.PI / 2;
	scene.add( planetop );

}