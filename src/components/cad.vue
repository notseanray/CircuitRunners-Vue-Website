<template>
    <div id="cadCanvas"></div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import Stats from "three/examples/jsm/libs/stats.module";

//get the current directory in the browser
var currentDir = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
);
console.log(currentDir);
if (currentDir == "cad") {
    const scene = new THREE.Scene();
    scene.add(new THREE.AxesHelper(5));

    const light = new THREE.SpotLight();
    light.position.set(50, 50, 50);
    scene.add(light);

    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer();
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const envTexture = new THREE.CubeTextureLoader().load(
        "../assets/Backdrop1.png"
    );
    envTexture.mapping = THREE.CubeReflectionMapping;

    const material = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        envMap: envTexture,
        metalness: 0.75,
        roughness: 0.1,
        opacity: 1,
        transparent: false,
        transmission: 0.99,
        clearcoat: 1.0,
        clearcoatRoughness: 0.25,
    });

    const loader = new STLLoader();
    loader.load(
        "models/3dBenchy.stl",
        function (geometry) {
            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        (error) => {
            console.log(error);
        }
    );

    window.addEventListener("resize", onWindowResize, false);
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        render();
    }

    const stats = Stats();
    document.body.appendChild(stats.dom);

    function animate() {
        requestAnimationFrame(animate);

        controls.update();

        render();

        stats.update();
    }

    function render() {
        renderer.render(scene, camera);
    }

    animate();
}
</script>
