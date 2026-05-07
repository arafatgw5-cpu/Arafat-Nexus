<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Easin Arafat · CV 2026</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

    :root {
      --bg: #0d0d0d;
      --accent: #c8f25a;
      --text: #f0ede6;
      --muted: #888;
      --border: #222;
      --card-bg: #111;
    }

    body {
      margin: 0;
      background: #1a1a1a;
      display: flex;
      justify-content: center;
      padding: 20px;
      font-family: 'Space Grotesk', sans-serif;
    }

    .cv-wrap {
      background: var(--bg);
      color: var(--text);
      max-width: 900px;
      width: 100%;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0,0,0,0.5);
    }

    .cv-wrap * { box-sizing: border-box; margin: 0; padding: 0; }

    /* print button */
    .print-btn {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: var(--accent);
      color: #0d0d0d;
      border: none;
      padding: 12px 24px;
      font-family: 'Space Mono', monospace;
      font-weight: 700;
      font-size: 12px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      cursor: pointer;
      z-index: 1000;
      border-radius: 4px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.6);
      transition: opacity 0.2s;
    }
    .print-btn:hover { opacity: 0.9; }

    .topbar {
      background: var(--accent);
      padding: 8px 36px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .topbar-label {
      font-family: 'Space Mono', monospace;
      font-size: 9px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #0d0d0d;
      font-weight: 700;
    }

    .hero { padding: 40px 36px 32px; border-bottom: 1px solid var(--border); position: relative; }

    .hero-tag {
      font-family: 'Space Mono', monospace;
      font-size: 9px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 14px;
    }

    .hero-name {
      font-size: 54px;
      font-weight: 700;
      line-height: 1;
      letter-spacing: -0.03em;
      color: var(--text);
      margin-bottom: 8px;
    }

    .hero-name span { color: var(--accent); }

    .hero-role {
      font-size: 13px;
      font-weight: 400;
      color: var(--muted);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 24px;
    }

    .hero-bio {
      font-size: 13.5px;
      color: #aaa;
      line-height: 1.7;
      max-width: 550px;
      font-weight: 300;
    }

    .hero-bg-num {
      position: absolute;
      right: 36px;
      top: 40px;
      font-family: 'Space Mono', monospace;
      font-size: 72px;
      font-weight: 700;
      color: #181818;
      line-height: 1;
      user-select: none;
    }

    .cstrip {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      border-bottom: 1px solid var(--border);
    }

    .citem {
      padding: 14px 20px;
      border-right: 1px solid var(--border);
      min-width: 0;
    }

    .citem:last-child { border-right: none; }

    .citem-label {
      font-family: 'Space Mono', monospace;
      font-size: 8px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #555;
      margin-bottom: 4px;
    }

    .citem-val {
      color: var(--accent);
      font-size: 11px;
      font-weight: 500;
      word-break: break-word;
    }

    .body-grid { display: grid; grid-template-columns: 1fr 240px; }

    .main-col { border-right: 1px solid var(--border); padding: 28px 32px; }
    .side-col { padding: 24px 22px; }

    .sh {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 18px;
    }

    .sh-num {
      font-family: 'Space Mono', monospace;
      font-size: 9px;
      color: var(--accent);
      letter-spacing: 0.12em;
    }

    .sh-line { flex: 1; height: 1px; background: #222; }
    .sh-title {
      font-size: 9px;
      font-weight: 600;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #666;
    }

    .project-card {
      border: 1px solid #1e1e1e;
      background: var(--card-bg);
      margin-bottom: 14px;
      padding: 18px 20px;
      position: relative;
      overflow: hidden;
    }

    .project-card::before {
      content: '';
      position: absolute;
      left: 0; top: 0; bottom: 0;
      width: 3px;
      background: var(--accent);
    }

    .pc-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 8px;
    }

    .pc-name { font-size: 15px; font-weight: 600; color: var(--text); }
    .pc-tag {
      font-family: 'Space Mono', monospace;
      font-size: 8px;
      background: #1e1e1e;
      color: var(--accent);
      padding: 3px 8px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      border: 1px solid #2a2a2a;
      white-space: nowrap;
    }

    .pc-desc { font-size: 12px; color: #777; line-height: 1.65; margin-bottom: 10px; }

    .feat-item {
      font-size: 11.5px;
      color: #666;
      padding: 3px 0 3px 14px;
      position: relative;
      line-height: 1.5;
    }
    .feat-item::before {
      content: '→';
      position: absolute;
      left: 0;
      color: var(--accent);
      font-size: 10px;
    }

    .pc-stack {
      font-family: 'Space Mono', monospace;
      font-size: 9px;
      color: #555;
      letter-spacing: 0.06em;
      margin-top: 8px;
    }

    .exp-block {
      margin-bottom: 16px;
      padding-bottom: 16px;
      border-bottom: 1px solid #1a1a1a;
    }
    .exp-block:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }

    .exp-title { font-size: 13.5px; font-weight: 600; color: var(--text); }
    .exp-meta {
      font-family: 'Space Mono', monospace;
      font-size: 9px;
      color: #555;
      letter-spacing: 0.06em;
      margin-bottom: 6px;
    }

    .exp-note { font-size: 12px; color: #666; line-height: 1.6; }

    .avail {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: #0f1a06;
      border: 1px solid #2a3a1a;
      padding: 6px 12px;
      margin-top: 8px;
    }

    .avail-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
    .avail-text {
      font-family: 'Space Mono', monospace;
      font-size: 8px;
      color: var(--accent);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .skill-group { margin-bottom: 20px; }
    .sg-title {
      font-family: 'Space Mono', monospace;
      font-size: 8px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 10px;
    }

    .skill-pill {
      display: inline-block;
      font-size: 10px;
      padding: 4px 10px;
      border: 1px solid #1e1e1e;
      color: #888;
      margin: 3px 3px 0 0;
    }
    .skill-pill.hot {
      border-color: #2a3a1a;
      background: #0f1a06;
      color: var(--accent);
    }

    .lang-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
    .lang-name { font-size: 12px; color: #888; }
    .lang-level { font-family: 'Space Mono', monospace; font-size: 8px; color: var(--accent); text-align: right; }

    .bottombar {
      border-top: 1px solid var(--border);
      padding: 12px 36px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .bb-text {
      font-family: 'Space Mono', monospace;
      font-size: 8px;
      color: #333;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    /* ========== PRINT STYLES ========== */
    @media print {
      body { background: #fff; padding: 0; }
      .print-btn { display: none !important; }

      .cv-wrap {
        background: #fff;
        color: #111;
        max-width: 100%;
        box-shadow: none;
      }

      .topbar { background: #eee; color: #000; border-bottom: 1px solid #000; }
      .topbar-label { color: #000; }

      .hero { border-bottom: 1px solid #000; }
      .hero-tag { color: #000; }
      .hero-name { color: #000; }
      .hero-name span { color: #000; font-weight: 700; }
      .hero-role { color: #333; }
      .hero-bio { color: #222; }
      .hero-bg-num { color: #eee; }

      .cstrip { border-bottom: 1px solid #000; }
      .citem { border-right: 1px solid #000; }
      .citem-label { color: #000; }
      .citem-val { color: #000; font-weight: 600; }

      .body-grid { border: none; }
      .main-col { border-right: 1px solid #000; }
      .side-col { border-left: 1px solid #000; }

      .sh { border-bottom: 1px solid #ccc; padding-bottom: 6px; }
      .sh-num { color: #000; }
      .sh-line { background: #000; }
      .sh-title { color: #000; }

      .project-card {
        background: #fff;
        border: 1px solid #000;
      }
      .project-card::before { background: #000; }
      .pc-name { color: #000; }
      .pc-tag { background: #eee; color: #000; border: 1px solid #000; }
      .pc-desc { color: #222; }
      .feat-item { color: #222; }
      .feat-item::before { color: #000; }
      .pc-stack { color: #222; }

      .exp-block { border-bottom: 1px solid #ccc; }
      .exp-title { color: #000; }
      .exp-meta { color: #222; }
      .exp-note { color: #222; }

      .avail { background: #eee; border: 1px solid #000; color: #000; }
      .avail-dot { background: #000; }
      .avail-text { color: #000; }

      .skill-group .sg-title { color: #000; }
      .skill-pill { border: 1px solid #000; color: #000; }
      .skill-pill.hot { background: #eee; color: #000; }

      .lang-name { color: #000; }
      .lang-level { color: #000; }

      .bottombar { border-top: 1px solid #000; }
      .bb-text { color: #000; }

      * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }

    /* responsive for small screens (not print) */
    @media (max-width: 768px) {
      .topbar, .bottombar { padding: 10px 18px; flex-direction: column; align-items: flex-start; gap: 5px; }
      .hero { padding: 32px 20px 26px; }
      .hero-name { font-size: 44px; }
      .hero-bg-num { right: 20px; top: 36px; font-size: 54px; }
      .cstrip { grid-template-columns: repeat(2, 1fr); }
      .citem { border-bottom: 1px solid #222; }
      .body-grid { grid-template-columns: 1fr; }
      .main-col { border-right: none; border-bottom: 1px solid #222; padding: 24px 20px; }
      .side-col { padding: 24px 20px; }
    }
  </style>
</head>
<body>
  <button class="print-btn" onclick="window.print()">Download PDF</button>

  <div class="cv-wrap">
    <!-- top bar -->
    <div class="topbar">
      <span class="topbar-label">Curriculum Vitae — 2026</span>
      <span class="topbar-label">Frontend &amp; Full Stack Learner</span>
    </div>

    <!-- hero -->
    <div class="hero">
      <div class="hero-bg-num">// hero section-এ এইটুকু যোগ করুন:
<img
  src="https://avatars.githubusercontent.com/u/251947610?v=4"
  alt="Easin Arafat"
  style={{
    position: 'absolute',
    right: 32,
    top: 28,
    width: 90,
    height: 90,
    borderRadius: '50%',
    border: '2px solid #c8f25a',
    objectFit: 'cover',
    filter: 'grayscale(20%)'
  }}
/></div>
      <div class="hero-tag">// Available for junior / internship roles</div>
      <h1 class="hero-name">Easin<br><span>Arafat</span></h1>
      <div class="hero-role">Frontend Developer · React · Next.js · Bangladesh</div>
      <p class="hero-bio">
        Aspiring frontend & full‑stack developer focused on clean, responsive
        web apps with React, Next.js, Tailwind CSS, and MongoDB. I love solving
        real‑world problems through hands‑on projects and continuously improving
        my development skills.
      </p>
    </div>

    <!-- contact strip -->
    <div class="cstrip">
      <div class="citem"><div class="citem-label">Email</div><div class="citem-val">arafatgw5@gmail.com</div></div>
      <div class="citem"><div class="citem-label">Phone</div><div class="citem-val">01876751422</div></div>
      <div class="citem"><div class="citem-label">GitHub</div><div class="citem-val">github.com/arafatgw5-cpu</div></div>
      <div class="citem"><div class="citem-label">Location</div><div class="citem-val">Bangladesh</div></div>
    </div>

    <!-- body -->
    <div class="body-grid">
      <div class="main-col">
        <div class="sh">
          <span class="sh-num">01</span><div class="sh-line"></div><span class="sh-title">Selected Projects</span>
        </div>

        <!-- project cards (data inline) -->
        <div class="project-card">
          <div class="pc-header">
            <div class="pc-name">SkillSphere</div>
            <div class="pc-tag">Next.js App</div>
          </div>
          <p class="pc-desc">A modern online learning platform with course listings, details, authentication, and profile management.</p>
          <div class="feat-item">Secure authentication & protected routes (Better Auth)</div>
          <div class="feat-item">Dynamic course pages using Next.js App Router</div>
          <div class="feat-item">Fully responsive with Tailwind CSS (mobile/tablet/desktop)</div>
          <div class="pc-stack">Stack: <span style="color:#888">Next.js · Tailwind CSS · Better Auth · MongoDB</span></div>
        </div>

        <div class="project-card">
          <div class="pc-header">
            <div class="pc-name">Dragon News</div>
            <div class="pc-tag">News Portal</div>
          </div>
          <p class="pc-desc">Responsive news portal with category filtering, article details, and API-driven content.</p>
          <div class="feat-item">Dynamic routing for categories & articles</div>
          <div class="feat-item">Integration with Programming Hero News REST API</div>
          <div class="feat-item">Google/GitHub authentication UI</div>
          <div class="pc-stack">Stack: <span style="color:#888">Next.js · REST API · Better Auth · Tailwind CSS</span></div>
        </div>

        <div class="project-card">
          <div class="pc-header">
            <div class="pc-name">3D Book Project</div>
            <div class="pc-tag">Creative Web</div>
          </div>
          <p class="pc-desc">A creative browsing interface for books with clean visuals and smooth interactions.</p>
          <div class="feat-item">Immersive book browsing experience</div>
          <div class="feat-item">Optimized layout for all devices</div>
          <div class="feat-item">Deployed on Vercel with Lighthouse 95+</div>
          <div class="pc-stack">Stack: <span style="color:#888">Next.js · React · Tailwind CSS · Vercel</span></div>
        </div>

        <div class="project-card">
          <div class="pc-header">
            <div class="pc-name">Personal Portfolio</div>
            <div class="pc-tag">Portfolio</div>
          </div>
          <p class="pc-desc">Developer portfolio highlighting projects, resume, contact, and modern animations.</p>
          <div class="feat-item">Animated page transitions (Framer Motion)</div>
          <div class="feat-item">Dark theme with green accent design system</div>
          <div class="feat-item">Reusable components & clean architecture</div>
          <div class="pc-stack">Stack: <span style="color:#888">Next.js · Framer Motion · Tailwind CSS · shadcn/ui</span></div>
        </div>

        <div class="sh" style="margin-top:24px">
          <span class="sh-num">02</span><div class="sh-line"></div><span class="sh-title">Experience</span>
        </div>
        <div class="exp-block">
          <div class="exp-title">Frontend Developer</div>
          <div class="exp-meta">Personal & Academic Projects · 2024 — Present</div>
          <p class="exp-note">Building responsive modern web applications with React, Next.js, Tailwind CSS, and Better Auth. Delivered SkillSphere, Dragon News, and multiple assignment‑based projects with clean UI/UX.</p>
        </div>
        <div class="exp-block">
          <div class="exp-title">Full Stack Learner</div>
          <div class="exp-meta">Programming Hero / Self‑Learning · 2025 — Present</div>
          <p class="exp-note">Deepening expertise in full‑stack development: authentication, MongoDB integration, dynamic routing, deployment, and design systems.</p>
          <div class="avail">
            <div class="avail-dot"></div>
            <span class="avail-text">Available Now · Remote Ready</span>
          </div>
        </div>
      </div>

      <div class="side-col">
        <div class="sh">
          <span class="sh-num">03</span><div class="sh-line"></div><span class="sh-title">Skills</span>
        </div>
        <div class="skill-group">
          <div class="sg-title">Core Frontend</div>
          <span class="skill-pill hot">HTML</span> <span class="skill-pill hot">CSS</span> <span class="skill-pill hot">JavaScript</span>
          <span class="skill-pill hot">React</span> <span class="skill-pill hot">Next.js</span> <span class="skill-pill hot">Tailwind CSS</span>
        </div>
        <div class="skill-group">
          <div class="sg-title">UI & Animation</div>
          <span class="skill-pill">DaisyUI</span> <span class="skill-pill">shadcn/ui</span> <span class="skill-pill">Framer Motion</span>
          <span class="skill-pill">Responsive Design</span>
        </div>
        <div class="skill-group">
          <div class="sg-title">Backend & Auth</div>
          <span class="skill-pill">Node.js</span> <span class="skill-pill">Express.js</span> <span class="skill-pill">MongoDB</span>
          <span class="skill-pill">Better Auth</span> <span class="skill-pill">REST API</span>
        </div>
        <div class="skill-group">
          <div class="sg-title">Tools</div>
          <span class="skill-pill">Git</span> <span class="skill-pill">GitHub</span> <span class="skill-pill">VS Code</span>
          <span class="skill-pill">Vercel</span> <span class="skill-pill">Render</span> <span class="skill-pill">npm</span>
          <span class="skill-pill">Postman</span>
        </div>

        <div class="sh"><span class="sh-num">04</span><div class="sh-line"></div><span class="sh-title">Education</span></div>
        <div class="exp-block">
          <div class="exp-title">Web Development</div>
          <div class="exp-meta">Programming Hero Batch 13 · 2024 — Present</div>
          <p class="exp-note">Intensive hands‑on training in frontend & full‑stack with real assignments, responsive design, authentication, MongoDB, and deployment.</p>
        </div>
        <div class="exp-block">
          <div class="exp-title">Academic Studies</div>
          <div class="exp-meta">National University, Bangladesh · Present</div>
          <p class="exp-note">Pursuing degree while actively building programming, teamwork, and communication skills.</p>
        </div>

        <div class="sh"><span class="sh-num">05</span><div class="sh-line"></div><span class="sh-title">Languages</span></div>
        <div style="margin-bottom:12px">
          <div class="lang-row"><span class="lang-name">Bangla</span><span class="lang-level">Native</span></div>
          <div class="lang-row"><span class="lang-name">English</span><span class="lang-level">Professional (B2)</span></div>
        </div>

        <div class="sh"><span class="sh-num">06</span><div class="sh-line"></div><span class="sh-title">Interests</span></div>
        <p class="exp-note">Web Development, Clean UI Design, Open Source, Problem Solving, Continuous Learning.</p>
      </div>
    </div>

    <div class="bottombar">
      <span class="bb-text">Easin Arafat · CV 2026</span>
      <span class="bb-text">React · Next.js · Tailwind · Better Auth · MongoDB</span>
    </div>
  </div>
</body>
</html>