function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rgb(r, g, b) {
    return new THREE.Vector3(r, g, b);
}
document.addEventListener("DOMContentLoaded", function(e) {

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement )

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    let vCheck = false;

    camera.position.z = 5;

    var randomisePosition = new THREE.Vector2(1, 2);

    var R = function(x, y, t) {
        return( Math.floor(192 + 64*Math.cos( (x*x-y*y)/300 + t )) );
    }

    var G = function(x, y, t) {
        return( Math.floor(192 + 64*Math.sin( (x*x*Math.cos(t/4)+y*y*Math.sin(t/3))/300 ) ) );
    }

    var B = function(x, y, t) {
        return( Math.floor(192 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) ));
    }
    let sNoise = document.querySelector('#snoise-function').textContent
    let geometry = new THREE.PlaneGeometry(window.innerWidth / 2, 400, 100, 100);
    let material = new THREE.ShaderMaterial({
        uniforms: {
            u_bg: {type: 'v3', value: rgb(35, 32, 37)},
            u_bgMain: {type: 'v3', value: rgb(35, 32, 37)},
            u_color1: {type: 'v3', value: rgb(0,194, 137)},
            u_color2: {type: 'v3', value: rgb(245,79, 78)},
            u_time: {type: 'f', value: 300},
            u_randomisePosition: { type: 'v2', value: randomisePosition }
        },
        fragmentShader: sNoise + document.querySelector('#fragment-shader').textContent,
        vertexShader: sNoise + document.querySelector('#vertex-shader').textContent,
    });

    let mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(-200, -370, -280);
    mesh.scale.multiplyScalar(5);
    mesh.rotationX = -1.0;
    mesh.rotationY = 0.0;
    mesh.rotationZ = 0.1;
    scene.add(mesh);

    renderer.render( scene, camera );
    let t = 0;
    let j = 0;
    let x = randomInteger(0, 32);
    let y = randomInteger(0, 32);
    const animate = function () {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
        //mesh.material.uniforms.u_randomisePosition.value = new THREE.Vector2(j, j);
        document.body.addEventListener('mousemove', (e) => {

          //mesh.material.uniforms.u_bgMain.value.x = e.clientX;
          //mesh.material.uniforms.u_bgMain.value.y = e.clientY / 5;
          mesh.rotation.z = e.clientY / 800
          mesh.position.x = e.clientX / 4
          //material.uniforms.u_bgMain.value.x = e.clientY;
        })
        mesh.material.uniforms.u_color1.value = new THREE.Vector3(R(1,1,1), G(x,y,t/2), B(x,y,t/2));
        mesh.material.uniforms.u_color1.value.x = 84
        mesh.material.uniforms.u_color1.value.y = 22
        mesh.material.uniforms.u_color1.value.z = 72
        //console.log(mesh.material.uniforms.u_color1.value)
        mesh.material.uniforms.u_time.value = t;
        if(t % 0.1 == 0) {
            if(vCheck == false) {
                x -= 1;
                if(x <= 0) {
                    vCheck = true;
                }
            } else {
                x += 1;
                if(x >= 32) {
                    vCheck = false;
                }

            }
        }

        // Increase t by a certain value every frame
        j = j + 0.25;
        t = t + 0.010;
    };
    animate();

});
