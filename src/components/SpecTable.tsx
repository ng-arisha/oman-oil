export default function SpecTable({
  caption,
  headers,
  rows,
  monoCols = [],
  dark = false,
}: {
  caption: string;
  headers: string[];
  rows: string[][];
  monoCols?: number[];
  dark?: boolean;
}) {
  const line = dark ? "border-[color:rgba(255,255,255,0.14)]" : "border-[color:rgba(11,11,58,0.13)]";
  const monoColor = dark ? "text-[#86d9db]" : "text-teal";
  return (
    <table className="w-full border-collapse text-[15px]">
      <caption className={`mb-3.5 text-left font-mono text-xs ${dark ? "text-steel-on-dark" : "text-steel"}`}>
        {caption}
      </caption>
      <thead>
        <tr>
          {headers.map((h, i) => (
            <th
              key={h}
              className={`border-b-2 border-red py-3 px-4 text-left font-display text-sm font-medium ${
                monoCols.includes(i) ? `font-mono ${monoColor}` : ""
              }`}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, ri) => (
          <tr key={ri}>
            {r.map((c, i) => (
              <td
                key={i}
                className={`border-b ${line} py-3.5 px-4 ${
                  monoCols.includes(i) ? `font-mono text-[13.5px] ${monoColor}` : ""
                }`}
              >
                {c}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}