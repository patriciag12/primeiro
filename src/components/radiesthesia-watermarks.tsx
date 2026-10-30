import type { ReactNode } from "react";

const points = (count: number, radius: number, rotation = -90) => Array.from({ length: count }, (_, i) => {
  const a = (rotation + 360 * i / count) * Math.PI / 180;
  return `${150 + radius * Math.cos(a)},${150 + radius * Math.sin(a)}`;
}).join(" ");

function Rings({ radii }: { radii: number[] }) {
  return <>{radii.map(r => <circle cx="150" cy="150" r={r} key={r} />)}</>;
}

export function PlatonicSolidsDrawing() {
  return (
    <g>
      {/* Círculos de alinhamento sagrado */}
      <circle cx="150" cy="150" r="140" strokeDasharray="3 3" />
      <circle cx="150" cy="150" r="126" />
      <circle cx="150" cy="150" r="76" strokeDasharray="2 2" />
      <circle cx="150" cy="150" r="42" />

      {/* Hexaedro / Cubo (Terra) */}
      <polygon points="150,108 186,129 186,171 150,192 114,171 114,129" />
      <line x1="150" y1="150" x2="150" y2="108" />
      <line x1="150" y1="150" x2="186" y2="171" />
      <line x1="150" y1="150" x2="114" y2="171" />

      {/* Octaedro (Ar) */}
      <polygon points="150,82 209,150 150,218 91,150" />
      <line x1="150" y1="82" x2="150" y2="218" />
      <line x1="91" y1="150" x2="209" y2="150" />

      {/* Tetraedro / Merkaba Estelar (Fogo) */}
      <polygon points="150,60 228,195 72,195" />
      <polygon points="150,240 228,105 72,105" />

      {/* Icosaedro (Água - 20 triângulos) */}
      <polygon points="150,24 224,67 270,141 241,225 150,276 59,225 30,141 76,67" strokeDasharray="4 2" />

      {/* Dodecaedro (Éter - 12 faces pentagonais) */}
      <polygon points="150,38 217,59 256,113 256,187 217,241 150,262 83,241 44,187 44,113 83,59" />

      {/* 12 Vértices e Nós de Ressonância */}
      {Array.from({ length: 12 }, (_, i) => {
        const rad = (i * 30 * Math.PI) / 180;
        const x = 150 + 126 * Math.cos(rad);
        const y = 150 + 126 * Math.sin(rad);
        return <circle key={i} cx={x} cy={y} r="2.5" fill="currentColor" />;
      })}
    </g>
  );
}

const graphs: { name: string; drawing: ReactNode }[] = [
  { name: "Sólidos Platônicos", drawing: <PlatonicSolidsDrawing /> },
  { name: "Yosua", drawing: <><polygon points="150,15 244,150 150,285 56,150" /><polygon points="150,29 233,150 150,271 67,150" /><text x="150" y="161" textAnchor="middle" stroke="none" fill="currentColor" fontSize="38" fontFamily="serif" direction="rtl">יהשוה</text></> },
  { name: "Triturador", drawing: <><Rings radii={[130, 120, 18]} />{Array.from({ length: 8 }, (_, i) => <path key={i} transform={`rotate(${i * 45} 150 150)`} d="M150 132 C 148 98 182 48 213 39 C184 88 182 126 166 148 C160 143 155 138 150 132Z" />)}</> },
  { name: "Harmonizador", drawing: <><g transform="translate(30 30) scale(0.8)"><Rings radii={[128, 109, 89, 67, 44, 22]} />{Array.from({ length: 6 }, (_, i) => <path key={i} transform={`rotate(${30 + i * 60} 150 150)`} d="M150 22 Q100 94 150 150 Q200 94 150 22Z" />)}</g><circle cx="150" cy="24" r="19" fill="currentColor" /><circle cx="150" cy="276" r="19" /></> },
  { name: "Desimpregnador", drawing: <><Rings radii={[91, 103, 115, 126]} /><polygon points={points(10, 62)} />{Array.from({ length: 72 }, (_, i) => <path key={i} transform={`rotate(${i * 5} 150 150)`} d="M150 25 V8 M147 12 L150 8 L153 12" />)}</> },
  { name: "Decágono", drawing: <polygon points={points(10, 131)} /> },
  { name: "Alta Vitalidade", drawing: <><Rings radii={[126, 109, 92, 74]} /><text x="150" y="159" stroke="none" fill="currentColor" fontFamily="serif" fontSize="29" textAnchor="middle">9797979</text></> },
  { name: "Mesa de Amiens", drawing: <><rect x="104" y="11" width="92" height="278" /><circle cx="150" cy="57" r="45" /><circle cx="150" cy="150" r="45" /><circle cx="150" cy="243" r="45" /><path d="M113 125H187" /><circle cx="150" cy="138" r="4" fill="currentColor" /></> },
];

export function RadiesthesiaWatermarks() {
  return (
    <div className="radiesthesia-layer" aria-hidden="true">
      {graphs.map((g, i) => (
        <svg
          key={g.name}
          className={`watermark graph-${i + 1}`}
          data-graph={g.name}
          viewBox="0 0 300 300"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
        >
          {g.drawing}
        </svg>
      ))}
    </div>
  );
}
