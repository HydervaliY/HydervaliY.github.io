export type Role = {
    company: string
    title: string
    period: string
    location?: string
    bullets: string[]
    stack?: string[]
  }
  
  export const roles: Role[] = [
    {
      company: 'DISH Wireless (EchoStar — Boost Mobile)',
      title: 'Cloud Engineering Intern',
      period: 'Jun 2025 – Aug 2025 • Denver, CO',
      bullets: [
        'Built React portals for 5G infra visibility and GitOps states',
        'Automated CI/CD with Argo CD, Crossplane, Kargo, and AWS',
        'Onboarded SonarQube and standardized Grafana dashboards',
      ],
      stack: ['React','Argo CD','Crossplane','Kargo','AWS','Grafana','SonarQube'],
    },
    {
      company: 'KPMG India',
      title: 'Associate Consultant',
      period: 'Dec 2023 – Jul 2024 • Bangalore, India',
      bullets: [
        'Delivered 20+ client solutions with Python/JS and CI/CD, increasing efficiency by ~50%',
        'Implemented Salesforce + Django audit model with 25+ APIs',
        'Led 10 projects with 98% on‑time delivery; improved ServiceNow UI efficiency ~60%',
      ],
      stack: ['Python','Django','Salesforce','ServiceNow','CI/CD'],
    },
    {
      company: 'Deloitte US (Offices of India)',
      title: 'Business Technology Analyst',
      period: 'Jul 2021 – Jul 2023 • Hyderabad, India',
      bullets: [
        'Enhanced 25+ Angular apps; resolved 95% critical issues; perf +30%',
        'Managed CI/CD for 15 prod apps; deployment time −50%',
        'Migrated 12 apps to OCP4; transitioned 8 from OCP3; downtime −60%',
      ],
      stack: ['Angular','OpenShift','Jenkins','Python','Django'],
    },
    {
      company: 'Georgia State University — Instructional Innovation & Technology',
      title: 'Graduate Research Assistant',
      period: 'Jan 2025 – Present • Atlanta, GA',
      bullets: [
        'Enhanced RCII UI and cloud services for performance and scalability',
        'Shipped interactive radar charts and tree‑based navigation in Angular/Node',
      ],
      stack: ['Angular','Node.js','AWS'],
    },
    {
      company: 'Georgia State University — Data Mining Lab',
      title: 'Graduate Research Assistant',
      period: 'Aug 2024 – Dec 2024 • Atlanta, GA',
      bullets: [
        'Built ROI descriptors and CBIR for NASA SDO images',
        'Reduced solar flare forecast errors by ~15%; detection rates +20%',
        'Processing time −30%; compute costs −25% on simulations',
      ],
      stack: ['Python','Image Processing','Time‑Series'],
    },
    {
      company: 'Myelin Foundry',
      title: 'Consultant',
      period: 'Aug 2023 – Dec 2023 • Bangalore, India',
      bullets: [
        'Time‑series ML platform with Python/Node/React; accuracy +40%',
        'Integrated 6 technologies; operational efficiency +70%; CRM theming',
        'Client liaison for 3 accounts; satisfaction +30%',
      ],
      stack: ['Python','Node.js','React','ML'],
    },
  ]
  