import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';

// Crie uma cena
const scene = new THREE.Scene();

// Crie uma câmera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Crie um renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const mtlLoader = new MTLLoader();
// Carregue o material e o modelo
mtlLoader.load('materials.mtl', function(materials) {
  materials.preload();

  const objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load('livro.obj', function(object) {
    scene.add(object);
  });
});

// Adicione uma luz
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 0, 10);
scene.add(light);

// Renderize a cena
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

