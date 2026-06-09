'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import Section from './Section';
import { INTRO_VIDEO } from '@/lib/site';

export default function IntroVideo() {
  const [activated, setActivated] = useState(false);

  return (
    <Section
      id="intro-video"
      eyebrow="Intro"
      title="A short hello."
      intro="A quick video introduction — who I am, what I build, and how I work."
    >
      <div className="reveal">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-paper-line bg-ink shadow-sm">
          {INTRO_VIDEO.type === 'local' && activated && (
            <video
              src={INTRO_VIDEO.src}
              controls
              playsInline
              preload="metadata"
              poster={INTRO_VIDEO.poster}
              className="absolute inset-0 h-full w-full"
            />
          )}

          {INTRO_VIDEO.type === 'embed' && activated && (
            <iframe
              src={INTRO_VIDEO.src}
              title="William Nasoni — intro video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          )}

          {(!activated || INTRO_VIDEO.type === 'placeholder') && (
            <button
              type="button"
              onClick={() => setActivated(true)}
              disabled={INTRO_VIDEO.type === 'placeholder'}
              className="group absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ink via-ink-soft to-accent-hover text-paper transition-opacity disabled:cursor-not-allowed"
              aria-label="Play intro video"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-paper/10 backdrop-blur transition-transform group-hover:scale-110">
                <Play size={28} className="ml-1 fill-paper text-paper" />
              </span>
              <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-paper/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-paper backdrop-blur">
                {INTRO_VIDEO.type === 'placeholder' ? 'Video coming soon' : 'Play intro'}
              </span>
            </button>
          )}
        </div>

        {INTRO_VIDEO.type === 'placeholder' && (
          <p className="mt-3 text-sm text-ink-subtle">
            {/* TODO: Add a video. Set INTRO_VIDEO in lib/site.ts to either { type: 'local', src: '/video/intro.mp4' } or { type: 'embed', src: 'https://www.youtube.com/embed/<id>' } */}
            Placeholder — the intro video will live here.
          </p>
        )}
      </div>
    </Section>
  );
}
