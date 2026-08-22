# Hossam Salah

Data Analyst | Business Intelligence Analyst

Cairo, Egypt | Hosam.s.alsayed@gmail.com | +20 114 535 6455
LinkedIn: linkedin.com/in/hossam-salah-0a6033207 | GitHub: github.com/Hosam-Salah32 | Portfolio

---

## PROFESSIONAL SUMMARY

Data Analyst with nearly 3 years in US healthcare analytics, using SQL, Python, and Power BI to turn messy operational data into executive decisions. Surfaced **$30K** in annual cost savings, improved forecasting accuracy by **27%**, and diagnosed an **11%** retention drop that pivoted a multi-region growth strategy. Builds the full path from Snowflake data modeling and ETL through to the dashboards leadership actually uses.

---

## TECHNICAL SKILLS

- **Querying & Programming:** SQL, Snowflake, Python (Pandas, NumPy), Advanced Excel, ETL/ELT
- **Business Intelligence:** Power BI, DAX, Semi-Additive Measures, Tableau, Matplotlib, Seaborn, Dashboard Design
- **Data Modeling:** Dimensional Modeling, Snapshot Fact Tables, Slowly Changing Data, Window Functions, CTEs, Snowflake Schema Design
- **Analytical Methods:** Cohort Analysis, Retention Analysis, Funnel Analysis, A/B Testing, Statistical Inference, Time Series Forecasting, KPI Modeling, Financial Modeling, Break-Even Analysis, Churn Modeling
- **Applied Machine Learning:** Scikit-learn, XGBoost, Feature Engineering, Model Calibration, Model Explainability (SHAP), Classification, Regression
- **Tools:** Git, GitHub, Jupyter, Google Cloud Storage, ClickUp

---

## PROFESSIONAL EXPERIENCE

### Data Analyst — COB Solution (US Healthcare, Remote)
**Dec 2023 – Present** | US time zone

- **Strategic growth analysis:** Diagnosed a multi-region plateau by identifying an **11% patient-frequency drop**; a ramp-up cohort analysis proved new clinics outperformed historical benchmarks by **29%**, pivoting executive strategy from acquisition spend to retention and surfacing **$30K** in inefficient marketing spend.
- **Forecasting:** Built automated Python time-series forecasting on 10K+ weekly records to predict patient volume, improving prediction accuracy by **27%**.
- **Production machine learning:** Built and deployed an appointment no-show prediction model over 6 iterations (calibrated XGBoost, time-based validation, leakage-audited feature pipeline), with a daily scoring job writing risk tiers and plain-English drivers back to Snowflake for staff outreach; monitored with SHAP and drift analysis.
- **Reimbursement and payer-mix analytics:** Analyzed **113K+ visits across 33 clinics** representing **$7.25M** in collected payments to quantify reimbursement variation across 171 payer groupings, where per-visit payment ranges from $25 to $280; delivered an executive dashboard and a root-cause analysis explaining a sustained decline in average payment per visit.
- **Profitability modeling:** Designed a break-even model integrating labor rates, operational hours, and fixed overhead to calculate clinic visit-volume thresholds and proactively flag at-risk locations.
- **Data infrastructure and automation:** Engineered a pipeline standardizing **900+ inconsistent Excel files** and reconciling **850K+ clinical logs** against billing records to recover orphaned revenue; automated 5+ manual reporting workflows (**10+ hours/week saved**) and optimized Snowflake schema design for a **40% query-performance gain**.

---

## SELECTED PROJECTS

### Payment Reconciliation & Collections Analytics Platform — Multi-Clinic PT Group
- Built a Snowflake reconciliation model tracking copay and cancellation-fee collection across a multi-clinic practice, replacing manual and error-prone front-desk billing checks; classifies every transaction line into **15+ dispositions** (missing charges, duplicates, wrongful fees, miscoded entries) to drive a structured cleanup workflow.
- Engineered a snapshot-based fact model over daily extracts that carried no native change history, using window functions and synthetic tombstone records to make deletions and corrections auditable and to measure cleanup progress over time.
- Re-architected the Power BI measure layer around a snapshot-date-in-context pattern, resolving a semi-additive aggregation error where plain sums broke under grouped contexts and eliminating duplicated measure variants across cards, trend lines, and cohort matrices.
- Partnered with billing stakeholders through iterative requirements gathering to define and document **10+ load-bearing business rules** (bundle thresholds, accrual timing, partial-payment assumptions) before implementation.
- Delivered a two-tier dashboard: an executive KPI view with week-over-week progress bridge and waterfall decomposition of movement, and an operational data-quality view with aging and clinic-level backlog for the cleanup team.
- **Stack:** Snowflake, SQL (window functions, CTEs), Power BI, DAX.

### Revenue Cycle Management Analytics Pipeline
- Consolidated visit, clinical documentation, and billing data from **3 disparate systems** into a single Snowflake model for a 30+ clinic network.
- Engineered business-day-aware SLA metrics, claims-funnel staging, insurance benchmarking, and aging-bucket segmentation flagging delayed and underpaid claims, surfaced through Power BI.
- **Stack:** Snowflake, Python, Power BI, Google Cloud Storage.

### PTOC Intelligence Hub — Executive KPI Platform
- Delivered real-time operational, clinical, and scheduling KPIs for a 30+ clinic physical therapy network, replacing manual spreadsheet reporting.
- Built end to end from the Snowflake data layer through a Python API to an interactive dashboard, including composite clinic-health scoring and a rule-based alert engine.
- **Stack:** Snowflake, FastAPI, Python, Pandas, Chart.js.

### Customer Churn Prediction — Telecom
- Machine learning pipeline on 7,000+ customer records covering EDA, feature engineering, class-imbalance handling, and model tuning across seven algorithms. **Result: 86% F1-score, 0.86 ROC AUC.**
- **Stack:** Python, XGBoost, Scikit-learn, Pandas.

### Automatic Leukemia Image Detection
- Convolutional neural network classifying blood-smear cell images as leukemic or healthy, benchmarked against classical models. **Result: 88% accuracy, 0.87 F1-score.**
- **Stack:** Python, TensorFlow, Keras, OpenCV.

### Customer Support Chatbot (Retrieval-Augmented Generation)
- Local AI chatbot answering questions from custom CSV and PDF documents using semantic retrieval and context-aware response generation.
- **Stack:** LangChain, Ollama, ChromaDB, Python.

---

## EDUCATION

### Associate Data Scientist Certificate — DataCamp (Remote)
**May 2024 – Sep 2024** | 90-hour track covering data management, EDA, statistical modeling, machine learning, and data communication.

### Bachelor of Science, Biomedical Engineering — Al-Shorouk Academy, Cairo
**Oct 2018 – Jul 2023** | Grade: Very Good. Graduation project: IoT wearable device (excellent score).

---

## LANGUAGES

Arabic (Native) | English (Proficient)
