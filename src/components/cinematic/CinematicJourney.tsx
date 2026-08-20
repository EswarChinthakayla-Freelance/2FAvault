import { CSSProperties, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Download, QrCode, ShieldCheck, Smartphone } from 'lucide-react';
import { VaultLoopMark } from '../brand/VaultLoopMark';
import { Button } from '../ui/button';
import { CINEMATIC_MOTION, CINEMATIC_SCENES, CinematicSceneId } from '../../content/cinematic-scenes';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useScrollTimeline } from '../../hooks/useScrollTimeline';
import { LATEST_RELEASE } from '../../data/releases';

const clamp = (value: number) => Math.min(1, Math.max(0, value));
const smoothstep = (value: number) => value * value * (3 - 2 * value);

function SceneVisual({ id }: { id: CinematicSceneId }) {
  if (id === 'scanner') return <div className="cinematic-scanner"><QrCode aria-hidden="true" /></div>;
  if (id === 'recovery') return <div className="cinematic-code-stack">{['•••• •••• 2081', '•••• •••• 7493', 'USED •••• 5510'].map((code) => <span key={code}>{code}</span>)}</div>;
  if (id === 'spaces') return <div className="cinematic-orbits">{['Personal', 'Work', 'Development', 'Finance'].map((space) => <span key={space}>{space}</span>)}</div>;
  if (id === 'security') return <div className="cinematic-architecture"><span><Smartphone />Device</span><i>Encrypted payloads</i><span><Cloud />Cloud</span></div>;
  if (id === 'backup') return <div className="cinematic-transfer"><Smartphone /><span><ShieldCheck />Encrypted vault</span><Smartphone /></div>;
  if (id === 'download') return <div className="cinematic-release"><VaultLoopMark size={72} /><strong>v{LATEST_RELEASE.version}</strong><span>{LATEST_RELEASE.apkUrl ? 'APK available' : 'APK coming soon'}</span></div>;
  return <div className="cinematic-phone"><div className="cinematic-phone-bar">2FA Vault <ShieldCheck /></div><div className="cinematic-account"><span>Example account</span><strong>482 915</strong><i>24</i></div><div className="cinematic-account subdued"><span>Example service</span><strong>891 042</strong></div></div>;
}

export function CinematicJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const progress = useScrollTimeline(sectionRef, !reducedMotion);
  const activeIndex = CINEMATIC_SCENES.findIndex((scene) => progress >= scene.start && progress <= scene.end);
  const resolvedIndex = activeIndex < 0 ? CINEMATIC_SCENES.length - 1 : activeIndex;

  if (reducedMotion) {
    return <section id="features" className="cinematic-fallback" aria-label="Product journey">{CINEMATIC_SCENES.map((scene) => <article key={scene.id}><SceneVisual id={scene.id} /><div><span>{scene.eyebrow}</span><h2>{scene.title}</h2><p>{scene.description}</p></div></article>)}</section>;
  }

  return (
    <section ref={sectionRef} id="features" className="cinematic-journey" aria-label="Enter the 2FA Vault product journey">
      <div className="cinematic-stage">
        <div className="cinematic-field" style={{ transform: `translate3d(0, ${progress * -20}px, 0) scale(${1 + progress * 0.04})` }} />
        <div className="cinematic-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>
        <div className="cinematic-world" style={{ '--journey-rotation': `${(progress - 0.5) * CINEMATIC_MOTION.rotation}deg` } as CSSProperties}>
          <div className="cinematic-loop" style={{ opacity: clamp(1 - progress * 5), transform: `translate(-50%, -50%) scale(${1 + progress * 2.2})` }}><VaultLoopMark size={150} /></div>
          {CINEMATIC_SCENES.map((scene, index) => {
            const local = smoothstep(clamp((progress - scene.start) / Math.max(0.001, scene.end - scene.start)));
            const distance = index - resolvedIndex;
            const opacity = clamp(1 - Math.abs(distance) * 1.4);
            return <div key={scene.id} className="cinematic-visual" aria-hidden="true" style={{ opacity, transform: `translate3d(${distance * 34}vw, ${(0.5 - local) * 30}px, ${-Math.abs(distance) * CINEMATIC_MOTION.depth}px) scale(${1 - Math.abs(distance) * 0.14})` }}><SceneVisual id={scene.id} /></div>;
          })}
        </div>
        <div className="cinematic-copy">
          {CINEMATIC_SCENES.map((scene, index) => {
            const local = clamp((progress - scene.start) / Math.max(0.001, scene.end - scene.start));
            const opacity = index === resolvedIndex ? Math.min(1, local * 5, (1 - local) * 5 + (index === CINEMATIC_SCENES.length - 1 ? 1 : 0)) : 0;
            return <article key={scene.id} style={{ opacity, transform: `translateY(${(1 - local) * 24}px)` }} aria-hidden={index !== resolvedIndex}>
              <span>{scene.eyebrow}</span>{index === 0 ? <h1>{scene.title}</h1> : <h2>{scene.title}</h2>}<p>{scene.description}</p>
              {scene.id === 'entry' && <div className="cinematic-actions"><Link to="/download"><Button size="lg"><Download />{LATEST_RELEASE.apkUrl ? 'Download APK' : 'View Android release'}</Button></Link><Link to="/security"><Button size="lg" variant="outline">Explore security</Button></Link></div>}
              {scene.id === 'download' && <div className="cinematic-actions"><Link to="/download"><Button size="lg"><Download />Release details</Button></Link><Link to="/changelog"><Button size="lg" variant="outline">View changelog</Button></Link></div>}
            </article>;
          })}
        </div>
        <div className="cinematic-scroll-cue" aria-hidden="true"><span>Scroll to enter</span><i /></div>
      </div>
      <div className="sr-only">{CINEMATIC_SCENES.map((scene) => <div key={scene.id}><h2>{scene.title}</h2><p>{scene.description}</p></div>)}</div>
    </section>
  );
}
