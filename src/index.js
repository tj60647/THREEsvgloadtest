import * as THREE from "three";
//const OrbitControls = require("three-orbit-controls")(THREE);

global.THREE = THREE;

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color("blue");

// Camera setup
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  8000
);
camera.position.set(0, 0, 40);

// Create Light
const createLight = (intensity = 1, color = 0xffffff) => {
  return new THREE.PointLight(color, intensity);
};
// Light
const pointLight1 = createLight(0.8);
pointLight1.position.set(60, 60, 60);
scene.add(pointLight1);

// Renderer setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const app = document.getElementById("app");
app.appendChild(renderer.domElement);

// Camera controls setup
//const cameraControls = new OrbitControls(camera, renderer.domElement);
//cameraControls.target.set(0, 0, 0);

// Create Sphere
const createSphere = (radius = 10, color = 0xffffff) => {
  const geometry = new THREE.SphereBufferGeometry(radius, 20, 20);
  const material = new THREE.MeshPhongMaterial({
    shininess: 50,
    color
  });

  return new THREE.Mesh(geometry, material);
};

const testSphere = createSphere();
scene.add(testSphere);

const cube = new THREE.BoxGeometry(18, 18, 18, 4, 4, 4);
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true
});
const cubeMesh = new THREE.Mesh(cube, cubeMaterial);
scene.add(cubeMesh);

const animate = () => {
  requestAnimationFrame(animate);
  //stepCamera(camera);
  //stepMotion();
  renderer.render(scene, camera);
};

animate();
