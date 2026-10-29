import compactPhoto from "@/assets/millene-portrait-480.webp.asset.json";
import largePhoto from "@/assets/millene-portrait-785.webp.asset.json";

// The thirteen circles and all connecting center-to-center segments form Metatron's cube.
const centers = [
  { x: 300, y: 300 },
  ...[120, 240].flatMap(radius => Array.from({ length: 6 }, (_, i) => {
    const angle = (-90 + i * 60) * Math.PI / 180;
    return { x: 300 + Math.cos(angle) * radius, y: 300 + Math.sin(angle) * radius };
  })),
];
const segments = centers.flatMap((a, i) => centers.slice(i + 1).map((b, j) => ({ a, b, id: `${i}-${j + i + 1}` })));

export function MetatronPortrait() {
  return <figure className="metatron-portrait" aria-label="Foto de Millene Ferreira dentro da geometria do cubo de Metatron">
    <svg className="metatron-lines" viewBox="-8 -8 616 616" aria-hidden="true" fill="none" stroke="currentColor">
      <g className="metatron-connections" strokeWidth="0.9">{segments.map(({ a, b, id }) => <line key={id} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />)}</g>
      <g strokeWidth="1.4">{centers.map((point, i) => <circle key={i} cx={point.x} cy={point.y} r={60} />)}</g>
    </svg>
    <div className="metatron-photo-border"><div className="metatron-photo-window"><img
      className="metatron-photo"
      src={largePhoto.url}
      srcSet={`${compactPhoto.url} 480w, ${largePhoto.url} 785w`}
      sizes="(max-width: 767px) 205px, (max-width: 1023px) 210px, 285px"
      alt="Millene Ferreira, terapeuta vibracional integrativa"
      width={785} height={1220} loading="lazy" decoding="async"
    /></div></div>
  </figure>;
}