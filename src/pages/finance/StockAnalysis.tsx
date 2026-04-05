import { useState } from "react";

export function StockAnalysis() {
  const [eps, setEps] = useState<number | "">("");
  const [b, setB] = useState<number | "">("");
  const [r, setR] = useState<number | "">("");
  const [g, setG] = useState<number | "">("");
  const [fairValue, setFairValue] = useState<number | null>(null);

  const [industryPE, setIndustryPE] = useState<number | "">("");
  const [industryPB, setIndustryPB] = useState<number | "">("");
  const [bvps, setBvps] = useState<number | "">("");
  const [relativePEValue, setRelativePEValue] = useState<number | null>(null);
  const [relativePBValue, setRelativePBValue] = useState<number | null>(null);

  const calculateFairValue = () => {
    if (eps === "" || b === "" || r === "" || g === "") {
      alert("Please enter all values");
      return;
    }

    const result = (Number(eps) * (1 - Number(b))) / (Number(r) - Number(g));
    setFairValue(result);
  };

  const calculateRelativePE = () => {
    if (eps === "" || industryPE === "") return;
    setRelativePEValue(Number(eps) * Number(industryPE));
  };

  const calculateRelativePB = () => {
    if (bvps === "" || industryPB === "") return;
    setRelativePBValue(Number(bvps) * Number(industryPB));
  };

  const cardStyle: React.CSSProperties = {
    padding: "20px",
    borderRadius: "16px",
    border: "1px solid #ddd",
    minHeight: "260px",
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
  };

    const cardStyleSmall: React.CSSProperties = {
    padding: "20px",
    borderRadius: "16px",
    border: "1px solid #ddd",
    minHeight: "150px",
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px",
    marginTop: "8px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc"
  };

  const buttonStyle: React.CSSProperties = {
    padding: "10px 15px",
    borderRadius: "8px",
    border: "none",
    background: "#2563eb",
    color: "#fff",
    cursor: "pointer",
    marginTop: "10px"
  };

  const containerStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    padding: "40px"
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>StockAnalysis</h1>

      <div style={containerStyle}>

        {/* Stock Fair Value */}
        <div style={cardStyle}>
         <h3 style={{ color: "black" }}>Stock Fair Value</h3>
         <p style={{ color: "black" }}>Gordon Growth Model</p>

          <input style={inputStyle} type="number" placeholder="EPS" value={eps} onChange={(e) => setEps(e.target.value === "" ? "" : Number(e.target.value))} />
          <input style={inputStyle} type="number" placeholder="Retention Ratio (b)" value={b} onChange={(e) => setB(e.target.value === "" ? "" : Number(e.target.value))} />
          <input style={inputStyle} type="number" placeholder="Required Return (r)" value={r} onChange={(e) => setR(e.target.value === "" ? "" : Number(e.target.value))} />
          <input style={inputStyle} type="number" placeholder="Growth Rate (g)" value={g} onChange={(e) => setG(e.target.value === "" ? "" : Number(e.target.value))} />

          <button style={buttonStyle} onClick={calculateFairValue}>Calculate</button>

          {fairValue !== null && <p>Fair Value: {fairValue.toFixed(4)}</p>}
        </div>

        {/* P/E */}
        <div style={cardStyle}>
          <h3 style={{ color: "black" }}>Relative Valuation (P/E)</h3>
          <p style={{ color: "black" }}>EPS × Industry P/E</p>

          <input style={inputStyle} type="number" placeholder="EPS" value={eps} onChange={(e) => setEps(e.target.value === "" ? "" : Number(e.target.value))} />
          <input style={inputStyle} type="number" placeholder="Industry P/E" value={industryPE} onChange={(e) => setIndustryPE(e.target.value === "" ? "" : Number(e.target.value))} />

          <button style={buttonStyle} onClick={calculateRelativePE}>Calculate</button>

          {relativePEValue !== null && <p style={{ color: "black" }}>Fair Price: {relativePEValue.toFixed(4)}</p>}
        </div>

        {/* P/B */}
        <div style={cardStyle}>
          <h3 style={{ color: "black" }}>Relative Valuation (P/B)</h3>
          <p style={{ color: "black" }}>BVPS × Industry P/B</p>

          <p style={{ fontSize: "12px", color: "black" }}>BVPS = Total Equity / Shares</p>

          <input style={inputStyle} type="number" placeholder="BVPS" value={bvps} onChange={(e) => setBvps(e.target.value === "" ? "" : Number(e.target.value))} />
          <input style={inputStyle} type="number" placeholder="Industry P/B" value={industryPB} onChange={(e) => setIndustryPB(e.target.value === "" ? "" : Number(e.target.value))} />

          <button style={buttonStyle} onClick={calculateRelativePB}>Calculate</button>

          {relativePBValue !== null && <p style={{ color: "black" }}>Fair Price: {relativePBValue.toFixed(4)}</p>}
        </div>

      </div>

      <div style={containerStyle}>

        {/* Stock Fair Value */}
        <div style={cardStyleSmall}>
         <h3 style={{ color: "black" }}>Growth-Based Valuation</h3>
         <p style={{ color: "black" }}>PEG Ratio</p>
         <p style={{ color: "black" }}>PEG = PE / Growth Rate</p>
         <p style={{ color: "black" }}>PEG Less Than 1 → undervalued</p>
         <p style={{ color: "black" }}>PEG Greater Than 1 → overvalued</p>
        </div>

        {/* P/E */}
        <div style={cardStyleSmall}>
          <h3 style={{ color: "black" }}>Sector-Specific Models (Very Important in India)</h3>
          <p style={{ color: "black" }}>Different sectors need different valuation:</p>
          <p style={{ color: "black" }}>IT Sector    : P/E, DCF</p>
          <p style={{ color: "black" }}>Banks	Sector : P/B</p>
          <p style={{ color: "black" }}>FMCG	Sector : High P/E + DCF</p>
          <p style={{ color: "black" }}>Startups     :Revenue multiples</p>
        </div>

        {/* P/B */}
        <div style={cardStyle}>
          <h3 style={{ color: "black" }}>Relative Valuation (P/B)</h3>
          <p style={{ color: "black" }}>BVPS × Industry P/B</p>

          <p style={{ fontSize: "12px", color: "black" }}>BVPS = Total Equity / Shares</p>

          <input style={inputStyle} type="number" placeholder="BVPS" value={bvps} onChange={(e) => setBvps(e.target.value === "" ? "" : Number(e.target.value))} />
          <input style={inputStyle} type="number" placeholder="Industry P/B" value={industryPB} onChange={(e) => setIndustryPB(e.target.value === "" ? "" : Number(e.target.value))} />

          <button style={buttonStyle} onClick={calculateRelativePB}>Calculate</button>

          {relativePBValue !== null && <p>Fair Price: {relativePBValue.toFixed(4)}</p>}
        </div>

      </div>
    </div>
  );
}
