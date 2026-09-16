import type { ReactNode } from "react";

const line = "stroke-steel fill-none";
const redStroke = "stroke-red fill-none";
const redFill = "fill-red";
const teal = "stroke-teal fill-none";
const txt = "fill-steel font-mono text-[10px]";

function Wrap({ children, vb = "0 0 420 320" }: { children: ReactNode; vb?: string }) {
  return (
    <svg viewBox={vb} role="img" aria-hidden="true" className="w-full" xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  );
}

export function Distillation() {
  return (
    <Wrap>
      <rect x="150" y="30" width="70" height="260" className={line} strokeWidth={1.2} />
      <line x1="150" y1="80" x2="220" y2="80" className={line} strokeWidth={1.2} />
      <line x1="150" y1="130" x2="220" y2="130" className={line} strokeWidth={1.2} />
      <line x1="150" y1="180" x2="220" y2="180" className={line} strokeWidth={1.2} />
      <line x1="150" y1="230" x2="220" y2="230" className={line} strokeWidth={1.2} />
      <line x1="220" y1="55" x2="280" y2="55" className={redStroke} strokeWidth={2} />
      <circle cx="280" cy="55" r="3" className={redFill} />
      <text x="230" y="50" className={txt}>gas 20&#176;C</text>
      <line x1="220" y1="105" x2="300" y2="105" className={teal} strokeWidth={1.6} />
      <text x="230" y="100" className={txt}>naphtha 90&#176;</text>
      <line x1="220" y1="155" x2="300" y2="155" className={teal} strokeWidth={1.6} />
      <text x="230" y="150" className={txt}>kerosene 180&#176;</text>
      <line x1="220" y1="205" x2="300" y2="205" className={teal} strokeWidth={1.6} />
      <text x="230" y="200" className={txt}>diesel 300&#176;</text>
      <line x1="150" y1="290" x2="220" y2="310" className={redStroke} strokeWidth={2} />
      <text x="150" y="308" className={txt}>bitumen residue 525&#176;C</text>
      <line x1="40" y1="290" x2="150" y2="290" className={line} strokeWidth={1.2} />
      <text x="40" y="305" className={txt}>crude feed</text>
    </Wrap>
  );
}

export function Tank() {
  return (
    <Wrap>
      <ellipse cx="210" cy="80" rx="120" ry="18" className={line} strokeWidth={1.2} />
      <line x1="90" y1="80" x2="90" y2="250" className={line} strokeWidth={1.2} />
      <line x1="330" y1="80" x2="330" y2="250" className={line} strokeWidth={1.2} />
      <ellipse cx="210" cy="250" rx="120" ry="18" className={line} strokeWidth={1.2} />
      <path d="M90,140 A120,18 0 0 0 330,140" className={teal} strokeWidth={1.6} />
      <text x="336" y="145" className={txt}>fill level</text>
      <line x1="210" y1="80" x2="210" y2="30" className={redStroke} strokeWidth={2} />
      <circle cx="210" cy="26" r="4" className={redFill} />
      <text x="220" y="20" className={txt}>vent</text>
      <line x1="60" y1="250" x2="60" y2="275" className={line} strokeWidth={1.2} />
      <line x1="60" y1="275" x2="10" y2="275" className={redStroke} strokeWidth={2} />
      <text x="14" y="270" className={txt}>outlet DN200</text>
      <text x="150" y="165" className={txt}>&#8776; 900,000 t capacity</text>
    </Wrap>
  );
}

export function Gauge() {
  return (
    <Wrap>
      <circle cx="210" cy="170" r="110" className={line} strokeWidth={1.2} />
      <line x1="210" y1="170" x2="210" y2="80" className={line} strokeWidth={1.2} strokeDasharray="2 4" />
      <line x1="210" y1="170" x2="290" y2="120" className={line} strokeWidth={1.2} strokeDasharray="2 4" />
      <line x1="210" y1="170" x2="130" y2="120" className={line} strokeWidth={1.2} strokeDasharray="2 4" />
      <line x1="210" y1="170" x2="255" y2="95" className={redStroke} strokeWidth={3} />
      <circle cx="210" cy="170" r="6" className={redFill} />
      <text x="70" y="130" className={txt}>25&#176;C</text>
      <text x="330" y="130" className={txt}>60&#176;C</text>
      <text x="196" y="70" className={txt}>penetration</text>
      <text x="150" y="270" className={txt}>softening point &#8776; 49&#8211;56&#176;C</text>
    </Wrap>
  );
}

export function RouteMap() {
  return (
    <Wrap>
      <path
        d="M40,260 C120,220 140,120 220,90 S340,60 380,40"
        className={line}
        strokeWidth={1.2}
        strokeDasharray="3 5"
      />
      <circle cx="40" cy="260" r="5" className={redFill} />
      <text x="16" y="285" className={txt}>terminal A</text>
      <circle cx="220" cy="90" r="5" className={redFill} />
      <text x="200" y="78" className={txt}>hub</text>
      <circle cx="380" cy="40" r="5" className={redFill} />
      <text x="330" y="30" className={txt}>port</text>
      <rect x="60" y="140" width="26" height="16" className={teal} strokeWidth={1.6} />
      <text x="90" y="153" className={txt}>gantry</text>
      <rect x="150" y="210" width="26" height="16" className={teal} strokeWidth={1.6} />
      <text x="180" y="223" className={txt}>depot</text>
    </Wrap>
  );
}

export function Flame() {
  return (
    <Wrap>
      <path
        d="M210,50 C170,110 250,130 210,180 C180,205 190,240 220,250 C260,240 270,190 240,160 C260,150 260,110 210,50 Z"
        className={redStroke}
        strokeWidth={2}
      />
      <line x1="90" y1="280" x2="330" y2="280" className={line} strokeWidth={1.2} />
      <text x="120" y="300" className={txt}>flash point &#8776; 38&#176;C min</text>
      <text x="120" y="40" className={txt}>Jet A-1 / TS-1 analog</text>
    </Wrap>
  );
}

export function Octane() {
  return (
    <Wrap>
      <circle cx="210" cy="170" r="110" className={line} strokeWidth={1.2} />
      <text x="185" y="178" className="fill-red font-mono text-[22px]">92</text>
      <text x="170" y="200" className={txt}>RON</text>
      <line x1="210" y1="170" x2="210" y2="70" className={line} strokeWidth={1.2} strokeDasharray="2 4" />
      <line x1="210" y1="170" x2="300" y2="230" className={redStroke} strokeWidth={3} />
      <circle cx="210" cy="170" r="6" className={redFill} />
      <text x="130" y="270" className={txt}>unleaded &#183; passenger vehicles</text>
    </Wrap>
  );
}

export function ColdFlow() {
  return (
    <Wrap>
      <line x1="50" y1="260" x2="380" y2="260" className={line} strokeWidth={1.2} />
      <line x1="50" y1="40" x2="50" y2="260" className={line} strokeWidth={1.2} />
      <path d="M50,80 C140,90 180,150 220,180 C270,215 320,230 380,235" className={redStroke} strokeWidth={2} />
      <text x="290" y="60" className={txt}>summer</text>
      <path d="M50,120 C120,150 160,210 220,225 C280,238 330,245 380,248" className={teal} strokeWidth={1.6} />
      <text x="290" y="205" className={txt}>winter</text>
      <text x="20" y="30" className={txt}>flow</text>
      <text x="350" y="278" className={txt}>temp &#8595;</text>
    </Wrap>
  );
}

export function Leaf() {
  return (
    <Wrap>
      <rect x="60" y="150" width="18" height="110" className={line} strokeWidth={1.2} />
      <rect x="110" y="110" width="18" height="150" className={line} strokeWidth={1.2} />
      <rect x="160" y="70" width="18" height="190" className={teal} strokeWidth={2} />
      <path
        d="M260,240 C260,190 300,170 340,170 C340,220 300,240 260,240 Z"
        className={redStroke}
        strokeWidth={2}
      />
      <line x1="260" y1="240" x2="300" y2="200" className={teal} strokeWidth={1.6} />
      <text x="60" y="280" className={txt}>output</text>
      <text x="255" y="270" className={txt}>emissions intensity</text>
    </Wrap>
  );
}

export function Shield() {
  return (
    <Wrap>
      <path
        d="M210,40 L320,80 L320,160 C320,230 270,270 210,290 C150,270 100,230 100,160 L100,80 Z"
        className={line}
        strokeWidth={1.2}
      />
      <path d="M155,175 L195,215 L275,120" className={redStroke} strokeWidth={3} />
      <text x="140" y="30" className={txt}>GOST 33133-2014 &#183; Customs Union TR</text>
    </Wrap>
  );
}

export function Grid() {
  return (
    <Wrap>
      <line x1="60" y1="60" x2="60" y2="270" className={line} strokeWidth={1.2} />
      <line x1="150" y1="60" x2="150" y2="270" className={line} strokeWidth={1.2} />
      <line x1="240" y1="60" x2="240" y2="270" className={line} strokeWidth={1.2} />
      <line x1="330" y1="60" x2="330" y2="270" className={line} strokeWidth={1.2} />
      <line x1="60" y1="90" x2="330" y2="90" className={line} strokeWidth={1.2} />
      <line x1="60" y1="180" x2="330" y2="180" className={line} strokeWidth={1.2} />
      <line x1="60" y1="270" x2="330" y2="270" className={line} strokeWidth={1.2} />
      <circle cx="150" cy="90" r="4" className={redFill} />
      <circle cx="240" cy="180" r="4" className={redFill} />
      <circle cx="330" cy="90" r="4" className={redFill} />
      <text x="70" y="50" className={txt}>weather &#183; markets &#183; freight</text>
    </Wrap>
  );
}

export function Calendar() {
  return (
    <Wrap>
      <rect x="60" y="60" width="300" height="220" className={line} strokeWidth={1.2} />
      <line x1="60" y1="110" x2="360" y2="110" className={line} strokeWidth={1.2} />
      <line x1="160" y1="60" x2="160" y2="280" className={line} strokeWidth={1.2} strokeDasharray="2 4" />
      <line x1="260" y1="60" x2="260" y2="280" className={line} strokeWidth={1.2} strokeDasharray="2 4" />
      <rect x="180" y="150" width="60" height="90" className={redStroke} strokeWidth={2} />
      <text x="185" y="255" className={txt}>200k bpd module</text>
      <text x="70" y="45" className={txt}>feasibility &#8594; build &#8594; commission</text>
    </Wrap>
  );
}

export function Pin() {
  return (
    <Wrap>
      <path
        d="M210,60 C260,60 300,100 300,150 C300,210 210,290 210,290 C210,290 120,210 120,150 C120,100 160,60 210,60 Z"
        className={line}
        strokeWidth={1.2}
      />
      <circle cx="210" cy="150" r="34" className={redStroke} strokeWidth={2} />
      <text x="130" y="40" className={txt}>Aktau &#183; Mangistau region</text>
    </Wrap>
  );
}

/* ---- small line icons for feature grids ---- */
function IconWrap({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7 stroke-red fill-none" strokeWidth={1.6} xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  );
}

export function IconEngineer() {
  return (
    <IconWrap>
      <rect x="6" y="12" width="20" height="14" rx="1.5" />
      <path d="M12 12V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" />
      <line x1="6" y1="18" x2="26" y2="18" />
    </IconWrap>
  );
}

export function IconPerson() {
  return (
    <IconWrap>
      <circle cx="16" cy="11" r="5" />
      <path d="M6 27c0-5.5 4.5-9 10-9s10 3.5 10 9" />
    </IconWrap>
  );
}

export function IconShield() {
  return (
    <IconWrap>
      <path d="M16 4 26 8v8c0 6-4.5 10-10 12C10.5 26 6 22 6 16V8Z" />
      <path d="M11 16l3.5 3.5L21 12.5" />
    </IconWrap>
  );
}

export function IconGauge() {
  return (
    <IconWrap>
      <circle cx="16" cy="16" r="11" />
      <path d="M16 16 22 10" />
      <circle cx="16" cy="16" r="1.6" className="fill-red" />
    </IconWrap>
  );
}


/* ---- white badge icons for value cards (sit on colored backgrounds) ---- */
function BadgeIconWrap({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 32 32" className="h-6 w-6 stroke-white fill-none" strokeWidth={1.6} xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  );
}

export function IconGear() {
  return (
    <BadgeIconWrap>
      <circle cx="16" cy="16" r="4.5" />
      <path d="M16 6v3M16 23v3M26 16h-3M9 16H6M22.6 9.4l-2.1 2.1M11.5 20.5l-2.1 2.1M22.6 22.6l-2.1-2.1M11.5 11.5 9.4 9.4" />
    </BadgeIconWrap>
  );
}

export function IconClock() {
  return (
    <BadgeIconWrap>
      <circle cx="16" cy="16" r="11" />
      <path d="M16 9v7l5 3" />
    </BadgeIconWrap>
  );
}

export function IconHandshake() {
  return (
    <BadgeIconWrap>
      <path d="M4 15l5-4 4 3 3-2 5 3.5" />
      <path d="M9 11l6 5.5c1 1 2.6 1 3.5-.2.7-.9.6-2.2-.3-3L14 9" />
      <path d="M4 15v4l4 3M28 16l-5-3.5v4l-4 3" />
    </BadgeIconWrap>
  );
}

export function IconStar() {
  return (
    <BadgeIconWrap>
      <path d="M16 6l3 6.5 7 1-5.2 4.9L22.4 25 16 21.3 9.6 25l1.6-6.6L6 13.5l7-1z" />
    </BadgeIconWrap>
  );
}

export function IconThumbsUp() {
  return (
    <BadgeIconWrap>
      <path d="M11 14v12H7a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h4Z" />
      <path d="M11 14l4.5-8c1.4 0 2.5 1.3 2.2 2.7L17 12h6.5c1.4 0 2.4 1.4 2 2.7l-2.4 8.3c-.3 1.2-1.4 2-2.6 2H11" />
    </BadgeIconWrap>
  );
}


export function IconPhone() {
  return (
    <IconWrap>
      <path d="M9 5h4l2 5-3 2c1.2 3 3.8 5.6 6.8 6.8l2-3 5 2v4c0 1.1-.9 2-2 2C15.6 27.8 4.2 16.4 4 9c0-1.1.9-2 2-2Z" />
    </IconWrap>
  );
}



/* ---- large indigo icons for feature grids without a badge circle ---- */
function LargeIndigoWrap({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-14 w-14 stroke-indigo fill-none"
      strokeWidth={1.6}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

export function IconCompassLg() {
  return (
    <LargeIndigoWrap>
      <circle cx="16" cy="16" r="12" />
      <path d="M20 12 17 17 12 20 15 15Z" />
    </LargeIndigoWrap>
  );
}

export function IconGearLg() {
  return (
    <LargeIndigoWrap>
      <circle cx="16" cy="16" r="4.5" />
      <path d="M16 6v3M16 23v3M26 16h-3M9 16H6M22.6 9.4l-2.1 2.1M11.5 20.5l-2.1 2.1M22.6 22.6l-2.1-2.1M11.5 11.5 9.4 9.4" />
    </LargeIndigoWrap>
  );
}

export function IconOrgChartLg() {
  return (
    <LargeIndigoWrap>
      <rect x="13" y="4" width="6" height="6" />
      <line x1="16" y1="10" x2="16" y2="15" />
      <line x1="7" y1="15" x2="25" y2="15" />
      <line x1="7" y1="15" x2="7" y2="19" />
      <line x1="16" y1="15" x2="16" y2="19" />
      <line x1="25" y1="15" x2="25" y2="19" />
      <rect x="4" y="19" width="6" height="6" />
      <rect x="13" y="19" width="6" height="6" />
      <rect x="22" y="19" width="6" height="6" />
    </LargeIndigoWrap>
  );
}


export function IconCoinLg() {
  return (
    <LargeIndigoWrap>
      <circle cx="16" cy="16" r="10" />
      <circle cx="16" cy="16" r="7" />
      <path d="M15 12.5h2v7M14.3 12.5 16 11.5" />
    </LargeIndigoWrap>
  );
}

export function IconSafeLg() {
  return (
    <LargeIndigoWrap>
      <rect x="6" y="6" width="20" height="19" rx="2" />
      <circle cx="16" cy="15" r="4" />
      <circle cx="16" cy="15" r="1" className="fill-indigo" />
      <path d="M16 11v1M16 19v1M12 15h1M19 15h1" />
      <path d="M10 25v2M22 25v2" />
    </LargeIndigoWrap>
  );
}