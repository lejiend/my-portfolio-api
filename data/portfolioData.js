const portfolioData = {
  profile: {
    name: 'Alex Morgan',
    title: 'DevOps Engineer',
    tagline: 'Specializing in Cloud Infrastructure, Containerization & CI/CD Pipelines',
    location: 'Remote / Global',
    email: 'alex@example.com',
    social: {
      github: 'https://github.com/alexmorgan',
      linkedin: 'https://linkedin.com/in/alexmorgan',
      twitter: 'https://twitter.com/alexmorgan'
    }
  },
  stats: [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'Happy Clients', value: '15+' },
    { label: 'Uptime Maintained', value: '100%' }
  ],
  about: {
    intro: [
      "I'm a passionate DevOps Engineer with a strong focus on building scalable, reliable infrastructure and automating complex deployment pipelines. My journey in technology has equipped me with deep expertise in cloud platforms, containerization, and modern infrastructure practices.",
      "With over 5 years of hands-on experience, I've successfully led infrastructure modernization initiatives, implemented GitOps workflows, and optimized systems to handle millions of requests daily. I'm committed to continuous learning and staying current with emerging DevOps technologies and best practices."
    ],
    values: [
      {
        title: 'Innovation',
        description: 'Continuously exploring new technologies and methodologies to improve infrastructure and deployment processes.'
      },
      {
        title: 'Reliability',
        description: 'Building robust systems that maintain high availability and implement disaster recovery strategies.'
      },
      {
        title: 'Collaboration',
        description: 'Working closely with development and operations teams to streamline workflows and improve communication.'
      },
      {
        title: 'Knowledge Sharing',
        description: 'Mentoring junior team members and documenting best practices to elevate the entire team\'s capabilities.'
      }
    ],
    journey: [
      'My DevOps career began as a Linux Systems Administrator, where I gained foundational knowledge in server management and infrastructure basics. This evolved into containerization expertise with Docker, followed by deep dives into Kubernetes orchestration.',
      'Over the years, I\'ve progressed to designing and implementing complete infrastructure solutions, including cloud architecture, automation, monitoring, and security workflows.'
    ],
    achievements: [
      { title: '40% Cost Reduction', description: 'Led infrastructure optimization initiatives resulting in significant cloud spending reduction through right-sizing and auto-scaling strategies.' },
      { title: '99.99% Uptime', description: 'Designed and maintained highly available systems with redundancy and failover mechanisms achieving excellent SLA compliance.' },
      { title: '70% Faster Deployments', description: 'Implemented comprehensive CI/CD pipelines reducing deployment time from hours to minutes through automation.' },
      { title: 'Team Growth', description: 'Mentored 5+ junior engineers in DevOps practices, helping them transition into infrastructure roles and grow their expertise.' }
    ]
  },
  projects: [
    {
      title: 'Kubernetes Cluster Setup',
      icon: 'fas fa-cube',
      description: 'Designed and deployed a production-grade Kubernetes cluster with auto-scaling, monitoring, and security best practices. Implemented RBAC, network policies, and pod security standards.',
      tags: ['Kubernetes', 'AWS', 'Terraform', 'Helm'],
      impact: 'Reduced infrastructure costs by 35% and improved deployment efficiency'
    },
    {
      title: 'CI/CD Pipeline Automation',
      icon: 'fas fa-code-branch',
      description: 'Built automated deployment pipelines using Jenkins and GitLab CI with comprehensive testing, security scanning, and multi-stage approvals.',
      tags: ['Jenkins', 'GitLab CI', 'Docker', 'Automation'],
      impact: 'Reduced deployment time from 2 hours to 15 minutes (87% improvement)'
    },
    {
      title: 'Infrastructure as Code',
      icon: 'fas fa-server',
      description: 'Implemented complete infrastructure automation using Terraform and Ansible, enabling consistent and reproducible deployments across multiple environments.',
      tags: ['Terraform', 'Ansible', 'AWS', 'IaC'],
      impact: 'Eliminated manual configuration errors and reduced setup time by 80%'
    },
    {
      title: 'Monitoring & Observability',
      icon: 'fas fa-chart-line',
      description: 'Set up comprehensive monitoring stack using Prometheus and Grafana with custom alerting rules, dashboards, and log aggregation using ELK Stack.',
      tags: ['Prometheus', 'Grafana', 'ELK', 'Alerting'],
      impact: 'Reduced MTTR (Mean Time to Recovery) from 30 mins to 5 mins'
    },
    {
      title: 'Security & Compliance',
      icon: 'fas fa-lock',
      description: 'Implemented security scanning, vulnerability management, and compliance automation across the infrastructure. Integrated Vault for secret management.',
      tags: ['Vault', 'Trivy', 'OPA', 'Security'],
      impact: 'Achieved 99.95% compliance score and zero critical vulnerabilities'
    },
    {
      title: 'Multi-Cloud Migration',
      icon: 'fas fa-exchange-alt',
      description: 'Led migration of legacy applications to containerized infrastructure across AWS, Azure, and GCP. Implemented disaster recovery and multi-region failover.',
      tags: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Migration'],
      impact: 'Completed migration with zero downtime and 40% cost savings'
    }
  ],
  skills: [
    {
      category: 'Containerization',
      icon: 'fas fa-docker',
      items: ['Docker', 'Podman', 'Docker Compose', 'Container Registries (ECR, GCR, ACR)', 'Image Optimization']
    },
    {
      category: 'Orchestration',
      icon: 'fas fa-cube',
      items: ['Kubernetes', 'Helm', 'kubectl', 'Docker Swarm', 'Kustomize', 'ArgoCD']
    },
    {
      category: 'Cloud Platforms',
      icon: 'fas fa-cloud',
      items: ['AWS (EC2, ECS, EKS, S3, RDS, Lambda)', 'Azure (AKS, App Service, Azure DevOps)', 'Google Cloud (GKE, Cloud Run)', 'DigitalOcean']
    },
    {
      category: 'CI/CD & Automation',
      icon: 'fas fa-code-branch',
      items: ['Jenkins', 'GitLab CI/CD', 'GitHub Actions', 'ArgoCD', 'CircleCI', 'Automated Testing & Deployment']
    },
    {
      category: 'Infrastructure as Code',
      icon: 'fas fa-server',
      items: ['Terraform', 'Ansible', 'CloudFormation', 'Helm Charts', 'Configuration Management']
    },
    {
      category: 'Monitoring & Logging',
      icon: 'fas fa-chart-line',
      items: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'New Relic', 'CloudWatch', 'Custom Dashboards']
    },
    {
      category: 'Linux & Scripting',
      icon: 'fas fa-terminal',
      items: ['Linux Administration', 'Bash Scripting', 'Python', 'Shell Scripts', 'Package Management']
    },
    {
      category: 'Networking',
      icon: 'fas fa-network-wired',
      items: ['DNS', 'Load Balancing', 'VPC/Virtual Networks', 'SSL/TLS', 'Firewall Management', 'API Gateways']
    },
    {
      category: 'Security & Compliance',
      icon: 'fas fa-lock',
      items: ['Secret Management (Vault)', 'Container Security', 'RBAC', 'Security Scanning', 'Compliance Automation', 'SSL Certificates']
    }
  ],
  experience: [
    {
      period: '2023 - Present',
      position: 'Senior DevOps Engineer',
      company: 'Tech Company Inc.',
      responsibilities: [
        'Led infrastructure modernization initiative, reducing operational costs by 40%',
        'Designed and implemented GitOps workflow using ArgoCD for continuous deployments',
        'Mentored junior team members on DevOps best practices and Kubernetes architecture',
        'Managed Kubernetes cluster serving 2M+ daily requests with 99.99% uptime',
        'Implemented comprehensive monitoring and alerting infrastructure'
      ]
    },
    {
      period: '2021 - 2023',
      position: 'DevOps Engineer',
      company: 'Cloud Solutions Ltd.',
      responsibilities: [
        'Built and maintained production Kubernetes clusters serving 1M+ requests/day',
        'Automated infrastructure deployment using Terraform and Ansible',
        'Implemented comprehensive monitoring and logging solutions using Prometheus and ELK',
        'Reduced deployment time from 2 hours to 15 minutes through CI/CD automation',
        'Led cloud migration project from on-premise to AWS infrastructure'
      ]
    },
    {
      period: '2019 - 2021',
      position: 'Systems Administrator',
      company: 'StartUp Networks',
      responsibilities: [
        'Managed Linux servers and cloud infrastructure across multiple environments',
        'Implemented automated backup and disaster recovery solutions',
        'Provided infrastructure support to development team for application deployments',
        'Implemented security best practices and access controls',
        'Trained team members on Linux administration and system optimization'
      ]
    }
  ]
};

module.exports = {
  portfolioData
};
