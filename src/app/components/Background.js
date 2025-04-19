'use client';
import { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const clouds = [
  { src: '/cloud-texture/big-cloud-1.png', w: 1, size: 220, dur: 80 },
  { src: '/cloud-texture/big-cloud-2.png', w: 1, size: 230, dur: 85 },
  { src: '/cloud-texture/medium-cloud-1.png', w: 2, size: 140, dur: 60 },
  { src: '/cloud-texture/medium-cloud-2.png', w: 2, size: 130, dur: 55 },
  { src: '/cloud-texture/medium-cloud-3.png', w: 2, size: 120, dur: 50 },
  { src: '/cloud-texture/small-cloud-3.png', w: 3, size: 80, dur: 35 },
  { src: '/cloud-texture/small-cloud-4.png', w: 3, size: 90, dur: 38 },
  { src: '/cloud-texture/tiny-cloud-1.png', w: 4, size: 50, dur: 25 },
  { src: '/cloud-texture/tiny-cloud-2.png', w: 4, size: 60, dur: 28 },
];
const totalW = clouds.reduce((a, c) => a + c.w, 0);

function pickCloud() {
  let r = Math.random() * totalW;
  for (const c of clouds) {
    if ((r -= c.w) < 0) return c;
  }
  return clouds[clouds.length - 1];
}

export default function Background() {
  const [arr, setArr] = useState(null);
  useEffect(() => {
    setArr(Array.from({ length: 30 }).map((_, i) => {
      const c = pickCloud();
      const scale = 0.8 + Math.random() * 0.5;
      const top = Math.random() * 80;
      const baseDur = c.dur * (0.8 + Math.random() * 0.4);
      const dur = c.w >= 3 ? baseDur * 1.5 : baseDur;
      const initialX = Math.random() * 160 - 30;
      const delay = -((initialX + 30) / 160) * dur;
      return { ...c, scale, top, dur, delay, i, initialX };
    }));
  }, []);
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <Image src="/sky-bg.png" alt="sky" fill style={{objectFit:'cover'}} priority quality={70} />
      {arr && arr.map(cloud => (
        <motion.div
          key={cloud.i}
          initial={{ x: '-30vw', y: 0, opacity: 0 }}
          animate={{ x: '130vw', opacity: [0, 0.7, 0] }}
          transition={{
            x: {
              duration: cloud.dur,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
              delay: cloud.delay
            },
            opacity: {
              duration: cloud.dur,
              times: [0, 0.05, 0.95],
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
              delay: cloud.delay
            }
          }}
          style={{ position: 'absolute', top: `${cloud.top}%`, width: cloud.size * cloud.scale, height: cloud.size * cloud.scale * 0.5 }}
        >
          <Image src={cloud.src} alt="" width={cloud.size * cloud.scale} height={cloud.size * cloud.scale * 0.5} style={{display:'block', opacity:0.7}} quality={70} />
        </motion.div>
      ))}
    </div>
  );
}
