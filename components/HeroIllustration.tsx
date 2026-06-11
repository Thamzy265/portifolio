export default function HeroIllustration() {
  // Stylised "what I build": an Android phone showing a dashboard,
  // layered over a code editor window. Pure SVG, pure CSS animation.
  return (
    <div
      className="relative mx-auto aspect-[5/6] w-full max-w-[420px]"
      aria-hidden="true"
    >
      {/* Code editor window — sits behind, offset top-left */}
      <div className="absolute left-0 top-2 w-[78%] -rotate-3">
        <svg
          viewBox="0 0 320 220"
          className="h-auto w-full drop-shadow-[0_18px_30px_rgba(15,111,106,0.10)]"
        >
          {/* Window chrome */}
          <rect
            x="0.5"
            y="0.5"
            width="319"
            height="219"
            rx="10"
            ry="10"
            fill="#ffffff"
            stroke="#e2e8e6"
          />
          <rect x="0.5" y="0.5" width="319" height="26" fill="#f3faf8" />
          <line x1="0" y1="26" x2="320" y2="26" stroke="#e2e8e6" />
          <circle cx="14" cy="13.5" r="3.5" fill="#dceeec" />
          <circle cx="26" cy="13.5" r="3.5" fill="#dceeec" />
          <circle cx="38" cy="13.5" r="3.5" fill="#dceeec" />
          <text
            x="160"
            y="17.5"
            textAnchor="middle"
            fontFamily="ui-monospace, SFMono-Regular, monospace"
            fontSize="9"
            fill="#5b6470"
          >
            dashboard.tsx
          </text>

          {/* Code lines */}
          <g fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="9">
            <text x="14" y="48" fill="#8a93a0">01</text>
            <text x="36" y="48" fill="#0f6f6a">import</text>
            <text x="74" y="48" fill="#1f2329">{'{ Chart }'}</text>
            <text x="128" y="48" fill="#0f6f6a">from</text>
            <text x="156" y="48" fill="#1f2329">&apos;./chart&apos;</text>

            <text x="14" y="64" fill="#8a93a0">02</text>
            <text x="36" y="64" fill="#0f6f6a">const</text>
            <text x="70" y="64" fill="#1f2329">data =</text>
            <text x="110" y="64" fill="#0f6f6a">await</text>
            <text x="142" y="64" fill="#1f2329">fetch(...)</text>

            <text x="14" y="80" fill="#8a93a0">03</text>

            <text x="14" y="96" fill="#8a93a0">04</text>
            <text x="36" y="96" fill="#0f6f6a">return</text>
            <text x="74" y="96" fill="#1f2329">&lt;Chart</text>
            <text x="14" y="112" fill="#8a93a0">05</text>
            <text x="46" y="112" fill="#1f2329">data=</text>
            <text x="74" y="112" fill="#0f6f6a">{'{data}'}</text>
            <text x="14" y="128" fill="#8a93a0">06</text>
            <text x="46" y="128" fill="#1f2329">type=</text>
            <text x="74" y="128" fill="#1f2329">&quot;area&quot;</text>
            <text x="14" y="144" fill="#8a93a0">07</text>
            <text x="36" y="144" fill="#1f2329">/&gt;</text>
          </g>

          {/* Code cursor — static caret, no blink (no idle/looping animations). */}
          <rect x="50" y="138" width="1.5" height="10" fill="#0f6f6a" />
        </svg>
      </div>

      {/* Android phone — sits in front, offset bottom-right */}
      <div className="absolute bottom-0 right-0 w-[60%]">
        <svg
          viewBox="0 0 220 440"
          className="h-auto w-full drop-shadow-[0_24px_40px_rgba(17,20,24,0.12)]"
        >
          {/* Phone body */}
          <rect
            x="1"
            y="1"
            width="218"
            height="438"
            rx="28"
            ry="28"
            fill="#1f2329"
          />
          {/* Screen */}
          <rect
            x="10"
            y="10"
            width="200"
            height="420"
            rx="20"
            ry="20"
            fill="#ffffff"
          />
          {/* Camera punch-hole */}
          <circle cx="110" cy="22" r="3.5" fill="#1f2329" />

          {/* Status bar */}
          <g
            fontFamily="ui-monospace, SFMono-Regular, monospace"
            fontSize="7"
            fill="#5b6470"
          >
            <text x="22" y="42">9:41</text>
            <rect x="180" y="36" width="14" height="6" rx="1" fill="none" stroke="#5b6470" strokeWidth="0.7" />
            <rect x="181" y="37" width="8" height="4" fill="#0f6f6a" />
          </g>

          {/* App header */}
          <g>
            <text
              x="22"
              y="74"
              fontFamily="ui-sans-serif, system-ui"
              fontSize="13"
              fontWeight="600"
              fill="#111418"
            >
              Field Data
            </text>
            <text
              x="22"
              y="88"
              fontFamily="ui-monospace, SFMono-Regular, monospace"
              fontSize="6.5"
              fill="#8a93a0"
              letterSpacing="0.6"
            >
              TODAY · 3 SITES
            </text>
            <circle cx="195" cy="78" r="9" fill="#dceeec" />
            <text
              x="195"
              y="81"
              textAnchor="middle"
              fontFamily="ui-sans-serif, system-ui"
              fontSize="7"
              fontWeight="700"
              fill="#0f6f6a"
            >
              WN
            </text>
          </g>

          {/* Stat cards */}
          <g>
            <rect x="20" y="102" width="58" height="42" rx="6" fill="#f3faf8" stroke="#e2e8e6" />
            <text x="26" y="116" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="6" fill="#8a93a0" letterSpacing="0.6">FORMS</text>
            <text x="26" y="135" fontFamily="ui-sans-serif, system-ui" fontSize="14" fontWeight="700" fill="#111418">124</text>

            <rect x="82" y="102" width="58" height="42" rx="6" fill="#f3faf8" stroke="#e2e8e6" />
            <text x="88" y="116" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="6" fill="#8a93a0" letterSpacing="0.6">SYNC</text>
            <text x="88" y="135" fontFamily="ui-sans-serif, system-ui" fontSize="14" fontWeight="700" fill="#0f6f6a">98%</text>

            <rect x="144" y="102" width="56" height="42" rx="6" fill="#f3faf8" stroke="#e2e8e6" />
            <text x="150" y="116" fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="6" fill="#8a93a0" letterSpacing="0.6">USERS</text>
            <text x="150" y="135" fontFamily="ui-sans-serif, system-ui" fontSize="14" fontWeight="700" fill="#111418">42</text>
          </g>

          {/* Bar chart */}
          <g>
            <text
              x="22"
              y="172"
              fontFamily="ui-monospace, SFMono-Regular, monospace"
              fontSize="6.5"
              fill="#8a93a0"
              letterSpacing="0.6"
            >
              SUBMISSIONS / WEEK
            </text>
            <g className="hero-bars" transform="translate(22, 184)">
              <rect x="0" width="18" y="40" height="32" rx="2" fill="#dceeec" style={{ animationDelay: '0.0s' }} />
              <rect x="24" width="18" y="20" height="52" rx="2" fill="#dceeec" style={{ animationDelay: '0.1s' }} />
              <rect x="48" width="18" y="32" height="40" rx="2" fill="#dceeec" style={{ animationDelay: '0.2s' }} />
              <rect x="72" width="18" y="8"  height="64" rx="2" fill="#0f6f6a" style={{ animationDelay: '0.3s' }} />
              <rect x="96" width="18" y="14" height="58" rx="2" fill="#0f6f6a" style={{ animationDelay: '0.4s' }} />
              <rect x="120" width="18" y="26" height="46" rx="2" fill="#dceeec" style={{ animationDelay: '0.5s' }} />
              <rect x="144" width="18" y="12" height="60" rx="2" fill="#0f6f6a" style={{ animationDelay: '0.6s' }} />
              <rect x="168" width="18" y="22" height="50" rx="2" fill="#dceeec" style={{ animationDelay: '0.7s' }} />
            </g>
          </g>

          {/* Line chart */}
          <g transform="translate(20, 300)">
            <text
              x="2"
              y="0"
              fontFamily="ui-monospace, SFMono-Regular, monospace"
              fontSize="6.5"
              fill="#8a93a0"
              letterSpacing="0.6"
            >
              UPTIME · 30 DAYS
            </text>
            <rect x="0" y="10" width="180" height="62" rx="6" fill="#ffffff" stroke="#e2e8e6" />
            <path
              d="M8 60 L24 50 L40 56 L60 38 L80 44 L100 28 L120 34 L140 22 L160 30 L172 18"
              fill="none"
              stroke="#0f6f6a"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={1}
              className="hero-line"
            />
            <circle cx="172" cy="18" r="2.5" fill="#0f6f6a" />
          </g>

          {/* Bottom nav */}
          <g>
            <line x1="20" y1="392" x2="200" y2="392" stroke="#e2e8e6" />
            <circle cx="50" cy="408" r="3" fill="#0f6f6a" />
            <circle cx="90" cy="408" r="3" fill="#e2e8e6" />
            <circle cx="130" cy="408" r="3" fill="#e2e8e6" />
            <circle cx="170" cy="408" r="3" fill="#e2e8e6" />
          </g>
        </svg>
      </div>
    </div>
  );
}
