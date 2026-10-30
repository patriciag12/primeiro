export function USFlag() {
  return <svg className="country-flag" viewBox="0 0 190 100" role="img" aria-label="Bandeira dos Estados Unidos">
    <rect className="flag-white" width="190" height="100" />
    {Array.from({ length: 7 }, (_, i) => <rect key={i} className="flag-red" y={i * 200 / 13} width="190" height={100 / 13} />)}
    <rect className="flag-blue" width="76" height={700 / 13} />
    {Array.from({ length: 9 }, (_, row) => Array.from({ length: row % 2 === 0 ? 6 : 5 }, (_, col) => (
      <path className="flag-white" key={`${row}-${col}`} transform={`translate(${(col + (row % 2 === 0 ? 0.5 : 1)) * 76 / 6} ${(row + 1) * 70 / 13})`} d="M0-2.8 .66-.91 2.66-.86 1.07.35 1.65 2.26 0 1.12-1.65 2.26-1.07.35-2.66-.86-.66-.91Z" />
    )))}
  </svg>;
}