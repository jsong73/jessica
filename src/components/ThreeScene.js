import React ,{ useRef , useEffect} from "react";
import * as THREE from 'three';
import "../styles/ThreeScene.css"

const ThreeScene = () => {

const sceneRef = useRef();
  
useEffect(() => {
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45,
    300 / 300,
    0.1,
    1000
);
      
// camera position for shape to show (xyz)
camera.position.set(0, 0, 50);
camera.lookAt(new THREE.Vector3(0, 0, 0));

// alpha true for transparent background
const renderer = new THREE.WebGLRenderer({ alpha: true });
 renderer.setSize(500, 300); 

// clear out the canvas element duplicate 
while (sceneRef.current.firstChild) {
sceneRef.current.removeChild(sceneRef.current.firstChild);
}
sceneRef.current.appendChild(renderer.domElement);

const particles = new THREE.Group();

const particleCount = 100;
const particleSize = 0.5;


const particleMaterial = new THREE.PointsMaterial({
    color:  0xffffff,
    size: particleSize,
  });


for (let i = 0; i < particleCount; i++) {
  const particle = new THREE.Vector3(
    Math.random() * 40 - 20,
    Math.random() * 40 - 20,
    Math.random() * 40 - 20
  );
  particles.add(new THREE.Points(new THREE.BufferGeometry().setFromPoints([particle]), particleMaterial));
}

scene.add(particles);

const animate = () => {
  requestAnimationFrame(animate);

 // Rotation
  particles.rotation.x += 0.001;
  particles.rotation.y += 0.001;
  

  renderer.render(scene, camera);
};


    animate();
  }, []);

  return <div ref={sceneRef} className="three-scene-container" />;
};

export default ThreeScene;