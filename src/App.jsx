import { useState, useEffect } from "react";

const PASSWORD = "cfoassociates2026";

const tools = [
  {
    id: 1,
    name: "Sales Tax Nexus Dashboard",
    description: "Economic nexus thresholds by state after South Dakota v. Wayfair. Search, filter, and compare all 50 states at a glance.",
    category: "Tax",
    url: "https://sales-tax-dashboard.vercel.app",
    status: "live",
    added: "Mar 2026",
  },
  {
    id: 2,
    name: "Payroll Tool",
    description: "Your next payroll tool will appear here once it's ready.",
    category: "Payroll",
    url: "#",
    status: "soon",
    added: "",
  },
  {
    id: 3,
    name: "Financial Reporting Tool",
    description: "Your next financial reporting tool will appear here once it's ready.",
    category: "Financial Reporting",
    url: "#",
    status: "soon",
    added: "",
  },
  {
    id: 4,
    name: "Crypto Tool",
    description: "Your next crypto tool will appear here once it's ready.",
    category: "Crypto",
    url: "#",
    status: "soon",
    added: "",
  },
];

const categories = ["All", "Tax", "Payroll", "Financial Reporting", "Crypto"];

const categoryMeta = {
  Tax:                   { icon: "⚖️",  accent: "#e8450a" },
  Payroll:               { icon: "💼",  accent: "#f59e0b" },
  "Financial Reporting": { icon: "📊",  accent: "#e8450a" },
  Crypto:                { icon: "₿",   accent: "#f59e0b" },
};

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Nunito Sans', sans-serif; background: #f4f5f7; color: #2d2d2d; }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-8px)} 40%{transform:translateX(8px)} 60%{transform:translateX(-5px)} 80%{transform:translateX(5px)} }
  .fade-up { animation: fadeUp 0.5s ease both; }
  .shake { animation: shake 0.4s ease; }
  .tool-card { background:#fff; border:1px solid #e8eaed; border-radius:16px; padding:28px; display:flex; flex-direction:column; gap:14px; transition:transform 0.2s,box-shadow 0.2s; }
  .tool-card:hover { transform:translateY(-4px); box-shadow:0 12px 32px rgba(0,0,0,0.09); }
  .tool-card.dimmed { opacity:0.55; }
  .launch-btn { display:inline-block; padding:9px 20px; border-radius:8px; font-size:13px; font-weight:700; font-family:'Nunito Sans',sans-serif; color:#fff; text-decoration:none; background:linear-gradient(135deg,#e8450a 0%,#f7a01a 100%); box-shadow:0 4px 14px rgba(232,69,10,0.25); transition:opacity 0.15s; }
  .launch-btn:hover { opacity:0.85; }
  .cat-pill { padding:9px 18px; border-radius:50px; border:1.5px solid #e0e2e7; font-size:13px; font-weight:600; font-family:'Nunito Sans',sans-serif; cursor:pointer; transition:all 0.15s; background:#fff; color:#5a5a6e; }
  .cat-pill:hover { border-color:#e8450a; color:#e8450a; }
  .cat-pill.active { background:linear-gradient(135deg,#e8450a 0%,#f7a01a 100%); color:#fff; border-color:transparent; box-shadow:0 4px 12px rgba(232,69,10,0.25); }
  .search-input { width:100%; padding:12px 14px 12px 40px; border-radius:10px; border:1.5px solid #e0e2e7; background:#fff; font-size:14px; font-family:'Nunito Sans',sans-serif; outline:none; color:#2d2d2d; transition:border 0.2s; }
  .search-input:focus { border-color:#e8450a; }
  .stat-card { background:#fff; border:1px solid #e8eaed; border-radius:14px; padding:20px 22px; cursor:pointer; transition:transform 0.15s,box-shadow 0.15s; }
  .stat-card:hover { transform:translateY(-2px); box-shadow:0 6px 20px rgba(0,0,0,0.07); }
  .pw-input { width:100%; padding:14px 16px; border-radius:10px; border:1.5px solid #e0e2e7; background:#fff; font-size:14px; font-family:'Nunito Sans',sans-serif; outline:none; color:#2d2d2d; transition:border 0.2s; margin-bottom:8px; }
  .pw-input:focus { border-color:#e8450a; }
  .pw-input.error { border-color:#ef4444; }
`;

function LoginScreen({ onLogin }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);

  const attempt = () => {
    if (pw === PASSWORD) {
      onLogin();
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 450);
    }
  };

  return (
    <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"linear-gradient(145deg,#fff8f5 0%,#fff3e8 50%,#fdf0e0 100%)", padding:24 }}>
      <div style={{ position:"fixed", top:"-80px", right:"-80px", width:340, height:340, borderRadius:"50%", background:"radial-gradient(circle,rgba(232,69,10,0.12) 0%,transparent 70%)", pointerEvents:"none" }}/>
      <div style={{ position:"fixed", bottom:"-60px", left:"-60px", width:280, height:280, borderRadius:"50%", background:"radial-gradient(circle,rgba(247,160,26,0.12) 0%,transparent 70%)", pointerEvents:"none" }}/>
      <div className={`fade-up${shaking ? " shake" : ""}`} style={{ background:"#fff", border:"1px solid #e8eaed", borderRadius:20, padding:"52px 44px", width:"100%", maxWidth:400, textAlign:"center", boxShadow:"0 8px 40px rgba(0,0,0,0.08)" }}>
        <img src="/logo.webp" alt="CFO Associates" style={{ width:180, marginBottom:32 }} />
        <h2 style={{ fontSize:18, fontWeight:700, color:"#2d2d2d", marginBottom:6 }}>Team Tool Library</h2>
        <p style={{ fontSize:13, color:"#8a8a9a", marginBottom:28 }}>Enter your team password to access internal tools.</p>
        <input type="password" className={`pw-input${error ? " error" : ""}`} placeholder="Team password" value={pw} onChange={e => { setPw(e.target.value); setError(false); }} onKeyDown={e => e.key === "Enter" && attempt()} />
        {error && <p style={{ color:"#ef4444", fontSize:12, marginBottom:12, textAlign:"left" }}>Incorrect password. Please try again.</p>}
        {!error && <div style={{ height:20 }} />}
        <button onClick={attempt} style={{ width:"100%", padding:"14px", borderRadius:10, border:"none", background:"linear-gradient(135deg,#e8450a 0%,#f7a01a 100%)", color:"#fff", fontSize:15, fontWeight:700, fontFamily:"'Nunito Sans',sans-serif", cursor:"pointer", boxShadow:"0 4px 18px rgba(232,69,10,0.28)" }}
          onMouseEnter={e => e.currentTarget.style.opacity="0.88"} onMouseLeave={e => e.currentTarget.style.opacity="1"}>
          Access Library →
        </button>
        <p style={{ marginTop:20, fontSize:11, color:"#bbb" }}>🔒 Internal access only · CFO Associates</p>
      </div>
    </div>
  );
}

function Portal() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = tools.filter(t => {
    const matchCat = activeCategory === "All" || t.category === activeCategory;
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) || t.description.toLowerCase().includes(search.toLowerCase()) || t.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const liveCount = tools.filter(t => t.status === "live").length;

  return (
    <div style={{ minHeight:"100vh", background:"#f4f5f7" }}>
      <div style={{ background:"#fff", borderBottom:"1px solid #e8eaed", padding:"0 40px", position:"sticky", top:0, zIndex:10, display:"flex", alignItems:"center", justifyContent:"space-between", height:68 }}>
        <img src="/logo.webp" alt="CFO Associates" style={{ height:36 }} />
        <div style={{ fontSize:12, fontWeight:600, color:"#8a8a9a", background:"#f4f5f7", border:"1px solid #e8eaed", padding:"6px 14px", borderRadius:20, letterSpacing:"0.04em" }}>🔒 INTERNAL ACCESS ONLY</div>
      </div>

      <div style={{ maxWidth:1100, margin:"0 auto", padding:"48px 32px" }}>
        <div className="fade-up" style={{ marginBottom:40 }}>
          <div style={{ display:"inline-block", background:"linear-gradient(135deg,rgba(232,69,10,0.1),rgba(247,160,26,0.1))", border:"1px solid rgba(232,69,10,0.2)", borderRadius:20, padding:"5px 14px", fontSize:12, fontWeight:700, color:"#e8450a", letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:16 }}>CFO Associates · Tool Library</div>
          <h1 style={{ fontSize:38, fontWeight:800, color:"#1a1a2e", lineHeight:1.15, letterSpacing:"-0.5px", marginBottom:12 }}>
            Your firm's tools,<br />
            <span style={{ background:"linear-gradient(135deg,#e8450a,#f7a01a)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>all in one place.</span>
          </h1>
          <p style={{ fontSize:15, color:"#6b6b80", lineHeight:1.65, maxWidth:500 }}>{liveCount} live tool{liveCount !== 1 ? "s" : ""} across {categories.length - 1} categories, built exclusively for the CFO Associates team.</p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:16, marginBottom:40 }}>
          {categories.slice(1).map((cat, i) => {
            const meta = categoryMeta[cat];
            const live = tools.filter(t => t.category === cat && t.status === "live").length;
            const total = tools.filter(t => t.category === cat).length;
            return (
              <div key={cat} className="stat-card fade-up" style={{ animationDelay:`${i*0.07}s` }} onClick={() => setActiveCategory(cat)}>
                <div style={{ fontSize:24, marginBottom:10 }}>{meta.icon}</div>
                <div style={{ fontSize:26, fontWeight:800, color:"#1a1a2e" }}>{live}<span style={{ fontSize:14, color:"#b0b0c0", fontWeight:400 }}>/{total}</span></div>
                <div style={{ fontSize:12, color:"#8a8a9a", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.05em" }}>{cat}</div>
                <div style={{ marginTop:10, height:3, borderRadius:2, background:`linear-gradient(90deg,${meta.accent},#f7a01a)`, width:`${live===0?10:(live/total)*100}%` }} />
              </div>
            );
          })}
        </div>

        <div style={{ display:"flex", gap:12, marginBottom:28, flexWrap:"wrap", alignItems:"center" }}>
          <div style={{ position:"relative", flex:1, minWidth:220 }}>
            <span style={{ position:"absolute", left:13, top:"50%", transform:"translateY(-50%)", fontSize:15, opacity:0.35 }}>🔍</span>
            <input className="search-input" placeholder="Search tools by name or category..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
            {categories.map(c => (
              <button key={c} className={`cat-pill${activeCategory===c?" active":""}`} onClick={() => setActiveCategory(c)}>
                {c !== "All" ? categoryMeta[c].icon + " " : ""}{c}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:20 }}>
          {filtered.map((tool, i) => {
            const meta = categoryMeta[tool.category] || {};
            const isLive = tool.status === "live";
            return (
              <div key={tool.id} className={`tool-card fade-up${!isLive?" dimmed":""}`} style={{ animationDelay:`${0.1+i*0.06}s` }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <div style={{ background:"linear-gradient(135deg,rgba(232,69,10,0.08),rgba(247,160,26,0.08))", border:"1px solid rgba(232,69,10,0.15)", color:meta.accent, fontSize:11, fontWeight:700, padding:"4px 11px", borderRadius:20, letterSpacing:"0.06em", textTransform:"uppercase" }}>{meta.icon} {tool.category}</div>
                  <div style={{ fontSize:11, fontWeight:600, padding:"4px 11px", borderRadius:20, background:isLive?"rgba(16,185,129,0.1)":"#f4f5f7", color:isLive?"#059669":"#b0b0c0" }}>{isLive?"● Live":"Coming soon"}</div>
                </div>
                <div>
                  <div style={{ fontSize:17, fontWeight:800, color:"#1a1a2e", marginBottom:7, lineHeight:1.3 }}>{tool.name}</div>
                  <div style={{ fontSize:13, color:"#6b6b80", lineHeight:1.65 }}>{tool.description}</div>
                </div>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"auto", paddingTop:4 }}>
                  <span style={{ fontSize:11, color:"#c0c0d0" }}>{tool.added ? `Added ${tool.added}` : ""}</span>
                  {isLive ? <a href={tool.url} target="_blank" rel="noreferrer" className="launch-btn">Launch →</a> : <span style={{ fontSize:12, color:"#c0c0d0", fontStyle:"italic" }}>In development</span>}
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && <div style={{ textAlign:"center", padding:"80px 0", color:"#b0b0c0", fontSize:15 }}>No tools match your search.</div>}
        <p style={{ textAlign:"center", fontSize:12, color:"#c0c0d0", marginTop:64 }}>CFO Associates · Internal Use Only · {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [authed, setAuthed] = useState(false);
  useEffect(() => {
    try { if (sessionStorage.getItem("cfoa_authed")==="true") setAuthed(true); } catch(_) {}
  }, []);
  const handleLogin = () => {
    try { sessionStorage.setItem("cfoa_authed","true"); } catch(_) {}
    setAuthed(true);
  };
  return (
    <>
      <style>{STYLES}</style>
      {authed ? <Portal /> : <LoginScreen onLogin={handleLogin} />}
    </>
  );
}
