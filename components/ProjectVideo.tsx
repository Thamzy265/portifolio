'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import { PROJECT_VIDEO } from '@/lib/site';

type Props = {
  caption: string;
  note?: string;
  label: string;
};

/**
 * Click-to-play walkthrough. Nothing but the poster image is fetched until the
 * visitor presses play, so the page stays light on a phone connection.
 */
export default function ProjectVideo({ caption, note, label }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="reveal m-0">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-paper-line bg-ink shadow-sm">
        {playing ? (
          <video
            src={PROJECT_VIDEO.src}
            poster={PROJECT_VIDEO.poster}
            controls
            autoPlay
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full"
          >
            Your browser does not support embedded video. {/* eslint-disable-line */}
            <a href={PROJECT_VIDEO.src}>Download the walkthrough instead.</a>
          </video>
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 flex items-center justify-center"
            aria-label={`Play the walkthrough: ${label}`}
          >
            <img
              src={PROJECT_VIDEO.poster}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-ink/40 transition-colors group-hover:bg-ink/30" />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-paper/15 backdrop-blur transition-transform group-hover:scale-110 sm:h-20 sm:w-20">
              <Play size={26} className="ml-1 fill-paper text-paper" />
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 text-sm text-ink-subtle">
        {caption}
        {note && <span className="mt-1 block text-[14px]">{note}</span>}
      </figcaption>
    </figure>
  );
}
