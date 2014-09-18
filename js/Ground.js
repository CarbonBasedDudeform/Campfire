function Ground(scene)
{
	//for now generate a flat green plane
	var groundTexture = new THREE.ImageUtils.loadTexture( 'img/grass.jpg' );
	var geometry = new THREE.Geometry();

	var _yOffset = -35;

	_vertices = new Array();
	_vertices.push(new THREE.Vector3(-30000, _yOffset, -30000));
	_vertices.push(new THREE.Vector3(0, _yOffset, 0));
	_vertices.push(new THREE.Vector3(30000, _yOffset, -30000));

	_vertices.push(new THREE.Vector3(-30000, _yOffset, 30000));
	_vertices.push(new THREE.Vector3(0, _yOffset, 0));
	_vertices.push(new THREE.Vector3(-30000, _yOffset, -30000));

	_vertices.push(new THREE.Vector3(30000, _yOffset, 30000));
	_vertices.push(new THREE.Vector3(0, _yOffset, 0));
	_vertices.push(new THREE.Vector3(30000, _yOffset, -30000));

	_vertices.push(new THREE.Vector3(30000, _yOffset, 30000));
	_vertices.push(new THREE.Vector3(0, _yOffset, 0));
	_vertices.push(new THREE.Vector3(-30000, _yOffset, 30000));

	geometry.vertices = diamond_square_generate(_vertices,9);

	//add the faces by breaking down the number of vertices into groups of three for each triangle
	for (var i = 0; i < geometry.vertices.length; i += 3) {
		geometry.faces.push(new THREE.Face3(i, i+1, i+2));
	}

	geometry.computeFaceNormals();
	geometry.computeVertexNormals();
	var grmaterial = new THREE.MeshLambertMaterial({ color: 'green', side: THREE.DoubleSide }); //THREE.MeshBasicMaterial( {wireframe: true, side: THREE.DoubleSide} ); 

	var gr = new THREE.Mesh( geometry, grmaterial );
	gr.receiveShadow = true;

	scene.add( gr );

	function diamond_square_generate(vertices, depth) {
		var offset;
		var c = 15;
		for (var i = 0; i < depth; i++) {
			var newVerts = new Array();
			var newen = new THREE.Vector3();
			var centreOfTheUnivsere = new THREE.Vector3(0,-45,0);
			//triangles are made up going in a clockwise manner
			//so by convention we know the second vertex of the triangle, v+1, will be the centre one
			offset = Math.random() * c * i;
			for (var v = 0; v < vertices.length; v += 3) {
				newen = new THREE.Vector3();

				newen.addVectors(vertices[v], vertices[v+2]);
				newen.divideScalar(2);
				console.log(((vertices[v+1].distanceTo(centreOfTheUnivsere))));
				vertices[v+1].y -= offset;
				newen.y -= offset;
				
				newVerts.push(vertices[v+1]);
				newVerts.push(newen);
				newVerts.push(vertices[v]);

				newVerts.push(vertices[v+2]);
				newVerts.push(newen);
				newVerts.push(vertices[v+1]);				
			}

			vertices = newVerts;
		}

		return newVerts;
	}
}