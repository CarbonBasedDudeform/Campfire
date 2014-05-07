function Skybox(scene)
{
	var skyTexture = new THREE.ImageUtils.loadTexture( 'img/skybox.jpg' );
	var geometry = new THREE.PlaneGeometry( 1000000, 1000000 );
	var gmaterial = new THREE.MeshBasicMaterial( {map: skyTexture, side: THREE.DoubleSide} );
	var planezy = new THREE.Mesh( geometry, gmaterial );
	planezy.position.z = -500000;
	scene.add( planezy );
	var planezy2 = new THREE.Mesh( geometry, gmaterial );
	planezy2.position.z = 500000;
	scene.add( planezy2 );
	var planexy = new THREE.Mesh( geometry, gmaterial );
	planexy.position.x = -500000;
	planexy.rotation.y += Math.PI / 2;
	scene.add( planexy );
	var planexy2 = new THREE.Mesh( geometry, gmaterial );
	planexy2.position.x = 500000;
	planexy2.rotation.y += Math.PI / 2;
	scene.add( planexy2 );
	var planetop = new THREE.Mesh( geometry, gmaterial );
	planetop.position.y = 500000;
	planetop.rotation.x += Math.PI / 2;
	scene.add( planetop );
	var planebot = new THREE.Mesh( geometry, gmaterial );
	planebot.position.y = -500000;
	planebot.rotation.x += Math.PI / 2;
	scene.add( planebot );
}