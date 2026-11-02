import { useRef, useState } from 'react';
import type { Project } from '../data/projects';

type Video = NonNullable<Project['video']>;

const formatTime = (t: number) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;

// Native <video> with chapter buttons that seek and follow playback.
const DemoVideo = ({ video, title }: { video: Video; title: string }) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [current, setCurrent] = useState(0);

  const onTimeUpdate = () => {
    const t = ref.current?.currentTime ?? 0;
    // Last chapter whose start is behind the playhead.
    let index = 0;
    video.chapters.forEach((c, i) => {
      if (t >= c.time) index = i;
    });
    setCurrent(index);
  };

  const seek = (time: number) => {
    const el = ref.current;
    if (!el) return;
    el.currentTime = time;
    void el.play().catch(() => {
      // Autoplay can be blocked; the seek still applies.
    });
  };

  return (
    <figure className="reveal">
      <div className="relative">
        <div aria-hidden="true" className="absolute -inset-6 -z-10 bg-[radial-gradient(ellipse_at_50%_50%,var(--glow-strong),transparent_65%)] blur-2xl opacity-40" />
        <div className="rounded-2xl border border-line overflow-hidden bg-muted shadow-2xl shadow-black/30">
          <video
            ref={ref}
            controls
            playsInline
            muted
            preload="metadata"
            poster={video.poster}
            onTimeUpdate={onTimeUpdate}
            className="block w-full aspect-[16/9] bg-black"
            aria-label={`${title} — product demo video`}
          >
            {video.sources.map((s) => (
              <source key={s.src} src={s.src} type="video/mp4" media={s.media} />
            ))}
            Your browser does not support embedded video.
          </video>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Video chapters">
        {video.chapters.map((chapter, i) => (
          <button
            key={chapter.label}
            type="button"
            onClick={() => seek(chapter.time)}
            aria-pressed={i === current}
            className={`inline-flex items-center gap-2 h-9 px-3.5 rounded-full border text-small transition-colors ${
              i === current
                ? 'border-accent bg-accent/10 text-accent'
                : 'border-line text-ink-muted hover:border-accent/50 hover:text-ink'
            }`}
          >
            <span className="font-mono text-[11px] opacity-80">{formatTime(chapter.time)}</span>
            {chapter.label}
          </button>
        ))}
      </div>
      <figcaption className="mt-3 font-mono text-xs text-ink-subtle">
        {video.duration} · {video.note}
      </figcaption>
    </figure>
  );
};

export default DemoVideo;
