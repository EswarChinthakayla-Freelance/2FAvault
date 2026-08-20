import { RefObject, useEffect, useState } from 'react';

const clamp = (value: number) => Math.min(1, Math.max(0, value));

export function useScrollTimeline(ref: RefObject<HTMLElement | null>, enabled = true) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const element = ref.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const distance = Math.max(1, element.offsetHeight - window.innerHeight);
      setProgress(clamp(-rect.top / distance));
    };
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [enabled, ref]);

  return progress;
}
