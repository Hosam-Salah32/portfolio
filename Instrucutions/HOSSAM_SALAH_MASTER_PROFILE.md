# Hossam Salah — Master Career Profile

> **Purpose:** Single source of truth for all professional content. Hand this to
> Claude Code (or any AI) alongside a task like "build my portfolio site" or
> "tailor my resume for this job description." Everything here is factual and
> reusable — pull from it, rephrase for the target, never invent beyond it.

---

## 1. Identity & Contact

| Field      | Value                              |
|------------|------------------------------------|
| Name       | Hossam Salah                       |
| Title      | Data Analyst / Analytics Engineer  |
| Location   | Cairo, Egypt                       |
| Email      | Hosam.s.alsayed@gmail.com          |
| Phone      | +20 114 535 6455                   |
| LinkedIn   | https://www.linkedin.com/in/hossam-salah-0a6033207/ |
| GitHub     | https://github.com/Hosam-Salah32          |
| Languages  | Arabic (Native), English (Proficient) |
| Time zone  | Works US time zone                 |

---

## 2. Positioning Statements

Use the version that fits the medium. All are accurate; pick by length.

**One-liner (hero / headline):**
Strategic Data Analyst specializing in data engineering and automation —
turning messy multi-source healthcare data into forecasts, dashboards, and
decisions that move revenue.

**Short summary (resume / About section):**
Strategic Data Analyst specializing in Data Engineering & Automation.
Engineered pipelines consolidating 900+ disparate sources, improved forecasting
accuracy by 27%, and identified $30K in annual cost savings through patient
acquisition analysis. Shifted a multi-region expansion strategy by diagnosing an
11% retention drop and proving new clinic cohorts outperformed historical
benchmarks by 29%.

**Extended summary (LinkedIn About / cover letter):**
Data Analyst and Analytics Engineer with a biomedical engineering background,
working in US healthcare analytics. I build end-to-end systems — from Snowflake
data layers and Python ETL pipelines through predictive models to BI dashboards
and full-stack analytics apps. My work spans forecasting, churn and no-show
prediction, revenue cycle analytics, and billing automation. I focus on the path
from raw, inconsistent operational data to decisions executives actually act on.

---

## 3. Professional Experience

### Data Analyst — COB Solution (US Healthcare)
**Dec 2023 – Present · US time zone (remote)**

- **Predictive modeling:** Developed and automated Python time-series
  forecasting models processing 10K+ weekly records to predict patient volume,
  improving prediction accuracy by 27%.
- **Strategic growth analysis:** Diagnosed a multi-region plateau by identifying
  an 11% patient-frequency drop; ran a ramp-up cohort analysis proving new
  clinics outperformed historical benchmarks by 29%, pivoting executive strategy
  from marketing spend to retention — validated by surfacing $30K in inefficient
  acquisition-channel spending.
- **Profitability analytics:** Built a Break-Even Analysis model integrating
  labor rates, visit volume, and overhead to calculate clinic-level
  profitability thresholds and proactively flag at-risk locations.
  *Business framing (use this, not the mechanism):* the model identifies the
  profit-maximizing visit volume per clinic, not just a break-even floor.
  Volume is not always good — past a threshold, added visits force staffing
  hours the clinic cannot fill to 100% utilisation, so the model also shows
  when *cutting* visits protects margin.
- **Data engineering & automation:** Scripted Python ETL workflows automating 5+
  manual reporting processes (10+ hours/week saved); optimized Snowflake schema
  design for a 40% query-performance gain.

*Resume-bullet variants — pick 2–3 per resume depending on the role's focus:*
- *Analytics-focused role:* lead with predictive modeling + strategic growth.
- *Engineering-focused role:* lead with ETL automation + Snowflake optimization.
- *Business/ops role:* lead with the $30K savings + strategy pivot.

---

## 4. Projects

Each project has: a one-liner (cards), a paragraph (detailed pages), the stack,
and impact metrics. Pull whichever depth the medium needs.

### 4.1 PTOC Intelligence Hub
- **One-liner:** Full-stack analytics platform surfacing real-time operational,
  clinical, and scheduling KPIs for a multi-clinic physical therapy network.
- **Detail:** Built end-to-end — Snowflake data layer (multi-CTE SQL views) →
  Python FastAPI server (32 REST endpoints, in-memory pandas store, RSA key-pair
  auth) → an interactive single-page dashboard (Chart.js, no framework) — to
  replace manual spreadsheet reporting across 30+ clinics.
- **Stack:** Snowflake, FastAPI, Python, pandas, NumPy, Chart.js, Vanilla JS.
- **Highlights:** 32 endpoints across 6 domains; zero Snowflake round-trips
  during user interaction; composite clinic health scoring + rule-based alert
  engine.

### 4.2 No-Show Prediction Model — PT of The City
- **One-liner:** End-to-end ML system predicting physical-therapy appointment
  no-shows, scoring tomorrow's schedule so staff can prioritize outreach.
- **Detail:** Built iteratively across 6 model versions, each driven by
  diagnostics and feature audits. Calibrated XGBoost (isotonic regression) on a
  time-based split, with a no-leakage feature pipeline (behavioral priors,
  responsiveness, target encodings). A daily scoring pipeline assigns risk tiers
  and plain-English reasons, writing results back to Snowflake.
- **Stack:** Python, XGBoost, scikit-learn, Snowflake, Google Cloud Storage,
  Meteostat, pgeocode.
- **Highlights:** v6 final model; risk-tier operating points derived from
  recall-at-precision analysis; full diagnostics suite (SHAP, PSI drift, leakage
  checks).
- **Business framing (lead with this, not the model internals):** the point is
  the intervention, not the prediction. Flagged appointments get either a
  confirmation call or a double-booked slot, converting would-be empty slots
  into billable visits. Outcome: protected revenue and higher staff
  utilisation. No percentage figure available — do not invent one.

### 4.3 Revenue Cycle Management (RCM) Analytics Pipeline
- **One-liner:** End-to-end RCM data pipeline and Power BI dashboard giving a
  30+ clinic network real-time visibility into the claims lifecycle.
- **Detail:** Built a multi-source Snowflake view consolidating visit, clinical
  documentation, and billing data across 3 disparate systems; engineered
  business-day-aware SLA metrics; designed a claims funnel staging model
  (Checked-Out → Finalized → Submitted → Paid) and an insurance benchmarking
  layer. Developed an incremental Python GCS-to-Snowflake sync pipeline.
- **Stack:** Snowflake (SQL, CTEs, window functions), Python (pandas,
  snowflake-connector, GCP Storage SDK), Power BI, Google Cloud Storage.
- **Highlights:** Single source of truth across billing, EMR, and scheduling;
  aging-bucket segmentation flagging delayed/underpaid claims.

### 4.4 Copay Reconciliation & Revenue Recovery
> Distinct from 4.9. This project is the *analysis* that found the money; 4.9 is
> the *engineering platform* that made the underlying data usable and tracked
> cleanup progress over time. Keep them as separate entries.

- **One-liner:** Copay reconciliation mapping visits to payment transactions to
  identify missing patient payments, surfacing $70K in unbilled copay revenue.
- **Detail:** Cross-references a visit scheduling database against a payment
  ledger to reconstruct expected vs. actual patient payments, then categorises
  each patient by evidentiary certainty so billing staff work the
  highest-confidence recoveries first. Includes multi-source deduplication, a
  window-function rate-imputation engine, bundle detection, and a 7-tier action
  classification (COLLECT, VERIFY_THEN_COLLECT, CHART_REVIEW, REFUND, BUNDLE,
  ESCALATE, NO_ACTION).
- **Stack:** Snowflake SQL, complex CTEs, window functions.
- **Metrics:** **$70K in missing copay revenue identified.**
- **Highlights:** Certainty-ranked patient categorisation; reduced manual
  chart-review workload by auto-clearing clean cases; full imputation
  transparency for billing staff.
- **Resume note:** Do not list the 7 enum values verbatim — describe it as a
  "7-tier action hierarchy ranked by evidentiary certainty."

### 4.5 Customer Churn Prediction (Telecom)
- **One-liner:** XGBoost churn model identifying at-risk telecom customers and
  the drivers behind churn.
- **Detail:** End-to-end ML pipeline on 7,000+ customer records — EDA, feature
  engineering, SMOTE for class imbalance, hyperparameter tuning, and an ensemble
  voting classifier. Compared Logistic Regression, Random Forest, Gradient
  Boosting, SVM, KNN, Naive Bayes, and XGBoost.
- **Stack:** Python, XGBoost, scikit-learn, pandas.
- **Metrics:** 86% F1-score, 0.86 ROC AUC (Aug 2024).

### 4.6 Automatic Leukemia Image Detection
- **One-liner:** Deep-learning classifier distinguishing leukemic from healthy
  blood-smear cell images.
- **Detail:** Built a CNN baseline in Keras to classify microscopic blood cell
  images as ALL (leukemia) vs. HEM (healthy), with EDA, training/loss curves,
  confusion matrices, and a classical-model comparison.
- **Stack:** Python, TensorFlow/Keras, OpenCV, scikit-learn.
- **Metrics:** Top model 88% accuracy, 0.87 F1-score.

### 4.7 Customer Support Chatbot using RAG
- **One-liner:** Local AI chatbot answering questions from custom CSV/PDF files.
- **Detail:** Retrieval-augmented chatbot using LangChain, Ollama, and ChromaDB
  that retrieves from custom documents and generates context-aware responses
  (Jul 2025).
- **Stack:** LangChain, Ollama, ChromaDB, Python.

### 4.8 End-to-End Clinic Data Infrastructure & Strategic Growth Review
- **One-liner:** Python pipeline standardizing 900+ inconsistent Excel files,
  feeding an executive Power BI dashboard.
- **Detail:** Engineered a pipeline to ingest 900+ inconsistent Excel files
  using custom "Header Hunting" + "Peek Test" validation algorithms; designed a
  hierarchical "Waterfall Matching" reconciliation (exact → fuzzy logic) merging
  850K+ clinical logs with billing records, recovering orphaned revenue; built a
  Power BI dashboard diagnosing an ~11% retention decline that informed the 2026
  strategic pivot.
- **Stack:** Python (pandas, fuzzy matching), Power BI.
- **Date:** Dec 2024.

### 4.9 Collections Analytics Platform
> Distinct from 4.4. This is the engineering/tracking layer; 4.4 is the analysis
> that identified the $70K. Keep them as separate entries.

- **One-liner:** Snowflake reconciliation model and two-tier Power BI dashboard
  tracking copay and cancellation-fee collection across a multi-clinic PT
  practice, replacing manual front-desk billing checks.
- **Detail:** Snapshot-based fact model built on daily historical extracts,
  tracking each transaction line through its full lifecycle (added, duplicated,
  miscoded, resolved) via a dual-key design and synthetic "tombstone" rows that
  make deletions and corrections auditable over time — the source system carries
  no native change history. Classifies every line into 15+ dispositions to drive
  a front-desk cleanup workflow. Semi-additive DAX measures resolve a "current
  balance vs. period sum" modelling error, letting one measure set work across
  cards, trend lines, and cohort matrices without duplicated logic.
- **Stack:** Snowflake, SQL (window functions, CTEs), Power BI, DAX.
- **Highlights:** 15+ dispositions; 10+ load-bearing business rules documented
  with stakeholders before implementation; two-tier dashboard (executive KPI and
  waterfall decomposition vs. operational data-quality/backlog view); WoW/MoM
  progress tracking; aging and clinic-level backlog analysis.
- **Resume note:** Do not use internal object names (VW_PAYMENT_FACT_V3,
  LINE_KEY, OBLIGATION_KEY) — they mean nothing outside the codebase. The
  tombstone, snapshot, and semi-additive concepts are the credibility signals.

### 4.10 Payer Mix & Reimbursement Optimization
- **One-liner:** End-to-end payer mix analysis across a 33-clinic network,
  from payer taxonomy through opportunity sizing to an executive dashboard and
  a monthly tracking cadence.
- **Detail:** Collapsed 171 fragmented insurance groupings into a standardized
  taxonomy (payer, plan type, product), standardized clinic names, deduped
  patients, and built a single visit-level fact table. Analysed payment per
  visit and payer mix by clinic and appointment type, utilisation patterns by
  payer, and mix shift over time — connecting it to a previously flagged decline
  in average payment per visit. Ranked clinics by payer-mix efficiency, modelled
  best/worst-case revenue scenarios, and identified underrepresented
  high-reimbursement segments by clinic. Findings drove an operating plan across
  referral-source targeting, payer contract renegotiation, and clinic capacity
  and staffing allocation, tracked monthly against defined success metrics.
- **Stack:** Snowflake, SQL, Power BI.
- **Metrics:** 113,725 visits · 33 clinics · 13,802 patients · $7.25M collected
  (Jan–May 2026); 171 payer groupings consolidated; $25–$280 per-visit
  reimbursement spread.
- **Resume note:** Frame this as payer mix and reimbursement analysis, never as
  "reducing low-paying insurance visits" — on a healthcare resume that reads as
  care rationing. Lead with contract, referral, and capacity levers.

---

## 5. Skills

| Category               | Skills |
|------------------------|--------|
| Programming & ML       | Python (Pandas, NumPy, Scikit-learn, TensorFlow, LangChain), SQL, ETL/ELT |
| Machine Learning       | Supervised/Unsupervised Learning, Time Series Forecasting, Deep Learning (CNN), Feature Engineering, Hyperparameter Tuning, RAG/NLP, TF-IDF |
| Data Platforms & Tools | Snowflake, Git/GitHub, Jupyter, Ollama, ChromaDB, Google Cloud Storage |
| Visualization & BI     | Power BI, Tableau, Matplotlib, Seaborn |
| Analytical Methods     | Funnel Analysis, Churn Modeling, A/B Testing, Statistical Inference, Cohort/Retention Analysis, KPI & Financial Modeling, Break-Even Analysis |
| Collaboration          | GitHub, ClickUp |

---

## 6. Education & Certifications

- **Associate Data Scientist** — DataCamp (Remote) · May 2024 – Sep 2024
  90-hour track: data management, EDA, statistical modeling, machine learning,
  and data communication.
- **B.Sc. Biomedical Engineering** — Al-Shorouk Academy, Cairo · Oct 2018 – Jul 2023
  Grade: Very Good. Graduation project: an IoT wearable device (excellent score).

---

## 7. Quantified Achievements (reusable proof points)

Drop these into bullets, summaries, or interview answers as needed:

- $70K in missing copay revenue identified.
- 27% improvement in forecasting accuracy (10K+ weekly records).
- $30K in inefficient acquisition spend identified and eliminated.
- 113,725 visits / $7.25M in collected payments analysed across 33 clinics.
- 171 fragmented payer groupings consolidated into a standardized taxonomy.
- 15+ transaction dispositions classified in the collections cleanup workflow.
- 11% retention drop diagnosed → executive strategy pivot.
- 29% — margin by which new clinic cohorts beat historical benchmarks.
- 40% Snowflake query-performance improvement.
- 10+ hours/week saved by automating 5+ manual reports.
- 900+ inconsistent Excel files consolidated into one pipeline.
- 850K+ clinical logs reconciled against billing records.
- 86% F1 / 0.86 ROC AUC — telecom churn model.
- 88% accuracy / 0.87 F1 — leukemia image classifier.
- 32 REST endpoints across 6 domains — PTOC Intelligence Hub.
- 6 iterative model versions — no-show prediction system.

---

## 8. Themes & Narrative (for cover letters / interviews)

- **Healthcare domain depth:** Biomedical engineering degree + nearly 3 years in
  US healthcare analytics. Comfortable with clinical, billing, and scheduling data.
- **Full-stack analytics:** Not just a modeler — builds the data layer
  (Snowflake), the pipeline (Python ETL), the model, and the delivery surface
  (Power BI / FastAPI dashboards).
- **Business impact over tooling:** Frames work in dollars, hours, and strategy
  shifts, not just metrics.
- **Rigor:** Iterative, diagnostics-driven modeling; explicit attention to data
  leakage, drift, and calibration.

---

## 9. How to Use This File

- **Building the portfolio site:** Use Sections 1–6 verbatim. Section 7 makes
  good hero/section stat callouts.
- **Tailoring a resume:** Pick the experience-bullet variants (Section 3) and
  3–4 most relevant projects matching the job description; lead with matching
  proof points from Section 7.
- **LinkedIn / cover letter:** Use the extended summary (Section 2) and the
  narrative themes (Section 8).
- **Rule:** Rephrase freely for tone and length, but do not add achievements,
  dates, or metrics not listed here.
