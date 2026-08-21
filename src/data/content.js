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
  'I turn messy multi-source healthcare data into pipelines, forecasts, and dashboards. The work moves revenue, surfaces savings, and gives leadership numbers they can act on.'

// Headline metric strip rendered in the hero. Each value animates from 0.
export const heroMetrics = [
  { value: 27, suffix: '%', prefix: '+', label: 'forecast accuracy lift' },
  { value: 30, suffix: 'K', prefix: '$', label: 'annual savings surfaced' },
  { value: 900, suffix: '+', prefix: '', label: 'data sources unified' },
  { value: 10, suffix: '+', prefix: '', label: 'hrs/week reclaimed' },
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

// One line "Currently building" signal in the hero.
export const currentlyBuilding =
  'Now shipping the PTOC Intelligence Hub: a Snowflake plus FastAPI dashboard for a 30 clinic network.'

// Short two-sentence intro above the About stat tiles.
export const aboutIntro =
  'I work at the seam between raw data and the decisions a business actually makes. My focus is data engineering, automation, and forecasting in US healthcare.'

// Three glass stat tiles rendered inside About.
export const aboutStats = [
  {
    value: '900+',
    label: 'disparate sources consolidated',
    detail: 'Engineered pipelines that unify scheduling, billing, and clinical feeds.',
  },
  {
    value: '+27%',
    label: 'forecasting accuracy gain',
    detail: 'Time series models on 10K+ weekly records for a 30 clinic network.',
  },
  {
    value: '$30K',
    label: 'inefficient spend surfaced',
    detail: 'Cohort analysis that pivoted strategy from acquisition to retention.',
  },
]

export const skills = [
  {
    category: 'Visualization & BI',
    items: [
      { name: 'Power BI', slug: 'powerbi' },
      { name: 'Tableau', slug: 'tableau' },
      { name: 'Matplotlib', slug: 'matplotlib' },
      { name: 'Seaborn', slug: 'seaborn' },
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
      { name: 'Hyperparameter Tuning', slug: 'tuning' },
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
    period: 'Jan 2024 to Present',
    bullets: [
      {
        impact: '+27% accuracy',
        action:
          'Built and automated Python time series forecasting models on 10K+ weekly records.',
      },
      {
        impact: '$30K saved',
        action:
          'Diagnosed an 11% patient frequency drop; cohort analysis proved new clinics beat historical benchmarks by 29% and pivoted executive strategy from acquisition spend to retention.',
      },
      {
        impact: 'Risk model',
        action:
          'Built a clinic level Break Even Analysis to flag at-risk locations before they slipped into losses.',
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
export const projects = [
  {
    title: 'PTOC Intelligence Hub',
    outcome: 'Real time KPIs across 30+ clinics',
    description:
      'Full stack analytics platform: Snowflake data layer to FastAPI to an interactive single page dashboard surfacing operational, clinical, and scheduling KPIs.',
    stack: [
      { name: 'Snowflake', slug: 'snowflake' },
      { name: 'FastAPI', slug: 'fastapi' },
      { name: 'pandas', slug: 'pandas' },
      { name: 'Chart.js', slug: 'chartjs' },
    ],
  },
  {
    title: 'No-Show Prediction Model',
    outcome: 'Daily risk scores in production',
    description:
      'End to end ML system predicting physical therapy appointment no shows; 6 model iterations, calibrated XGBoost, daily scoring pipeline writing risk tiers back to Snowflake.',
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
    title: 'Billing Reconciliation Automation',
    outcome: '7 tier routing, zero manual sweep',
    description:
      'Automated copay reconciliation Snowflake view cross referencing scheduling and payment ledgers; 7 tier action classification routing patients to the correct billing action.',
    stack: [
      { name: 'Snowflake SQL', slug: 'snowflake' },
      { name: 'CTEs', slug: 'sql' },
      { name: 'Window Functions', slug: 'sql' },
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
