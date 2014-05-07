function Ground(scene)
{
	//for now generate a flat green plane
	var groundTexture = new THREE.ImageUtils.loadTexture( 'img/grass.jpg' );
	var geometry = new THREE.PlaneGeometry(1000000, 1000000, 100, 100 );
	var grmaterial = new THREE.MeshLambertMaterial({ color: 'green', side: THREE.BackSide });//THREE.MeshBasicMaterial( {map: groundTexture, side: THREE.DoubleSide} );
	var gr = new THREE.Mesh( geometry, grmaterial );
	gr.position.y = -45;
	gr.rotation.x = Math.PI / 2;

	scene.add( gr );
}