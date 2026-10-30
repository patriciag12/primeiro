import compactPhoto from "@/assets/millene-portrait-480.webp.asset.json";
import largePhoto from "@/assets/millene-portrait-785.webp.asset.json";
import { PlatonicSolidsDrawing } from "@/components/radiesthesia-watermarks";

// The thirteen circles and all connecting center-to-center segments form Metatron's cube.
const centers = [
  { x: 300, y: 300 },
  ...[130, 260].flatMap(radius => Array.from({ length: 6 }, (_, i) => {
    const angle = (-90 + i * 60) * Math.PI / 180;
    return { x: 300 + Math.cos(angle) * radius, y: 300 + Math.sin(angle) * radius };
  })),
];
const segments = centers.flatMap((a, i) => centers.slice(i + 1).map((b, j) => ({ a, b, id: `${i}-${j + i + 1}` })));

export function MetatronPortrait() {
  return (
    <figure className="metatron-portrait" aria-label="Foto de Millene Ferreira com geometria sagrada dos sólidos platônicos e cubo de Metatron">
      {/* Geometria Sagrada dos Sólidos Platônicos como marca d'água sutil ao redor da foto */}
      <svg className="platonic-watermark-overlay" viewBox="0 0 300 300" aria-hidden="true" fill="none" stroke="currentColor">
        <PlatonicSolidsDrawing />
      </svg>

      {/* Linhas e conexões do Cubo de Metatron */}
      <svg className="metatron-lines" viewBox="-8 -8 616 616" aria-hidden="true" fill="none" stroke="currentColor">
        <g className="metatron-connections" strokeWidth="0.8">{segments.map(({ a, b, id }) => <line key={id} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />)}</g>
        <g strokeWidth="1.1">{centers.map((point, i) => <circle key={i} cx={point.x} cy={point.y} r={65} />)}</g>
      </svg>

      {/* Moldura ampla e foto de Millene com maior enquadramento */}
      <div className="metatron-photo-border">
        <div className="metatron-photo-window">
          <img
            className="metatron-photo"
            src={largePhoto.url}
            srcSet={`${compactPhoto.url} 480w, ${largePhoto.url} 785w`}
            sizes="(max-width: 767px) 320px, (max-width: 1023px) 380px, 460px"
            alt="Millene Ferreira, terapeuta vibracional integrativa"
            width={785}
            height={1220}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </figure>
  );
}
