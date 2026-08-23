// Edit this file to update site content. All copy is sourced from the
// HOSSAM_SALAH_MASTER_PROFILE.md kept in the Instrucutions/ folder.

export const identity = {
  name: 'Hossam Salah',
  title: 'Data Analyst | Data Scientist',
  location: 'Cairo, Egypt',
  email: 'Hosam.s.alsayed@gmail.com',
  phone: '+20 114 535 6455',
  linkedin: 'https://www.linkedin.com/in/hossam-salah-0a6033207/',
  github: 'https://github.com/Hosam-Salah32',
  githubRepos: 'https://github.com/Hosam-Salah32?tab=repositories',
  cvPath: '/Hossam_Salah_CV.pdf',
}

// Three short specialty chips shown directly under the name in the hero.
export const specialties = [
  'Data Pipelines',
  'Forecasting',
  'BI Dashboards',
]

// Two-sentence hero pitch. First sentence: what I do. Second: the outcome.
export const heroStatement =
  'I turn messy multi-source healthcare data into pipelines, forecasts, and dashboards. The work finds revenue nobody was billing for, fills slots that would have gone empty, and tells leadership which clinics to grow and which to right-size.'

// Headline metric strip rendered in the hero. Each value animates from 0.
export const heroMetrics = [
  { value: 70, suffix: 'K', prefix: '$', label: 'unbilled revenue identified' },
  { value: 95, suffix: '%', prefix: '', label: 'staff utilization, up from 85%' },
  { value: 27, suffix: '%', prefix: '+', label: 'forecast accuracy lift' },
  { value: 900, suffix: '+', prefix: '', label: 'data sources unified' },
]

// Tech logo bar shown in the hero. Icons resolved by slug in Hero.jsx.
export const heroStack = [
  { slug: 'python', label: 'Python' },
  { slug: 'sql', label: 'SQL' },
  { slug: 'snowflake', label: 'Snowflake' },
  { slug: 'powerbi', label: 'Power BI' },
  { slug: 'xgboost', label: 'XGBoost' },
  { slug: 'tensorflow', label: 'TensorFlow' },
]

// Short two-sentence intro above the About stat tiles.
export const aboutIntro =
  'I work at the seam between raw data and the decisions a business actually makes. My focus is data engineering, automation, and forecasting in US healthcare.'

// Three glass stat tiles rendered inside About.
export const aboutStats = [
  {
    value: '$70K',
    label: 'unbilled revenue identified',
    detail: 'Reconciled visits against payments, ranking every case by certainty.',
  },
  {
    value: '90-95%',
    label: 'staff utilization, from 80-85%',
    detail: 'Found the visit volume that maximizes margin, clinic by clinic.',
  },
  {
    value: '900+',
    label: 'disparate sources consolidated',
    detail: 'Pipelines that unify scheduling, billing, and clinical feeds.',
  },
]

export const skills = [
  {
    category: 'Visualization & BI',
    items: [
      { name: 'Power BI', slug: 'powerbi' },
      { name: 'DAX', slug: 'powerbi' },
      { name: 'Semi-Additive Measures', slug: 'powerbi' },
      { name: 'Tableau', slug: 'tableau' },
      { name: 'Matplotlib', slug: 'matplotlib' },
      { name: 'Seaborn', slug: 'seaborn' },
    ],
  },
  {
    category: 'Data Modeling',
    items: [
      { name: 'Dimensional Modeling', slug: 'sql' },
      { name: 'Snapshot Fact Tables', slug: 'sql' },
      { name: 'Slowly Changing Data', slug: 'sql' },
      { name: 'Window Functions', slug: 'sql' },
      { name: 'CTEs', slug: 'sql' },
      { name: 'Snowflake Schema Design', slug: 'snowflake' },
    ],
  },
  {
    category: 'Analytical Methods',
    items: [
      { name: 'Funnel Analysis', slug: 'funnel' },
      { name: 'Churn Modeling', slug: 'churn' },
      { name: 'A/B Testing', slug: 'abtest' },
      { name: 'Statistical Inference', slug: 'stats' },
      { name: 'KPI & Financial Modeling', slug: 'kpi' },
    ],
  },
  {
    category: 'Data Platforms & Tools',
    items: [
      { name: 'Snowflake', slug: 'snowflake' },
      { name: 'Git', slug: 'git' },
      { name: 'GitHub', slug: 'github' },
      { name: 'Jupyter', slug: 'jupyter' },
      { name: 'Ollama', slug: 'ollama' },
      { name: 'ChromaDB', slug: 'chromadb' },
    ],
  },
  {
    category: 'Programming & ML',
    items: [
      { name: 'Python', slug: 'python' },
      { name: 'SQL', slug: 'sql' },
      { name: 'Pandas', slug: 'pandas' },
      { name: 'NumPy', slug: 'numpy' },
      { name: 'Scikit-learn', slug: 'scikit-learn' },
      { name: 'TensorFlow', slug: 'tensorflow' },
      { name: 'LangChain', slug: 'langchain' },
    ],
  },
  {
    category: 'Machine Learning',
    items: [
      { name: 'Supervised/Unsupervised', slug: 'ml' },
      { name: 'Time Series Forecasting', slug: 'forecast' },
      { name: 'Deep Learning (CNN)', slug: 'cnn' },
      { name: 'Feature Engineering', slug: 'features' },
      { name: 'Model Calibration', slug: 'tuning' },
      { name: 'Explainability (SHAP)', slug: 'stats' },
      { name: 'Drift Monitoring', slug: 'forecast' },
      { name: 'RAG/NLP', slug: 'nlp' },
      { name: 'TF-IDF', slug: 'tfidf' },
    ],
  },
]

// Experience: each bullet is split into impact (the metric, shown big and
// in accent) and action (what produced it). Result first.
export const experience = [
  {
    role: 'Data Analyst',
    company: 'COB Solution (US Healthcare)',
    period: 'Dec 2023 to Present',
    bullets: [
      {
        impact: '$70K identified',
        action:
          'Reconciled visit records against payment transactions across 30+ clinics to surface unbilled copay revenue, ranking every case by evidentiary certainty so billing staff worked the highest-confidence recoveries first.',
      },
      {
        impact: '80-85% to 90-95%',
        action:
          'Lifted staff utilization by pinpointing the profit-maximizing visit volume per clinic, showing leadership where added volume would force hours a site could not fill and where trimming visits protected margin.',
      },
      {
        impact: '10% fewer losses',
        action:
          'Cut revenue lost to no-shows with a model scoring each day’s schedule, letting staff confirm at-risk bookings or double-book the slot to turn would-be empty appointments into billable visits.',
      },
      {
        impact: '$30K saved',
        action:
          'Diagnosed an 11% patient frequency drop; cohort analysis proved new clinics beat historical benchmarks by 29% and pivoted executive strategy from acquisition spend to retention.',
      },
      {
        impact: '+27% accuracy',
        action:
          'Built and automated Python time series forecasting models on 10K+ weekly records.',
      },
      {
        impact: '10+ hrs/week',
        action:
          'Scripted Python ETL automating 5+ manual reports and optimized Snowflake schema for 40% faster queries.',
      },
    ],
  },
]

// Projects: outcome shown big at the top of each card, then title and
// description, then stack chips with icons.
//
// Optional screenshot: add `image: '/screenshots/name.png'` (files live in
// public/screenshots/) and an optional `imageAlt`. Cards without an image
// render exactly as before. Redact client metrics and branding before adding
// anything here — the site is public.
export const projects = [
  // Cards with an `image` span two columns, so keep them first in the array —
  // a wide card placed mid-grid wraps and leaves an empty cell beside it.
  {
    title: 'PTOC Intelligence Hub',
    image: '/screenshots/Chat-bot.png',
    imageAlt:
      'The Intelligence Assistant view: clinic and date-range scope controls, suggested questions such as “which clinics need my attention right now”, and a live Snowflake connection indicator.',
    outcome: 'Ask it a question, get a traceable answer',
    description:
      'Executive platform for a 30+ clinic network: performance, clinical, operations, and scheduling views alongside no-show risk, diagnostics, and alerting, all live against Snowflake. A natural language assistant answers questions like “which clinics need my attention right now” by matching intent to precomputed metrics, so every answer is deterministic and traces back to the data rather than being generated.',
    stack: [
      { name: 'Snowflake', slug: 'snowflake' },
      { name: 'FastAPI', slug: 'fastapi' },
      { name: 'pandas', slug: 'pandas' },
      { name: 'Chart.js', slug: 'chartjs' },
    ],
  },
  {
    title: 'Payer Mix & Reimbursement Optimization',
    outcome: '11x reimbursement spread, mapped',
    description:
      'Consolidated 171 fragmented payer groupings into a standardized taxonomy over 113K+ visits and $7.25M in collected payments, then ranked clinics by payer mix efficiency and sized the upside of shifting mix. Drove an operating plan across referral targeting, contract renegotiation, and staffing allocation.',
    stack: [
      { name: 'Snowflake', slug: 'snowflake' },
      { name: 'SQL', slug: 'sql' },
      { name: 'Power BI', slug: 'powerbi' },
    ],
  },
  {
    title: 'Copay Reconciliation & Revenue Recovery',
    outcome: '$70K in unbilled revenue identified',
    description:
      'Mapped visit records to payment transactions to reconstruct expected versus actual patient payments, classifying every case into a 7 tier action hierarchy ranked by evidentiary certainty. Window function rate imputation and bundle detection handle missing and non-standard rates.',
    stack: [
      { name: 'Snowflake SQL', slug: 'snowflake' },
      { name: 'CTEs', slug: 'sql' },
      { name: 'Window Functions', slug: 'sql' },
    ],
  },
  {
    title: 'Collections Analytics Platform',
    outcome: '15+ dispositions, audit trail from nothing',
    description:
      'Snapshot fact model over daily extracts from a source with no native change history, using synthetic tombstone records to make deletions and corrections auditable. Re-architected the DAX measure layer around a snapshot-date-in-context pattern to fix a semi-additive aggregation error.',
    stack: [
      { name: 'Snowflake', slug: 'snowflake' },
      { name: 'Power BI', slug: 'powerbi' },
      { name: 'DAX', slug: 'powerbi' },
    ],
  },
  {
    title: 'No-Show Prediction Model',
    outcome: '10% cut in losses to no-shows',
    description:
      'Scores each day’s schedule so staff can confirm at-risk bookings or double-book the slot, turning would-be empty appointments into billable visits. Calibrated XGBoost across 6 iterations, with leakage audits, SHAP, and drift monitoring behind a daily scoring pipeline.',
    stack: [
      { name: 'Python', slug: 'python' },
      { name: 'XGBoost', slug: 'xgboost' },
      { name: 'Snowflake', slug: 'snowflake' },
      { name: 'scikit-learn', slug: 'scikit-learn' },
    ],
  },
  {
    title: 'RCM Analytics Pipeline',
    outcome: 'Visit to payment funnel, SLA tracked',
    description:
      'End to end Revenue Cycle Management pipeline plus Power BI dashboard for a 30+ clinic network; claims funnel from visit to payment with business day SLA metrics.',
    stack: [
      { name: 'Snowflake', slug: 'snowflake' },
      { name: 'Python', slug: 'python' },
      { name: 'Power BI', slug: 'powerbi' },
      { name: 'GCS', slug: 'gcs' },
    ],
  },
  {
    title: 'Customer Churn Prediction',
    outcome: '0.86 ROC AUC, 86% F1',
    description:
      'XGBoost telecom churn model with strong calibration; SMOTE, feature engineering, model tuning, and an ensemble voting classifier.',
    stack: [
      { name: 'Python', slug: 'python' },
      { name: 'XGBoost', slug: 'xgboost' },
      { name: 'scikit-learn', slug: 'scikit-learn' },
    ],
  },
  {
    title: 'Automatic Leukemia Image Detection',
    outcome: '88% top model accuracy',
    description:
      'Deep learning classifier for blood smear images (ALL vs healthy cells); CNN baseline plus classical model comparison.',
    stack: [
      { name: 'Python', slug: 'python' },
      { name: 'TensorFlow', slug: 'tensorflow' },
      { name: 'OpenCV', slug: 'opencv' },
    ],
  },
]

export const education = [
  {
    title: 'Associate Data Scientist',
    institution: 'DataCamp (Remote)',
    period: 'May 2024 to Sep 2024',
    detail:
      '90 hour track: data management, EDA, statistical modeling, ML, communication.',
  },
  {
    title: 'B.Sc. Biomedical Engineering',
    institution: 'Al-Shorouk Academy, Cairo',
    period: '2018 to 2023',
    detail:
      'Grade: Very Good; IoT wearable graduation project (excellent score).',
  },
]

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]
