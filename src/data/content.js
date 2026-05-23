// Edit this file to update site content. All copy is sourced from the
// HOSSAM_SALAH_MASTER_PROFILE.md kept in the Instrucutions/ folder.

export const identity = {
  name: 'Hossam Salah',
  title: 'Data Analyst | Analytics Engineer',
  location: 'Cairo, Egypt',
  email: 'Hosam.s.alsayed@gmail.com',
  phone: '+20 114 535 6455',
  linkedin: 'https://www.linkedin.com/in/hossam-salah-0a6033207/',
  github: 'https://github.com/Hosam-Salah32',
  githubRepos: 'https://github.com/Hosam-Salah32?tab=repositories',
  cvPath: '/Hossam_Salah_CV.pdf',
}

export const heroStatement =
  'Strategic Data Analyst specializing in data engineering and automation — turning messy multi-source healthcare data into forecasts, dashboards, and decisions that move revenue.'

export const aboutSummary =
  'Strategic Data Analyst specializing in Data Engineering & Automation. Engineered pipelines consolidating 900+ disparate sources, improved forecasting accuracy by 27%, and identified $30K in annual cost savings through patient acquisition analysis. Shifted a multi-region expansion strategy by diagnosing an 11% retention drop and proving new clinic cohorts outperformed historical benchmarks by 29%.'

export const skills = [
  {
    category: 'Programming & ML',
    items: [
      'Python (Pandas, NumPy, Scikit-learn, TensorFlow, LangChain)',
      'SQL',
      'ETL/ELT',
    ],
  },
  {
    category: 'Machine Learning',
    items: [
      'Supervised/Unsupervised Learning',
      'Time Series Forecasting',
      'Deep Learning (CNN)',
      'Feature Engineering',
      'Hyperparameter Tuning',
      'RAG/NLP',
      'TF-IDF',
    ],
  },
  {
    category: 'Data Platforms & Tools',
    items: ['Snowflake', 'Git/GitHub', 'Jupyter', 'Ollama', 'ChromaDB'],
  },
  {
    category: 'Visualization & BI',
    items: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn'],
  },
  {
    category: 'Analytical Methods',
    items: [
      'Funnel Analysis',
      'Churn Modeling',
      'A/B Testing',
      'Statistical Inference',
      'KPI & Financial Modeling',
    ],
  },
]

export const experience = [
  {
    role: 'Data Analyst',
    company: 'COB Solution (US Healthcare)',
    period: 'Nov 2024 – Present',
    bullets: [
      'Built and automated Python time-series forecasting models on 10K+ weekly records, improving prediction accuracy by 27%.',
      'Diagnosed a multi-region plateau via an 11% patient-frequency drop; ramp-up cohort analysis proved new clinics beat historical benchmarks by 29%, pivoting executive strategy from marketing spend to retention and surfacing $30K in inefficient acquisition spend.',
      'Built a clinic-level Break-Even Analysis model to flag at-risk locations.',
      'Scripted Python ETL automating 5+ manual reports (10+ hrs/week saved); optimized Snowflake schema for 40% faster queries.',
    ],
  },
  {
    role: 'Service Engineer',
    company: 'Lab Solutions',
    period: 'Nov 2023 – Oct 2024 · Cairo, Egypt',
    bullets: [
      'Translated technical specifications into business value for healthcare stakeholders; delivered 15+ demos and training sessions to clinicians.',
    ],
  },
]

export const projects = [
  {
    title: 'PTOC Intelligence Hub',
    description:
      'Full-stack analytics platform: Snowflake data layer → FastAPI → interactive single-page dashboard surfacing real-time operational, clinical, and scheduling KPIs for a 30+ clinic network.',
    stack: ['Snowflake', 'FastAPI', 'pandas', 'Chart.js'],
  },
  {
    title: 'No-Show Prediction Model',
    description:
      'End-to-end ML system predicting physical-therapy appointment no-shows; 6 model iterations, calibrated XGBoost, daily scoring pipeline writing risk tiers back to Snowflake.',
    stack: ['Python', 'XGBoost', 'Snowflake', 'scikit-learn'],
  },
  {
    title: 'RCM Analytics Pipeline',
    description:
      'End-to-end Revenue Cycle Management pipeline + Power BI dashboard for a 30+ clinic network; claims funnel from visit to payment with business-day SLA metrics.',
    stack: ['Snowflake', 'Python', 'Power BI', 'GCS'],
  },
  {
    title: 'Billing Reconciliation Automation',
    description:
      'Automated copay reconciliation Snowflake view cross-referencing scheduling and payment ledgers; 7-tier action classification routing patients to the correct billing action.',
    stack: ['Snowflake SQL', 'CTEs', 'Window Functions'],
  },
  {
    title: 'Customer Churn Prediction',
    description:
      'XGBoost telecom churn model with 86% F1-score and 0.86 ROC AUC; SMOTE, feature engineering, model tuning, and an ensemble voting classifier.',
    stack: ['Python', 'XGBoost', 'scikit-learn'],
  },
  {
    title: 'Automatic Leukemia Image Detection',
    description:
      'Deep-learning classifier for blood smear images (ALL vs. healthy cells); CNN baseline plus classical model comparison, top model at 88% accuracy.',
    stack: ['Python', 'TensorFlow/Keras', 'OpenCV'],
  },
]

export const education = [
  {
    title: 'Associate Data Scientist',
    institution: 'DataCamp (Remote)',
    period: 'May 2024 – Sep 2024',
    detail:
      '90-hour track: data management, EDA, statistical modeling, ML, communication.',
  },
  {
    title: 'B.Sc. Biomedical Engineering',
    institution: 'Al-Shorouk Academy, Cairo',
    period: '2018 – 2023',
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
