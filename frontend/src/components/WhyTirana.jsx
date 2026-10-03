import { useLanguage } from "../context/LanguageContext";
import { useReveal } from "../hooks/useReveal";

const ICONS = [
  <path key="1" d="M8 12h8M12 8v8" />,
  <path key="2" d="M2 12h20M12 2c2.5 2.7 4 6.2 4 10s-1.5 7.3-4 10c-2.5-2.7-4-6.2-4-10s1.5-7.3 4-10Z" />,
  <path key="3" d="M12 3 4 7v5c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V7l-8-4Z" />,
  <path key="4" d="M3 11l18-7-7 18-2-8-9-3Z" />
];

export default function WhyTirana() {
  const { content } = useLanguage();
  const ref = useReveal();
  if (!content) return null;
  const { why } = content;

  return (
    <section className="why reveal" id="tourism" ref={ref}>
      <div className="wrap">
        <div className="sec-head">
          <h2>{why.title}</h2>
          <p>{why.intro}</p>
        </div>
        <div className="why-grid">
          {why.points.map((p, i) => (
            <div className="why-item" key={i}>
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="9" />
                {ICONS[i]}
              </svg>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="price-table">
          <table>
            <thead>
              <tr>{why.table.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {why.table.rows.map((row, i) => (
                <tr key={i}>
                  <td>{row[0]}</td>
                  <td className="num">{row[1]}</td>
                  <td>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="price-note">{why.table.note}</p>
      </div>
    </section>
  );
}
