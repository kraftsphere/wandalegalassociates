// "use client"; // Ensure this is a client-side component

// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import Lenis from "@studio-freight/lenis";

// const ThreeJSScene = () => {
//   const sceneRef = useRef(null);
//   const cameraRef = useRef(null);
//   const rendererRef = useRef(null);
//   const cubeRef = useRef(null);

//   useEffect(() => {
//     // Create Lenis for smooth scroll
//     const lenis = new Lenis({
//       duration: 0.8,
//       easing: (t) => 1 - Math.pow(2 - t, 6),
//       smoothWheel: true,
//       smoothTouch: true,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       rendererRef.current.render(sceneRef.current, cameraRef.current); // Render the scene
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     // Scene Setup
//     const scene = new THREE.Scene();
//     sceneRef.current = scene;

//     // Camera Setup
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;
//     cameraRef.current = camera;

//     // WebGLRenderer Setup
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);
//     rendererRef.current = renderer;

//     // Create a Cube
//     const geometry = new THREE.BoxGeometry();
//     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     const cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);
//     cubeRef.current = cube;

//     // Handle Resize Event
//     window.addEventListener("resize", () => {
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//     });

//     // Animate Cube based on Scroll
//     const handleScroll = (e) => {
//       const scrollPercent = lenis.scroll;
//       cube.rotation.x = scrollPercent * Math.PI;
//       cube.rotation.y = scrollPercent * Math.PI;
//     };

//     lenis.on("scroll", handleScroll);

//     // Clean up when component unmounts
//     return () => {
//       lenis.destroy();
//       window.removeEventListener("resize", handleResize);
//       renderer.dispose();
//     };
//   }, []);

//   return <div id="threejs-container" />;
// };

// export default ThreeJSScene;
