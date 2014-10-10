function Mountain(scene, x, y, z, height, depth, width)
{
	//for now generate a flat green plane
	var groundTexture = new THREE.ImageUtils.loadTexture( 'img/grass.jpg' );
	var geometry = new THREE.Geometry();

	var _yOffset = -400 + (Math.random() * 10);
	var _height = height;
	var _x = x;
	var _z = z;

	_vertices = new Array();

	_vertices.push(new THREE.Vector3(x+width, _yOffset, z-depth));
	_vertices.push(new THREE.Vector3(x, _yOffset, z));
	_vertices.push(new THREE.Vector3(x-width, _yOffset, z-depth));

	_vertices.push(new THREE.Vector3(x-width, _yOffset, z-depth));	
	_vertices.push(new THREE.Vector3(x, _yOffset, z));
	_vertices.push(new THREE.Vector3(x-width, _yOffset, z+depth));

	_vertices.push(new THREE.Vector3(x+width, _yOffset, z-depth));	
	_vertices.push(new THREE.Vector3(x, _yOffset, z));
	_vertices.push(new THREE.Vector3(x+width, _yOffset, z+depth));

	_vertices.push(new THREE.Vector3(x-width, _yOffset, z+depth));
	_vertices.push(new THREE.Vector3(x, _yOffset, z));
	_vertices.push(new THREE.Vector3(x+width, _yOffset, z+depth));
	
	var _depth = 6;
	geometry.vertices = diamond_square_generate(_vertices,_depth, _depth);

	//add the faces by breaking down the number of vertices into groups of three for each triangle
	for (var i = 0; i < geometry.vertices.length; i += 3) {
		geometry.faces.push(new THREE.Face3(i, i+1, i+2));
	}

	geometry.computeFaceNormals();
	geometry.computeVertexNormals();
	var grmaterial = new THREE.MeshLambertMaterial({ color: 'grey', side: THREE.BackSide });

	var gr = new THREE.Mesh( geometry, grmaterial );
	gr.receiveShadow = true;

	scene.add( gr );

	function diamond_square_generate(vertices, depth, startDepth) {
		if (depth == 0) return vertices;
		//patch of 12 vertices to come in
		//break this down into 4 sets of 12 vertices
		//patch made up of 4 triangles, vertices come in going clock wise,
		//patch of triangles goes coutner clockwise
		//so given v2-------v0
		//           \     /
		//	          \   /
		//			   \ /
		//              v1
		//this would be the first triangle of the patch to come in, with v0 being vertices[0], v1 = vertices[1], v2 = vertices[2]
		//then next triangle would be:
		//	v0
		//	|  -
		//	|    >v1
		//	|  -
		//	v2
		// where, in this case [being the second incoming triangle of the patch], v0 = vertices[3], v1 = vertices[4], v2 = vertices[5]
		// or more generally Vyx = vertices[y+x] where y = the number of triangles done already * 3 and x = the index of the vertex within the current triangle, both starting from 0
		// eg. 1st triangle in, 2nd vertex = 0*3 + 2 = 2, 2nd triangle in, 3rd vertex = 1*3 + 2 = 5

		//first the patch will be broken down to find the diamond points like so
		//	v2----p0----v0
		//	|		    |
		//	p3		    p1
		//	|		    |
		//	v5----p2----v7

		//p0 on diagram
		var midTop = new THREE.Vector3();
		midTop.addVectors(vertices[0], vertices[2]);
		midTop.divideScalar(2);

		//p1 on diagram
		var midRight = new THREE.Vector3();
		midRight.addVectors(vertices[0], vertices[8]);
		midRight.divideScalar(2);

		//p2 on diagram
		var midBot = new THREE.Vector3();
		midBot.addVectors(vertices[8], vertices[5]);
		midBot.divideScalar(2);

		//p3 on diagram
		var midLeft = new THREE.Vector3();
		midLeft.addVectors(vertices[3], vertices[5]);
		midLeft.divideScalar(2);

		var error = -5 + Math.random()*_height*(depth/startDepth);
		//the offset applies to the central point in the patch and is the mean of the height of the four corners plus an error, which is a random amount in a given range
		var offset = (vertices[0].y + vertices[2].y + vertices[5].y + vertices[8].y) / 4;
			offset += error;

		var centralPoint = vertices[1];
			centralPoint.y = offset;

		//now break the patch down further so it's four smaller patches each with 12 vertices
		var patchTopLeftCentral = new THREE.Vector3();
		patchTopLeftCentral.addVectors(midTop, midLeft);
		patchTopLeftCentral.divideScalar(2);

		var topLeftPatch = new Array();
		topLeftPatch.push(midTop);
		topLeftPatch.push(patchTopLeftCentral);
		topLeftPatch.push(vertices[2]);
		
		topLeftPatch.push(vertices[2]);
		topLeftPatch.push(patchTopLeftCentral);
		topLeftPatch.push(midLeft);

		topLeftPatch.push(midLeft);
		topLeftPatch.push(patchTopLeftCentral);
		topLeftPatch.push(centralPoint);

		topLeftPatch.push(centralPoint);
		topLeftPatch.push(patchTopLeftCentral);
		topLeftPatch.push(midTop);

		var patchBottomLeftCentral = new THREE.Vector3();
		patchBottomLeftCentral.addVectors(midLeft, midBot);
		patchBottomLeftCentral.divideScalar(2);

		var bottomLeftPatch = new Array();
		bottomLeftPatch.push(centralPoint);
		bottomLeftPatch.push(patchBottomLeftCentral);
		bottomLeftPatch.push(midLeft);

		bottomLeftPatch.push(midLeft);
		bottomLeftPatch.push(patchBottomLeftCentral);
		bottomLeftPatch.push(vertices[5]);

		bottomLeftPatch.push(vertices[5]);
		bottomLeftPatch.push(patchBottomLeftCentral);
		bottomLeftPatch.push(midBot);

		bottomLeftPatch.push(midBot);
		bottomLeftPatch.push(patchBottomLeftCentral);
		bottomLeftPatch.push(centralPoint);

		var patchBottomRightCentral = new THREE.Vector3();
		patchBottomRightCentral.addVectors(midBot, midRight);
		patchBottomRightCentral.divideScalar(2);

		var bottomRightPatch = new Array();
		bottomRightPatch.push(midRight);
		bottomRightPatch.push(patchBottomRightCentral);
		bottomRightPatch.push(centralPoint);

		bottomRightPatch.push(centralPoint);
		bottomRightPatch.push(patchBottomRightCentral);
		bottomRightPatch.push(midBot);

		bottomRightPatch.push(midBot);
		bottomRightPatch.push(patchBottomRightCentral);
		bottomRightPatch.push(vertices[8]);

		bottomRightPatch.push(vertices[8]);
		bottomRightPatch.push(patchBottomRightCentral);
		bottomRightPatch.push(midRight);

		var patchTopRightCentral = new THREE.Vector3();
		patchTopRightCentral.addVectors(midRight, midTop);
		patchTopRightCentral.divideScalar(2);

		var topRightPatch = new Array();
		topRightPatch.push(vertices[0]);
		topRightPatch.push(patchTopRightCentral);
		topRightPatch.push(midTop);

		topRightPatch.push(midTop);
		topRightPatch.push(patchTopRightCentral);
		topRightPatch.push(centralPoint);

		topRightPatch.push(centralPoint);
		topRightPatch.push(patchTopRightCentral);
		topRightPatch.push(midRight);

		topRightPatch.push(midRight);
		topRightPatch.push(patchTopRightCentral);
		topRightPatch.push(vertices[0]);

		//decrement the depth and recursively call the generate function on all four patches
		depth--;
		topLeftPatch = diamond_square_generate(topLeftPatch, depth, startDepth);
		bottomLeftPatch = diamond_square_generate(bottomLeftPatch, depth, startDepth);
		bottomRightPatch = diamond_square_generate(bottomRightPatch, depth, startDepth);
		topRightPatch = diamond_square_generate(topRightPatch, depth, startDepth);

		var newVerts = topLeftPatch.concat(bottomLeftPatch, bottomRightPatch, topRightPatch);

		return newVerts
	}
}