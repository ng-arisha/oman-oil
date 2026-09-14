import type { ReactNode } from "react";

const line = "stroke-steel fill-none";
const amberStroke = "stroke-amber fill-none";
const amberFill = "fill-amber";
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
      <line x1="220" y1="55" x2="280" y2="55" className={amberStroke} strokeWidth={2} />
      <circle cx="280" cy="55" r="3" className={amberFill} />
      <text x="230" y="50" className={txt}>gas 20&#176;C</text>
      <line x1="220" y1="105" x2="300" y2="105" className={teal} strokeWidth={1.6} />
      <text x="230" y="100" className={txt}>naphtha 90&#176;</text>
      <line x1="220" y1="155" x2="300" y2="155" className={teal} strokeWidth={1.6} />
      <text x="230" y="150" className={txt}>kerosene 180&#176;</text>
      <line x1="220" y1="205" x2="300" y2="205" className={teal} strokeWidth={1.6} />
      <text x="230" y="200" className={txt}>diesel 300&#176;</text>
      <line x1="150" y1="290" x2="220" y2="310" className={amberStroke} strokeWidth={2} />
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
      <line x1="210" y1="80" x2="210" y2="30" className={amberStroke} strokeWidth={2} />
      <circle cx="210" cy="26" r="4" className={amberFill} />
      <text x="220" y="20" className={txt}>vent</text>
      <line x1="60" y1="250" x2="60" y2="275" className={line} strokeWidth={1.2} />
      <line x1="60" y1="275" x2="10" y2="275" className={amberStroke} strokeWidth={2} />
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
      <line x1="210" y1="170" x2="255" y2="95" className={amberStroke} strokeWidth={3} />
      <circle cx="210" cy="170" r="6" className={amberFill} />
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
      <circle cx="40" cy="260" r="5" className={amberFill} />
      <text x="16" y="285" className={txt}>terminal A</text>
      <circle cx="220" cy="90" r="5" className={amberFill} />
      <text x="200" y="78" className={txt}>hub</text>
      <circle cx="380" cy="40" r="5" className={amberFill} />
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
        className={amberStroke}
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
      <text x="185" y="178" className="fill-amber font-mono text-[22px]">92</text>
      <text x="170" y="200" className={txt}>RON</text>
      <line x1="210" y1="170" x2="210" y2="70" className={line} strokeWidth={1.2} strokeDasharray="2 4" />
      <line x1="210" y1="170" x2="300" y2="230" className={amberStroke} strokeWidth={3} />
      <circle cx="210" cy="170" r="6" className={amberFill} />
      <text x="130" y="270" className={txt}>unleaded &#183; passenger vehicles</text>
    </Wrap>
  );
}

export function ColdFlow() {
  return (
    <Wrap>
      <line x1="50" y1="260" x2="380" y2="260" className={line} strokeWidth={1.2} />
      <line x1="50" y1="40" x2="50" y2="260" className={line} strokeWidth={1.2} />
      <path d="M50,80 C140,90 180,150 220,180 C270,215 320,230 380,235" className={amberStroke} strokeWidth={2} />
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
        className={amberStroke}
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
      <path d="M155,175 L195,215 L275,120" className={amberStroke} strokeWidth={3} />
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
      <circle cx="150" cy="90" r="4" className={amberFill} />
      <circle cx="240" cy="180" r="4" className={amberFill} />
      <circle cx="330" cy="90" r="4" className={amberFill} />
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
      <rect x="180" y="150" width="60" height="90" className={amberStroke} strokeWidth={2} />
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
      <circle cx="210" cy="150" r="34" className={amberStroke} strokeWidth={2} />
      <text x="130" y="40" className={txt}>Aktau &#183; Mangistau region</text>
    </Wrap>
  );
}



/* ---- small line icons for feature grids ---- */
function IconWrap({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7 stroke-amber fill-none" strokeWidth={1.6} xmlns="http://www.w3.org/2000/svg">
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
      <circle cx="16" cy="16" r="1.6" className="fill-amber" />
    </IconWrap>
  );
}