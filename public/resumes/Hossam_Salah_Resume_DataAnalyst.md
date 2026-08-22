# Hossam Salah

Data Analyst | Business Intelligence Analyst

Cairo, Egypt | Hosam.s.alsayed@gmail.com | +20 114 535 6455
LinkedIn: linkedin.com/in/hossam-salah-0a6033207 | GitHub: github.com/Hosam-Salah32 | Portfolio

---

## PROFESSIONAL SUMMARY

Data Analyst with nearly 3 years turning messy multi-system operational data into executive decisions, using SQL, Snowflake, Python, and Power BI. Identified **$70K** in unbilled revenue and **$30K** in inefficient marketing spend, improved forecasting accuracy by **27%**, and diagnosed an **11%** drop in customer visit frequency that pivoted a multi-region growth strategy. Builds the full path from data modeling and ETL through to the dashboards leadership actually uses, in a regulated US healthcare environment.

---

## TECHNICAL SKILLS

- **Querying & Programming:** SQL, Snowflake, Python (Pandas, NumPy), Advanced Excel, ETL/ELT
- **Business Intelligence:** Power BI, DAX, Semi-Additive Measures, Tableau, Matplotlib, Seaborn, Dashboard Design
- **Data Modeling:** Dimensional Modeling, Snapshot Fact Tables, Slowly Changing Data, Window Functions, CTEs, Snowflake Schema Design
- **Analytical Methods:** Cohort Analysis, Retention Analysis, Funnel Analysis, Customer Segmentation, Unit Economics, A/B Testing, Statistical Inference, Time Series Forecasting, KPI Modeling, Financial Modeling, Break-Even Analysis
- **Applied Machine Learning:** Scikit-learn, XGBoost, Feature Engineering, Model Calibration, Model Explainability (SHAP), Classification, Regression
- **Tools:** Git, GitHub, Jupyter, Google Cloud Storage, ClickUp

---

## PROFESSIONAL EXPERIENCE

### Data Analyst — COB Solution (US Healthcare, Remote)
**Dec 2023 – Present** | US time zone

- **Revenue recovery:** Identified **$70K** in unbilled revenue by reconciling service delivery records against payment transactions across a 30+ location network; classified every case into a 7-tier action hierarchy ranked by evidentiary certainty, backed by a window-function rate-imputation engine with bundle detection, so collections staff worked the highest-confidence recoveries first.
- **Strategic growth analysis:** Diagnosed a multi-region plateau by identifying an **11% drop in customer visit frequency**; a ramp-up cohort analysis proved new locations outperformed historical benchmarks by **29%**, pivoting executive strategy from acquisition spend to retention and surfacing **$30K** in inefficient marketing spend.
- **Forecasting:** Built automated Python time-series forecasting on 10K+ weekly records to predict demand volume, improving prediction accuracy by **27%**.
- **Production machine learning:** Built and deployed an appointment no-show prediction model over 6 iterations (calibrated XGBoost, time-based validation, leakage-audited feature pipeline), with a daily scoring job writing risk tiers and plain-English drivers back to Snowflake for staff outreach; monitored with SHAP and drift analysis.
- **Profitability modeling:** Designed a break-even model integrating labor rates, operational hours, and fixed overhead to calculate location-level volume thresholds and proactively flag at-risk sites.
- **Data infrastructure and automation:** Engineered a pipeline standardizing **900+ inconsistent Excel files** and reconciling **850K+ service logs** against billing records to recover orphaned revenue; automated 5+ manual reporting workflows (**10+ hours/week saved**) and optimized Snowflake schema design for a **40% query-performance gain**.

---

## SELECTED PROJECTS — COB SOLUTION

### Revenue Mix & Unit Economics Analysis — 33-Location Network
- Consolidated **171 fragmented customer-segment records** (insurance payers) into a standardized taxonomy and built a transaction-level fact table spanning **113K+ transactions**, 13.8K customers, and **$7.25M** in collected revenue.
- Quantified an **11x spread in revenue per transaction** ($25 to $280) across segments and diagnosed the mix shift driving a sustained decline in average revenue per transaction.
- Ranked locations by revenue-mix efficiency, modeled best and worst case scenarios for shifts in mix, and identified underrepresented high-value segments by location.
- Translated findings into an operating plan covering referral-source targeting, contract renegotiation priorities, and capacity and staffing allocation.
- Delivered an executive dashboard with location scorecards and a monthly tracking cadence against defined success metrics (blended revenue per transaction, revenue per location, segment mix percentage).
- **Stack:** Snowflake, SQL, Power BI.

### Collections Analytics Platform — Multi-Location Group
- Built a Snowflake model tracking outstanding customer balances and cancellation fees, replacing manual front-desk checks and classifying every transaction line into **15+ dispositions** (missing charges, duplicates, incorrect fees, miscoded entries) to drive a structured cleanup workflow.
- Engineered a snapshot-based fact model over daily extracts that carried no native change history, using window functions and synthetic tombstone records to make deletions and corrections auditable and to measure cleanup progress over time.
- Re-architected the Power BI measure layer around a snapshot-date-in-context pattern, resolving a semi-additive aggregation error where plain sums broke under grouped contexts and eliminating duplicated measure variants.
- Partnered with business stakeholders to define and document **10+ load-bearing business rules** (bundle thresholds, accrual timing, partial-payment assumptions) before implementation; delivered a two-tier dashboard separating executive KPIs and waterfall decomposition from an operational data-quality view.
- **Stack:** Snowflake, SQL, Power BI, DAX.

### Executive KPI Platform — 30+ Location Network
- Delivered real-time operational, service, and scheduling KPIs for a 30+ location network, replacing manual spreadsheet reporting.
- Built end to end from the Snowflake data layer through a Python API to an interactive dashboard, with composite location-health scoring and a rule-based alert engine.
- **Stack:** Snowflake, FastAPI, Python, Pandas, Chart.js.

---

## PERSONAL PROJECTS

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
