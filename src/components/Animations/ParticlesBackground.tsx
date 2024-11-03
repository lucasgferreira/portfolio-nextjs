// pages/index.js

import { useEffect, useRef } from "react";
import * as THREE from "three";

const ParticleAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // Criação de partículas
    const particleCount = 1000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const color = new THREE.Color();

    for (let i = 0; i < particleCount; i++) {
      // Posições
      positions[i * 3] = (Math.random() - 0.5) * 200; // X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200; // Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200; // Z

      // Cores
      color.setHSL(Math.random(), 0.5, 0.5); // HSL randomizado
      colors[i * 3] = color.r; // R
      colors[i * 3 + 1] = color.g; // G
      colors[i * 3 + 2] = color.b; // B
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particles.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 1,
      vertexColors: true,
    });
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 100;

    // Animação
    const animate = () => {
      requestAnimationFrame(animate);

      // Atualizar a posição das partículas
      const positions = particleSystem.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] -= 0.1; // Move partículas para baixo
        if (positions[i + 1] < -100) positions[i + 1] = 100; // Reinicia a posição
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Redimensionar
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onWindowResize);

    // Limpeza
    return () => {
      window.removeEventListener("resize", onWindowResize);
      canvasRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={canvasRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default ParticleAnimation;
