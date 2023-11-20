import React ,{ useRef , useEffect} from "react";
import * as THREE from 'three';


const ThreeScene = () => {

const sceneRef = useRef();
  
useEffect(() => {
const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(
    45,
    400 / 300,
    0.1,
    1000
);
      
// camera position for shape to show 
camera.position.set(0, 0, 35); 
camera.lookAt(new THREE.Vector3(0, 0, 0));

// alpha true for transparent background
const renderer = new THREE.WebGLRenderer({ alpha: true });
 renderer.setSize(400, 300); 

// clear out the canvas element duplicate 
while (sceneRef.current.firstChild) {
sceneRef.current.removeChild(sceneRef.current.firstChild);
}
sceneRef.current.appendChild(renderer.domElement);

// radius, diameter, radialSegments, tubularSegments
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);

const uniforms = {
    u_time: { value: 0 }
};

const material = new THREE.ShaderMaterial({
    wireframe: true,
    uniforms: uniforms,
    vertexShader: `
    uniform float u_time;
    void main() {
    vec3 pos = vec3(position.x, position.y, sin(u_time + position.y) + position.z);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
    `,
    fragmentShader: `
    void main() {
        gl_FragColor = vec4(245.0 / 255.0, 241.0 / 255.0, 237.0 / 255.0, 0.6);
    }`
});



const mesh = new THREE.Mesh(geometry, material);

mesh.rotation.x = 6;
mesh.rotation.y = -6;
mesh.rotation.z = 3;

scene.add(mesh);

const clock = new THREE.Clock();

const animate = () => {
requestAnimationFrame(animate);

const elapsedTime = clock.getElapsedTime();
uniforms.u_time.value = elapsedTime;

renderer.render(scene, camera);
};

animate();

  
// Resize handler
const handleResize = () => {
const newWidth = 400;
const newHeight = 300;
  
camera.aspect = newWidth / newHeight;
camera.updateProjectionMatrix();
  
renderer.setSize(newWidth, newHeight);
};
  
window.addEventListener("resize", handleResize);
  
return () => {
window.removeEventListener("resize", handleResize);
  
};
}, []);
    return <div ref={sceneRef} />;
  };
  
export default ThreeScene;