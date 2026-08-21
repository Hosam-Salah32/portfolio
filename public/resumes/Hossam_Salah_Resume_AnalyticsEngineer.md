# Hossam Salah

Analytics Engineer | Data Engineer

Cairo, Egypt | Hosam.s.alsayed@gmail.com | +20 114 535 6455
LinkedIn: linkedin.com/in/hossam-salah-0a6033207 | GitHub: github.com/Hosam-Salah32

---

## PROFESSIONAL SUMMARY

Analytics Engineer with nearly 3 years building production data infrastructure for US healthcare. Engineered Snowflake data models, Python ETL pipelines, and full-stack analytics APIs serving 30+ clinics. Consolidated 900+ disparate data sources into single sources of truth, optimized Snowflake schemas for a 40% query-performance gain, and automated 5+ reporting workflows saving 10+ hours weekly. Builds the full path from raw operational data to executive decision surfaces.

---

## TECHNICAL SKILLS

- **Data Warehousing:** Snowflake (schema design, multi-CTE views, window functions, query optimization)
- **Languages:** SQL, Python, Vanilla JavaScript
- **Data Engineering:** ETL/ELT, Incremental Sync Pipelines, Pandas, NumPy, snowflake-connector-python, Data Modeling, Dimensional Modeling, Data Quality Validation
- **Cloud & Storage:** Google Cloud Storage (GCS), GCP SDK
- **APIs & Backends:** FastAPI, REST API Design, RSA Key-Pair Authentication
- **Business Intelligence:** Power BI, Tableau, Chart.js, Matplotlib, Seaborn
- **Machine Learning (Applied):** XGBoost, Scikit-learn, Time Series Forecasting, Feature Engineering
- **Analytical Methods:** Funnel Analysis, Cohort/Retention Analysis, Churn Modeling, A/B Testing, Statistical Inference, KPI & Financial Modeling, Break-Even Analysis
- **Tools:** Git, GitHub, Jupyter, ClickUp

---

## PROFESSIONAL EXPERIENCE

### Data Analyst — COB Solution (US Healthcare, Remote)
**Dec 2023 – Present**

- **Data Engineering & Automation:** Engineered Python ETL pipelines automating 5+ manual reporting processes (**10+ hours/week saved**); optimized Snowflake schema design achieving a **40% query-performance improvement**.
- **Forecasting Infrastructure:** Built and automated Python time-series forecasting pipelines processing 10K+ weekly records, improving forecasting accuracy by **27%**.
- **Strategic Growth Analysis:** Diagnosed a multi-region plateau by identifying an 11% patient-frequency drop; cohort analysis proved new clinics outperformed historical benchmarks by **29%**, surfacing **$30K** in inefficient acquisition spend.
- **Profitability Modeling:** Built a Break-Even Analysis model integrating labor rates, visit volume, and overhead to flag at-risk clinic locations.

---

## KEY PROJECTS

### PTOC Intelligence Hub — Full-Stack Analytics Platform
- Real-time operational, clinical, and scheduling KPIs for a multi-clinic physical therapy network (30+ clinics).
- Architected end-to-end: Snowflake data layer (multi-CTE SQL views) → Python FastAPI server (**32 REST endpoints across 6 domains**, in-memory Pandas store, RSA key-pair authentication) → interactive single-page Chart.js dashboard.
- Composite clinic-health scoring and rule-based alert engine; zero Snowflake round-trips during user interaction.
- **Stack:** Snowflake, FastAPI, Python, Pandas, NumPy, Chart.js, Vanilla JS.

### Revenue Cycle Management (RCM) Analytics Pipeline
- Built a multi-source Snowflake view consolidating visit, clinical documentation, and billing data across **3 disparate source systems** for a 30+ clinic network.
- Engineered business-day-aware SLA metrics; designed a claims-funnel staging model (Checked-Out → Finalized → Submitted → Paid) and an insurance-benchmarking layer.
- Developed an incremental Python GCS-to-Snowflake sync pipeline.
- **Stack:** Snowflake (SQL, CTEs, window functions), Python (Pandas, snowflake-connector, GCP Storage SDK), Power BI, Google Cloud Storage.

### Billing Reconciliation Automation
- Automated copay reconciliation replacing a manual billing review process with an auditable Snowflake view.
- Cross-references visit scheduling against payment ledger; reconstructs expected vs. actual payments with multi-source deduplication, a window-function rate-imputation engine, and bundle detection.
- 7-tier action classifier: COLLECT, VERIFY_THEN_COLLECT, CHART_REVIEW, REFUND, BUNDLE, ESCALATE, NO_ACTION.
- **Stack:** Snowflake SQL, complex CTEs, window functions.

### Clinic Data Infrastructure & Strategic Growth Review
- Python pipeline standardizing **900+ inconsistent Excel files** using custom "Header Hunting" and "Peek Test" validation algorithms.
- Hierarchical "Waterfall Matching" reconciliation (exact then fuzzy) merging **850K+ clinical logs** with billing records to recover orphaned revenue.
- Power BI executive dashboard diagnosing a retention decline that informed the 2026 strategic pivot.
- **Stack:** Python (Pandas, fuzzy matching), Power BI.

### No-Show Prediction Model — PT of The City
- End-to-end ML system predicting physical-therapy appointment no-shows, scoring tomorrow's schedule for staff outreach.
- Built across 6 iterative model versions; calibrated XGBoost with no-leakage feature pipeline; daily scoring pipeline writes back to Snowflake.
- **Stack:** Python, XGBoost, Scikit-learn, Snowflake, Google Cloud Storage.

### Customer Churn Prediction — Telecom
- ML pipeline on 7,000+ customer records: feature engineering, SMOTE, hyperparameter tuning, ensemble voting classifier.
- **Result:** **86% F1-score, 0.86 ROC AUC**.
- **Stack:** Python, XGBoost, Scikit-learn, Pandas.

### Automatic Leukemia Image Detection
- CNN classifier distinguishing leukemic from healthy blood-smear images.
- **Result:** **88% accuracy, 0.87 F1-score**.
- **Stack:** Python, TensorFlow, Keras, OpenCV.

### Customer Support Chatbot using RAG
- Local Retrieval-Augmented Generation chatbot answering questions from custom CSV/PDF documents.
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
