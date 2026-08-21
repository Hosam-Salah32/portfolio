# Claude Code Build Spec — Personal Portfolio Website

> Hand this entire file to Claude Code. It contains everything needed to build,
> run, and deploy a modern personal portfolio site for **Hossam Salah** for free.

---

## 0. Instructions for Claude Code (read first)

Build the site exactly as specified below. Work in this order:

1. Scaffold the project, install dependencies, get `npm run dev` working.
2. Build all sections with the content in Section 4.
3. Verify the production build (`npm run build`) succeeds with zero errors.
4. Then stop and walk me through deployment (Section 6) step by step — do not
   assume my GitHub/Netlify accounts are configured.

Ask me before: installing anything outside the stack in Section 2, adding a
backend, or adding analytics/tracking.

---

## 1. Project Goal

A fast, modern, single-page personal portfolio website for a **Data Analyst /
Analytics Engineer**. It must:

- Load fast, be fully responsive (mobile-first), and score well on Lighthouse.
- Be a static site (no backend, no database) so it deploys free on Netlify.
- Look professional and recruiter-friendly — clean, not flashy.
- Be trivially editable later (content separated from layout where practical).

---

## 2. Tech Stack (use exactly this)

| Layer        | Choice                          | Reason                                |
|--------------|---------------------------------|---------------------------------------|
| Framework    | **Vite + React** (JS, not TS)   | Fast, simple, static-build friendly   |
| Styling      | **Tailwind CSS**                | Quick, consistent, responsive utils   |
| Icons        | **lucide-react**                | Clean, lightweight icon set           |
| Animation    | **framer-motion**               | Subtle scroll/entrance animations     |
| Deploy       | **Netlify** (free tier)         | Free static hosting + CI from GitHub  |
| Versioning   | **GitHub** (free public repo)   | Source of truth + Netlify trigger     |

Create with: `npm create vite@latest portfolio -- --template react`

Do **not** use Next.js, a CMS, or TypeScript — keep it minimal.

---

## 3. Site Structure

Single-page scroll layout with a sticky nav. Sections in order:

1. **Hero** — name, title, one-line value statement, CTA buttons (Email,
   LinkedIn, GitHub, Download CV), location (Cairo, Egypt).
2. **About** — short professional summary paragraph.
3. **Skills** — grouped skill chips/badges by category.
4. **Experience** — vertical timeline of roles.
5. **Projects** — card grid; each card links to the GitHub repo / notebook.
6. **Education & Certifications**.
7. **Contact** — email + social links (use `mailto:`, no backend form).
8. **Footer** — copyright + built-with note.

Design notes:
- Color scheme: dark-mode-first, navy/slate base (`slate-900` background),
  one accent color (cyan or emerald). Include a light/dark toggle if cheap.
- Typography: a clean sans (Inter or similar via Google Fonts).
- Subtle `framer-motion` fade-up on each section as it scrolls into view.
- Sticky top nav with smooth-scroll anchor links; collapses to a hamburger
  on mobile.

---

## 4. Content (use verbatim — this is real data)

### Identity
- **Name:** Hossam Salah
- **Title:** Data Analyst | Analytics Engineer
- **Location:** Cairo, Egypt
- **Email:** Hosam.s.alsayed@gmail.com
- **Phone:** +20 114 535 6455
- **LinkedIn:** https://www.linkedin.com/in/hossam-salah-0a6033207/
- **GitHub:** https://github.com/Hosam-Salah32

### Hero value statement
> Strategic Data Analyst specializing in data engineering and automation —
> turning messy multi-source healthcare data into forecasts, dashboards, and
> decisions that move revenue.

### About / Summary
Strategic Data Analyst specializing in Data Engineering & Automation.
Engineered pipelines consolidating 900+ disparate sources, improved forecasting
accuracy by 27%, and identified $30K in annual cost savings through patient
acquisition analysis. Shifted a multi-region expansion strategy by diagnosing an
11% retention drop and proving new clinic cohorts outperformed historical
benchmarks by 29%.

### Skills (grouped)
- **Programming & ML:** Python (Pandas, NumPy, Scikit-learn, TensorFlow,
  LangChain), SQL, ETL/ELT
- **Machine Learning:** Supervised/Unsupervised Learning, Time Series
  Forecasting, Deep Learning (CNN), Feature Engineering, Hyperparameter Tuning,
  RAG/NLP, TF-IDF
- **Data Platforms & Tools:** Snowflake, Git/GitHub, Jupyter, Ollama, ChromaDB
- **Visualization & BI:** Power BI, Tableau, Matplotlib, Seaborn
- **Analytical Methods:** Funnel Analysis, Churn Modeling, A/B Testing,
  Statistical Inference, KPI & Financial Modeling

### Experience (timeline)

**Data Analyst — COB Solution (US Healthcare)** · Dec 2023 – Present
- Built and automated Python time-series forecasting models on 10K+ weekly
  records, improving prediction accuracy by 27%.
- Diagnosed a multi-region plateau via an 11% patient-frequency drop; ramp-up
  cohort analysis proved new clinics beat historical benchmarks by 29%, pivoting
  executive strategy from marketing spend to retention and surfacing $30K in
  inefficient acquisition spend.
- Built a clinic-level Break-Even Analysis model to flag at-risk locations.
- Scripted Python ETL automating 5+ manual reports (10+ hrs/week saved);
  optimized Snowflake schema for 40% faster queries.

**Service Engineer — Lab Solutions** · Cairo, Egypt · Nov 2023 – Oct 2024
- Translated technical specifications into business value for healthcare
  stakeholders; delivered 15+ demos and training sessions to clinicians.

### Projects (card grid — 6 cards)

1. **PTOC Intelligence Hub** — Full-stack analytics platform: Snowflake data
   layer → FastAPI → interactive single-page dashboard surfacing real-time
   operational, clinical, and scheduling KPIs for a 30+ clinic network.
   *Stack:* Snowflake, FastAPI, pandas, Chart.js.

2. **No-Show Prediction Model** — End-to-end ML system predicting physical-
   therapy appointment no-shows; 6 model iterations, calibrated XGBoost, daily
   scoring pipeline writing risk tiers back to Snowflake.
   *Stack:* Python, XGBoost, Snowflake, scikit-learn.

3. **RCM Analytics Pipeline** — End-to-end Revenue Cycle Management pipeline +
   Power BI dashboard for a 30+ clinic network; claims funnel from visit to
   payment with business-day SLA metrics.
   *Stack:* Snowflake, Python, Power BI, GCS.

4. **Billing Reconciliation Automation** — Automated copay reconciliation
   Snowflake view cross-referencing scheduling and payment ledgers; 7-tier
   action classification routing patients to the correct billing action.
   *Stack:* Snowflake SQL, CTEs, window functions.

5. **Customer Churn Prediction** — XGBoost telecom churn model with 86%
   F1-score and 0.86 ROC AUC; SMOTE, feature engineering, model tuning, and an
   ensemble voting classifier.
   *Stack:* Python, XGBoost, scikit-learn.

6. **Automatic Leukemia Image Detection** — Deep-learning classifier for blood
   smear images (ALL vs. healthy cells); CNN baseline plus classical model
   comparison, top model at 88% accuracy.
   *Stack:* Python, TensorFlow/Keras, OpenCV.

Each card: title, one-line description, tech badges, "View on GitHub" link.
Point links to https://github.com/Hosam-Salah32?tab=repositories for now (I'll
later swap in the specific repo URL per project once each repo is named).

### Education & Certifications
- **Associate Data Scientist** — DataCamp (Remote) · May 2024 – Sep 2024 —
  90-hour track: data management, EDA, statistical modeling, ML, communication.
- **B.Sc. Biomedical Engineering** — Al-Shorouk Academy, Cairo · 2018 – 2023 —
  Grade: Very Good; IoT wearable graduation project (excellent score).

### CV download
Add a "Download CV" button in the hero. Put a PDF at `public/Hossam_Salah_CV.pdf`
(create a placeholder file with that name and tell me to replace it with my real
resume PDF).

### Footer
`© 2026 Hossam Salah · Built with React, Tailwind & Vite`

---

## 5. Quality Bar

- `npm run build` must succeed with no errors or warnings.
- Mobile (375px), tablet, desktop all clean — no horizontal scroll.
- Lighthouse: Performance ≥ 90, Accessibility ≥ 95.
- All images have `alt` text; nav links are keyboard-accessible.
- No console errors. No unused dependencies.
- Add a `README.md` explaining how to run and edit content.

---

## 6. Deployment Guide (Claude Code: walk me through this interactively)

### A. Push to GitHub
1. Confirm I have a GitHub account and `git` installed (`git --version`).
2. In the project folder:
   ```
   git init
   git add .
   git commit -m "Initial portfolio site"
   ```
3. Tell me to create a **new empty public repo** on github.com named
   `portfolio` (no README/gitignore — keep it empty).
4. Then connect and push:
   ```
   git branch -M main
   git remote add origin https://github.com/<MY-USERNAME>/portfolio.git
   git push -u origin main
   ```
   Ask me for `<MY-USERNAME>` before running this.

### B. Deploy on Netlify (free)
1. Tell me to sign up at app.netlify.com using "Log in with GitHub".
2. Click **Add new site → Import an existing project → GitHub**, authorize,
   pick the `portfolio` repo.
3. Build settings (Vite defaults):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy**. Netlify gives a free `*.netlify.app` URL.
5. Tell me how to rename the site (Site settings → Change site name) for a
   cleaner URL like `hossam-salah.netlify.app`.

### C. Continuous deployment
Explain that every `git push` to `main` now auto-rebuilds and redeploys —
no manual steps after this.

### D. SPA redirect fix
Create `public/_redirects` with:
```
/*  /index.html  200
```
so anchor routing and refreshes never 404 on Netlify.

### E. (Optional) Custom domain
Briefly note I can later add a custom domain free in Netlify if I buy one,
but it's optional.

---

## 7. Deliverables Checklist

- [ ] Working Vite + React + Tailwind project, dev server runs.
- [ ] All 8 sections built with the real content above.
- [ ] Responsive + dark theme + subtle animations.
- [ ] `public/_redirects` and placeholder `Hossam_Salah_CV.pdf` in place.
- [ ] `README.md` with run/edit instructions.
- [ ] `npm run build` passes clean.
- [ ] Step-by-step GitHub + Netlify walkthrough completed with me.
