'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 14;
    const group = new THREE.Group();
    scene.add(group);

    const mobile = window.innerWidth < 760;
    const N = mobile ? 55 : 130;
    const pos = new Float32Array(N * 3);
    const vel: number[][] = [];
    for (let i = 0; i < N; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 26;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      vel.push([(Math.random() - 0.5) * 0.012, (Math.random() - 0.5) * 0.012, (Math.random() - 0.5) * 0.006]);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pts = new THREE.Points(
      geo,
      new THREE.PointsMaterial({ color: 0x8fd8ff, size: mobile ? 0.09 : 0.075, transparent: true, opacity: 0.85 })
    );
    group.add(pts);

    const accGeo = new THREE.BufferGeometry();
    accGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array([-4, 1.5, -1, 3.5, -1, 0, 0.5, 2.5, -2]), 3)
    );
    const accMat = new THREE.PointsMaterial({ color: 0x00f0ff, size: 0.28, transparent: true, opacity: 1 });
    group.add(new THREE.Points(accGeo, accMat));

    const linePos = new Float32Array(N * N * 6);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
    const lines = new THREE.LineSegments(
      lineGeo,
      new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.16 })
    );
    group.add(lines);

    const mouse = { x: 0, y: 0 };
    const scroll = { p: 0 };
    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX / window.innerWidth - 0.5;
      mouse.y = e.clientY / window.innerHeight - 0.5;
    };
    const onScroll = () => {
      const h = document.documentElement;
      scroll.p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    };
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    onResize();

    let raf = 0;
    const TH = mobile ? 3.4 : 4.2;
    const anim = (t: number) => {
      raf = requestAnimationFrame(anim);
      if (document.hidden) return;
      const p = (geo.attributes.position as THREE.BufferAttribute).array as Float32Array;
      for (let k = 0; k < N; k++) {
        p[k * 3] += vel[k][0];
        p[k * 3 + 1] += vel[k][1];
        p[k * 3 + 2] += vel[k][2];
        if (p[k * 3] > 13) p[k * 3] = -13;
        if (p[k * 3] < -13) p[k * 3] = 13;
        if (p[k * 3 + 1] > 8) p[k * 3 + 1] = -8;
        if (p[k * 3 + 1] < -8) p[k * 3 + 1] = 8;
      }
      (geo.attributes.position as THREE.BufferAttribute).needsUpdate = true;

      const lp = (lineGeo.attributes.position as THREE.BufferAttribute).array as Float32Array;
      let li = 0;
      for (let a = 0; a < N; a++) {
        for (let b = a + 1; b < N; b++) {
          const dx = p[a * 3] - p[b * 3];
          const dy = p[a * 3 + 1] - p[b * 3 + 1];
          const dz = p[a * 3 + 2] - p[b * 3 + 2];
          if (dx * dx + dy * dy + dz * dz < TH * TH && li < linePos.length - 6) {
            lp[li++] = p[a * 3];
            lp[li++] = p[a * 3 + 1];
            lp[li++] = p[a * 3 + 2];
            lp[li++] = p[b * 3];
            lp[li++] = p[b * 3 + 1];
            lp[li++] = p[b * 3 + 2];
          }
        }
      }
      for (let z = li; z < linePos.length; z++) lp[z] = 9999;
      (lineGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;

      group.rotation.y += (mouse.x * 0.5 + scroll.p * 1.2 - group.rotation.y) * 0.04;
      group.rotation.x += (mouse.y * 0.35 - group.rotation.x) * 0.04;
      camera.position.y = -scroll.p * 4;
      accMat.size = 0.24 + Math.sin(t * 0.003) * 0.06;
      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(anim);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      geo.dispose();
      accGeo.dispose();
      lineGeo.dispose();
      (pts.material as THREE.Material).dispose();
      accMat.dispose();
      (lines.material as THREE.Material).dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas id="bg3d" ref={canvasRef} aria-hidden="true" />;
}
