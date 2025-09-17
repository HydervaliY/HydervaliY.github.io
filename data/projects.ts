export type Project = {
    title: string
    period?: string
    location?: string
    summary: string
    role?: string
    stack: string[]
    impact: string[]
    links?: { demo?: string; repo?: string }
  }
  
  export const featured: Project[] = [
    {
      title: 'USPS Mobile‑App Redesign',
      period: 'Jan 2025 – May 2025',
      location: 'Atlanta, GA',
      role: 'HCI Capstone',
      stack: ['React Native','Firebase','WCAG 2.1 AA'],
      summary:
        'Heuristic reviews and eye‑tracking informed an accessible redesign with bottom nav, high‑contrast palette, and voice search.',
      impact: [
        'Accessibility violations cut from 100 to 7',
        'Task‑success rate improved from 35% to 89%',
        'SUS score raised to 87/100 (“Excellent”)',
      ],
    },
    {
      title: 'Intrusion Detection System (Federated MRI CT)',
      period: 'Jan 2025 – May 2025',
      role: 'Secure & Private AI Capstone',
      stack: ['PyTorch','Flower','Intel SGX','Terraform','AWS GPU'],
      summary:
        'Federated learning pipeline across three hospitals with on‑prem data; differential privacy on gradients and SGX‑wrapped inference.',
      impact: [
        'AUC 0.93 on LIDC‑IDRI',
        'New‑site onboarding time < 30 minutes',
      ],
    },
    {
      title: 'Enterprise Knowledge‑Base LLM (RAG/NLP)',
      period: 'Aug 2024 – Dec 2024',
      role: 'Advanced Text Processing',
      stack: ['Llama 3 70B + LoRA','LangChain','FAISS','FastAPI','Keycloak RBAC','Elastic APM'],
      summary:
        'RAG platform indexing 50k internal PDFs with sub‑second semantic search and secured access controls.',
      impact: [
        'Doc‑search reduced from 4 min to 7 sec',
        'Hallucination < 1% on gold‑set',
        '300+ daily active users in month one',
      ],
    },
    {
      title: 'Lung Cancer Prediction (CNN)',
      period: 'Aug 2024 – Dec 2024',
      stack: ['TensorFlow/Keras','Flask','Docker','DICOM'],
      summary:
        '12‑layer CNN trained on 4k LIDC‑IDRI scans with engineered radiomic features and a clinician‑facing web UI.',
      impact: [
        'Accuracy 92% / AUC 0.90',
        'Outperformed SVM/RF baselines by 11–17 pp',
        'Risk scoring in under 3 seconds',
      ],
    },
  ]
  