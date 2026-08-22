# Hossam Salah

Data Analyst | Business Intelligence Analyst

Cairo, Egypt | Hosam.s.alsayed@gmail.com | +20 114 535 6455
LinkedIn: linkedin.com/in/hossam-salah-0a6033207 | GitHub: github.com/Hosam-Salah32 | Portfolio

---

## PROFESSIONAL SUMMARY

Data Analyst with nearly 3 years in US healthcare analytics, using SQL, Python, and Power BI to turn messy operational data into executive decisions. Identified **$70K** in missing copay revenue and **$30K** in inefficient marketing spend, improved forecasting accuracy by **27%**, and diagnosed an **11%** retention drop that pivoted a multi-region growth strategy. Builds the full path from Snowflake data modeling and ETL through to the dashboards leadership actually uses.

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

- **Revenue recovery:** Identified **$70K** in missing copay revenue by reconciling visit records against payment transactions across a multi-clinic network, and routed recoveries to billing staff ranked by evidentiary certainty.
- **Strategic growth analysis:** Diagnosed a multi-region plateau by identifying an **11% patient-frequency drop**; a ramp-up cohort analysis proved new clinics outperformed historical benchmarks by **29%**, pivoting executive strategy from acquisition spend to retention and surfacing **$30K** in inefficient marketing spend.
- **Forecasting:** Built automated Python time-series forecasting on 10K+ weekly records to predict patient volume, improving prediction accuracy by **27%**.
- **Production machine learning:** Built and deployed an appointment no-show prediction model over 6 iterations (calibrated XGBoost, time-based validation, leakage-audited feature pipeline), with a daily scoring job writing risk tiers and plain-English drivers back to Snowflake for staff outreach; monitored with SHAP and drift analysis.
- **Profitability modeling:** Designed a break-even model integrating labor rates, operational hours, and fixed overhead to calculate clinic visit-volume thresholds and proactively flag at-risk locations.
- **Data infrastructure and automation:** Engineered a pipeline standardizing **900+ inconsistent Excel files** and reconciling **850K+ clinical logs** against billing records to recover orphaned revenue; automated 5+ manual reporting workflows (**10+ hours/week saved**) and optimized Snowflake schema design for a **40% query-performance gain**.

---

## SELECTED PROJECTS

### Copay Reconciliation & Revenue Recovery — Multi-Clinic PT Network
- Mapped visit records against payment transactions to reconstruct expected versus actual patient payments, **identifying $70K in missing copay revenue**.
- Classified patients into a 7-tier action hierarchy ranked by evidentiary certainty, separating confirmed collections from cases needing verification or chart review so billing staff worked the highest-confidence recoveries first.
- Built a window-function rate-imputation engine with bundle detection to handle missing and non-standard rates, keeping every imputed value transparent and auditable for billing staff.
- **Stack:** Snowflake SQL, CTEs, window functions.

### Payer Mix & Reimbursement Optimization — 33-Clinic Network
- Consolidated **171 fragmented payer groupings** into a standardized taxonomy (payer, plan type, product) and built a visit-level fact table spanning **113K+ visits**, 13.8K patients, and **$7.25M** in collected payments.
- Quantified reimbursement variation from **$25 to $280 per visit** and diagnosed the payer-mix shift driving a sustained decline in average payment per visit.
- Ranked clinics by payer-mix efficiency, modeled best and worst case revenue scenarios for shifts in mix, and identified underrepresented high-reimbursement segments by clinic.
- Translated findings into an operating plan covering referral-source targeting, payer contract renegotiation priorities, and clinic capacity and staffing allocation.
- Delivered an executive payer-mix dashboard with clinic scorecards and a monthly tracking cadence against defined success metrics (blended revenue per visit, revenue per clinic, payer mix percentage).
- **Stack:** Snowflake, SQL, Power BI.

### Collections Analytics Platform — Multi-Clinic PT Group
- Built a Snowflake model tracking copay and cancellation-fee collection, replacing manual front-desk billing checks and classifying every transaction line into **15+ dispositions** (missing charges, duplicates, wrongful fees, miscoded entries) to drive a structured cleanup workflow.
- Engineered a snapshot-based fact model over daily extracts that carried no native change history, using window functions and synthetic tombstone records to make deletions and corrections auditable and to measure cleanup progress over time.
- Re-architected the Power BI measure layer around a snapshot-date-in-context pattern, resolving a semi-additive aggregation error where plain sums broke under grouped contexts and eliminating duplicated measure variants.
- Partnered with billing stakeholders to define and document **10+ load-bearing business rules** (bundle thresholds, accrual timing, partial-payment assumptions) before implementation; delivered a two-tier dashboard separating executive KPIs and waterfall decomposition from an operational data-quality view.
- **Stack:** Snowflake, SQL, Power BI, DAX.

### Revenue Cycle Management Analytics Pipeline
- Consolidated visit, clinical documentation, and billing data from **3 disparate systems** into a single Snowflake model for a 30+ clinic network, with business-day-aware SLA metrics, claims-funnel staging, and aging-bucket segmentation flagging delayed and underpaid claims.
- **Stack:** Snowflake, Python, Power BI, Google Cloud Storage.

### PTOC Intelligence Hub — Executive KPI Platform
- Delivered real-time operational, clinical, and scheduling KPIs for a 30+ clinic network, built end to end from the Snowflake data layer through a Python API to an interactive dashboard with composite clinic-health scoring and rule-based alerting.
- **Stack:** Snowflake, FastAPI, Python, Pandas, Chart.js.

### Customer Churn Prediction — Telecom
- ML pipeline on 7,000+ customer records: EDA, feature engineering, class-imbalance handling, and tuning across seven algorithms. **Result: 86% F1-score, 0.86 ROC AUC.** *Python, XGBoost, Scikit-learn.*

### Automatic Leukemia Image Detection
- CNN classifying blood-smear cell images as leukemic or healthy, benchmarked against classical models. **Result: 88% accuracy, 0.87 F1-score.** *Python, TensorFlow, Keras, OpenCV.*

---

## EDUCATION

**Associate Data Scientist Certificate** — DataCamp (Remote) | May 2024 – Sep 2024
90-hour track: data management, EDA, statistical modeling, machine learning, data communication.

**B.Sc. Biomedical Engineering** — Al-Shorouk Academy, Cairo | Oct 2018 – Jul 2023
Grade: Very Good. Graduation project: IoT wearable device (excellent score).

---

## LANGUAGES

Arabic (Native) | English (Proficient)
