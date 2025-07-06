import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import { 
  Server, 
  Shield, 
  MonitorSpeaker, 
  Code, 
  GitBranch, 
  Cloud, 
  Users, 
  Zap,
  CheckCircle,
  AlertCircle,
  Target,
  Brain,
  Trophy,
  DollarSign,
  Network, 
  Layers,
  Globe
} from 'lucide-react';

const Index = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 'ecommerce-platform',
      title: 'Cloud-Native E-Commerce Platform',
      icon: <Server className="w-6 h-6" />,
      description: '11 microservices with Istio service mesh on GKE',
      difficulty: 90,
      marketDemand: 95,
      salaryImpact: '$170K+ USD',
      timeline: '14-18 weeks',
      architecture: {
        components: [
          'Google Kubernetes Engine (GKE)',
          'Istio Service Mesh',
          'Terraform Infrastructure',
          'ArgoCD GitOps',
          'Prometheus + Grafana',
          'Cloud SQL (PostgreSQL)',
          'Redis Cache',
          'Cloud Load Balancer',
          'Cloud CDN',
          'Cloud Build CI/CD',
          'Jaeger Tracing'
        ],
        flow: 'Frontend → Load Balancer → Istio Gateway → Microservices → Databases → Monitoring'
      },
      prerequisites: [
        { skill: 'Google Cloud Platform', level: 'Advanced', reason: 'GKE, Cloud SQL, IAM, networking services' },
        { skill: 'Kubernetes', level: 'Advanced', reason: 'Multi-cluster management, operators, CRDs' },
        { skill: 'Istio Service Mesh', level: 'Advanced', reason: 'Traffic management, security policies, observability' },
        { skill: 'Terraform', level: 'Advanced', reason: 'Complex GCP infrastructure with modules' },
        { skill: 'Go/Java Microservices', level: 'Intermediate', reason: '11 interconnected services with APIs' }
      ],
      outcomes: [
        'Handle 100K+ concurrent users with auto-scaling',
        'Achieve 99.9% uptime with multi-region deployment',
        'Reduce deployment time from hours to minutes',
        'Enable A/B testing and canary deployments'
      ],
      ctoPitch: 'Modern cloud-native architecture that scales infinitely and reduces operational overhead by 70%. ROI: 300% through improved developer velocity and reduced infrastructure costs.',
      testingQuestions: [
        'How would you implement circuit breakers in Istio for resilient microservices?',
        'Design a multi-region GKE setup with cross-region load balancing',
        'Explain your strategy for zero-downtime deployments across 11 services',
        'How would you implement distributed tracing across the entire platform?',
        'Design a cost optimization strategy for GCP resources'
      ]
    },
    {
      id: 'saas-platform',
      title: 'Multi-Tenant SaaS Platform',
      icon: <Users className="w-6 h-6" />,
      description: 'Enterprise SaaS with tenant isolation and global scaling',
      difficulty: 95,
      marketDemand: 98,
      salaryImpact: '$190K+ USD',
      timeline: '16-20 weeks',
      architecture: {
        components: [
          'Multi-Tenant Architecture',
          'Kubernetes Namespaces',
          'RBAC + Tenant Isolation',
          'PostgreSQL Multi-tenancy',
          'Redis Cluster',
          'Elasticsearch Logging',
          'Kafka Event Streaming',
          'Keycloak Identity',
          'Stripe Billing Integration',
          'Global Load Balancing'
        ],
        flow: 'Tenant Request → Identity Check → Namespace Routing → Isolated Resources → Billing → Analytics'
      },
      prerequisites: [
        { skill: 'Multi-tenancy Patterns', level: 'Advanced', reason: 'Database, application, and infrastructure isolation' },
        { skill: 'Identity & Access Management', level: 'Advanced', reason: 'OIDC, SAML, RBAC across tenants' },
        { skill: 'Event-Driven Architecture', level: 'Intermediate', reason: 'Kafka, event sourcing, CQRS patterns' },
        { skill: 'Database Sharding', level: 'Intermediate', reason: 'PostgreSQL partitioning and scaling strategies' },
        { skill: 'Billing & Metering', level: 'Basic', reason: 'Usage tracking and subscription management' }
      ],
      outcomes: [
        'Support 10,000+ tenants with isolated resources',
        'Achieve sub-100ms response times globally',
        'Reduce onboarding time from weeks to hours',
        'Enable self-service tenant management'
      ],
      ctoPitch: 'Scalable SaaS architecture that allows rapid customer onboarding and global expansion. ROI: 500% through reduced support costs and faster time-to-market.',
      testingQuestions: [
        'Design a tenant isolation strategy that balances security and cost',
        'How would you implement cross-tenant analytics without data leakage?',
        'Explain your approach to database schema evolution in multi-tenant setup',
        'How would you handle tenant-specific customizations and configurations?',
        'Design a billing system that tracks usage across multiple services'
      ]
    },
    {
      id: 'global-cdn',
      title: 'Global Content Delivery Network',
      icon: <Globe className="w-6 h-6" />,
      description: 'Multi-cloud CDN with edge computing and real-time analytics',
      difficulty: 85,
      marketDemand: 88,
      salaryImpact: '$160K+ USD',
      timeline: '12-16 weeks',
      architecture: {
        components: [
          'Global Edge Locations',
          'Multi-Cloud Storage',
          'CDN Orchestration',
          'Edge Computing Workers',
          'Real-time Analytics',
          'Smart Caching',
          'DDoS Protection',
          'SSL/TLS Termination',
          'Geographic Routing',
          'Performance Monitoring'
        ],
        flow: 'User Request → Edge Location → Cache Check → Origin Fetch → Edge Processing → Response'
      },
      prerequisites: [
        { skill: 'CDN Technologies', level: 'Advanced', reason: 'Caching strategies, edge computing, content optimization' },
        { skill: 'Multi-Cloud Networking', level: 'Advanced', reason: 'Cross-cloud connectivity and traffic routing' },
        { skill: 'Edge Computing', level: 'Intermediate', reason: 'Serverless functions at edge locations' },
        { skill: 'Performance Optimization', level: 'Intermediate', reason: 'Latency reduction and bandwidth optimization' },
        { skill: 'Security', level: 'Intermediate', reason: 'DDoS protection, WAF, certificate management' }
      ],
      outcomes: [
        'Reduce global latency by 60% through edge optimization',
        'Handle 1M+ requests per second with auto-scaling',
        'Achieve 99.99% uptime with global failover',
        'Save 40% on bandwidth costs through intelligent caching'
      ],
      ctoPitch: 'Global content delivery that enhances user experience and reduces infrastructure costs. ROI: 400% through improved performance and reduced bandwidth expenses.',
      testingQuestions: [
        'Design a cache invalidation strategy for a global CDN',
        'How would you implement edge computing for dynamic content?',
        'Explain your approach to geographic load balancing',
        'How would you handle real-time analytics across edge locations?',
        'Design a DDoS mitigation strategy at the edge'
      ]
    },
    {
      id: 'disaster-recovery',
      title: 'Multi-Cloud Disaster Recovery',
      icon: <Shield className="w-6 h-6" />,
      description: 'GCP ↔ AWS automated failover with RTO < 5 minutes',
      difficulty: 95,
      marketDemand: 92,
      salaryImpact: '$195K+ USD',
      timeline: '18-22 weeks',
      architecture: {
        components: [
          'Cross-Cloud Replication',
          'Automated Failover Logic',
          'Data Synchronization',
          'Health Check Monitoring',
          'Traffic Management',
          'Backup Orchestration',
          'Recovery Testing',
          'Compliance Reporting',
          'Cost Optimization',
          'Network Connectivity'
        ],
        flow: 'Primary Cloud → Continuous Sync → Health Monitoring → Failure Detection → Automatic Failover → Recovery'
      },
      prerequisites: [
        { skill: 'Multi-Cloud Architecture', level: 'Advanced', reason: 'GCP and AWS services integration and networking' },
        { skill: 'Data Replication', level: 'Advanced', reason: 'Cross-cloud database and storage synchronization' },
        { skill: 'Network Engineering', level: 'Advanced', reason: 'VPN, interconnects, routing protocols' },
        { skill: 'Automation Scripting', level: 'Advanced', reason: 'Complex failover orchestration logic' },
        { skill: 'Disaster Recovery Planning', level: 'Intermediate', reason: 'RTO/RPO requirements and testing procedures' }
      ],
      outcomes: [
        'Achieve RTO of <5 minutes and RPO of <1 minute',
        'Ensure 99.999% availability across cloud failures',
        'Automate 95% of disaster recovery procedures',
        'Reduce DR testing time from days to hours'
      ],
      ctoPitch: 'Business continuity solution that protects against cloud provider outages and ensures regulatory compliance. ROI: 600% through prevented downtime costs.',
      testingQuestions: [
        'Design a cross-cloud data replication strategy with conflict resolution',
        'How would you implement automated failover testing without affecting production?',
        'Explain your approach to network failover between GCP and AWS',
        'How would you handle stateful applications during cloud failover?',
        'Design a cost-effective DR solution that meets strict RTO requirements'
      ]
    },
    {
      id: 'dx-platform',
      title: 'Developer Experience Platform (Backstage)',
      icon: <Code className="w-6 h-6" />,
      description: 'Self-service infrastructure portal with golden path templates',
      difficulty: 90,
      marketDemand: 98,
      salaryImpact: '$200K+ USD',
      timeline: '16-20 weeks',
      architecture: {
        components: [
          'Backstage.io Core',
          'Service Catalog',
          'Template Engine',
          'Terraform Modules',
          'CI/CD Integration',
          'Cost Tracking',
          'Security Scanning',
          'Documentation Portal',
          'API Management',
          'Developer Metrics'
        ],
        flow: 'Developer Request → Template Selection → Infrastructure Provisioning → CI/CD Setup → Monitoring Integration'
      },
      prerequisites: [
        { skill: 'Backstage.io', level: 'Advanced', reason: 'Plugin development and custom integrations' },
        { skill: 'Platform Engineering', level: 'Advanced', reason: 'Developer experience design and automation' },
        { skill: 'React/TypeScript', level: 'Intermediate', reason: 'Custom UI components and plugins' },
        { skill: 'Template Engines', level: 'Intermediate', reason: 'Dynamic infrastructure and application templates' },
        { skill: 'API Design', level: 'Intermediate', reason: 'Internal developer APIs and integrations' }
      ],
      outcomes: [
        'Reduce developer onboarding from 2 weeks to 2 hours',
        'Increase deployment frequency by 400%',
        'Standardize security and compliance across all services',
        'Save $3M+ annually in developer productivity'
      ],
      ctoPitch: 'Transform developer productivity by eliminating toil and standardizing best practices. ROI: 500% through reduced onboarding time and faster feature delivery.',
      testingQuestions: [
        'How would you implement dynamic Terraform template generation in Backstage?',
        'Design a plugin architecture for extending platform capabilities',
        'How would you handle multi-tenant resource isolation in a developer platform?',
        'Explain your strategy for measuring and improving developer experience',
        'How would you implement cost allocation and chargeback for developer resources?'
      ]
    },
    {
      id: 'security-platform',
      title: 'Zero-Trust Security Platform',
      icon: <Network className="w-6 h-6" />,
      description: 'Zero-trust architecture with automated compliance and threat detection',
      difficulty: 98,
      marketDemand: 99,
      salaryImpact: '$210K+ USD',
      timeline: '20-24 weeks',
      architecture: {
        components: [
          'Zero-Trust Network',
          'Identity Verification',
          'Policy Engine (OPA)',
          'Runtime Security (Falco)',
          'Compliance Automation',
          'Threat Detection ML',
          'Certificate Management',
          'Audit Logging',
          'Incident Response',
          'Security Metrics'
        ],
        flow: 'Request → Identity Verification → Policy Check → Runtime Monitoring → Threat Analysis → Response'
      },
      prerequisites: [
        { skill: 'Zero-Trust Architecture', level: 'Advanced', reason: 'Network segmentation, identity-based security' },
        { skill: 'Security Engineering', level: 'Advanced', reason: 'Threat modeling, security automation, compliance' },
        { skill: 'Policy as Code', level: 'Advanced', reason: 'OPA/Rego policy development and enforcement' },
        { skill: 'Machine Learning', level: 'Intermediate', reason: 'Anomaly detection and threat analysis' },
        { skill: 'Compliance Frameworks', level: 'Intermediate', reason: 'SOC2, PCI-DSS, GDPR automation' }
      ],
      outcomes: [
        'Achieve continuous compliance with automated evidence collection',
        'Reduce security incidents by 95% through proactive detection',
        'Enable zero-trust access for all applications and services',
        'Save $5M+ annually in security and compliance costs'
      ],
      ctoPitch: 'Comprehensive security platform that embeds protection into every layer while maintaining developer velocity. ROI: 700% through prevented breaches and automated compliance.',
      testingQuestions: [
        'Design a zero-trust architecture for a microservices environment',
        'How would you implement continuous compliance monitoring and reporting?',
        'Explain your approach to behavioral anomaly detection using machine learning',
        'How would you handle incident response automation in a cloud-native environment?',
        'Design a policy-as-code system that scales across multiple teams and environments'
      ]
    }
  ];

  const overallPrerequisites = [
    { category: 'Operating Systems & Linux', skills: ['Linux Administration', 'Shell Scripting (Bash/Zsh)', 'System Performance Tuning', 'Process Management', 'File Systems & Storage'], time: '3-4 months' },
    { category: 'Networking Fundamentals', skills: ['TCP/IP Stack', 'DNS, DHCP, Load Balancing', 'VPNs & Network Security', 'CDN & Edge Computing', 'Network Troubleshooting'], time: '3-4 months' },
    { category: 'Version Control & Git', skills: ['Advanced Git Workflows', 'Branching Strategies', 'Git Hooks & Automation', 'Code Review Processes', 'Merge Conflict Resolution'], time: '1-2 months' },
    { category: 'Container Technologies', skills: ['Docker Advanced', 'Container Security', 'Multi-stage Builds', 'Container Registries', 'Docker Compose'], time: '2-3 months' },
    { category: 'Container Orchestration', skills: ['Kubernetes Advanced', 'Istio Service Mesh', 'Custom Operators', 'Helm Charts', 'RBAC & Security'], time: '4-5 months' },
    { category: 'Cloud Platforms', skills: ['GCP Advanced', 'AWS Advanced', 'Multi-cloud Networking', 'IAM & Security', 'Cost Optimization'], time: '4-6 months' },
    { category: 'Infrastructure as Code', skills: ['Terraform Advanced', 'Pulumi', 'GitOps Workflows', 'State Management', 'Module Development'], time: '3-4 months' },
    { category: 'Programming & Scripting', skills: ['Go', 'Python', 'TypeScript', 'Rust', 'Shell Scripting'], time: '6-8 months' },
    { category: 'CI/CD & Automation', skills: ['Jenkins/GitLab CI', 'ArgoCD/Flux', 'Pipeline as Code', 'Test Automation', 'Deployment Strategies'], time: '3-4 months' },
    { category: 'Monitoring & Observability', skills: ['Prometheus', 'Grafana', 'OpenTelemetry', 'Log Management', 'SLI/SLO Design'], time: '3-4 months' },
    { category: 'Database Technologies', skills: ['PostgreSQL/MySQL', 'Redis/Memcached', 'Database Sharding', 'Backup & Recovery', 'Performance Tuning'], time: '3-4 months' },
    { category: 'Security & Compliance', skills: ['Zero-trust Architecture', 'Policy-as-Code', 'Compliance Automation', 'Vulnerability Management', 'Incident Response'], time: '4-5 months' },
    { category: 'Platform Engineering', skills: ['Backstage.io', 'Developer Experience', 'API Design', 'Service Mesh', 'Internal Tools'], time: '3-4 months' },
    { category: 'Data Engineering', skills: ['Event Streaming (Kafka)', 'Data Pipelines', 'Real-time Analytics', 'Message Queues', 'Data Warehousing'], time: '3-4 months' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 gradient-primary opacity-10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            6 Platform Engineering Projects
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Master the complete platform engineering stack. From cloud-native e-commerce to zero-trust security.
            Build production-grade systems that make companies compete to hire you.
          </p>
          <div className="flex gap-4 justify-center items-center">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <DollarSign className="w-4 h-4 mr-2" />
              Target: $210K+ USD
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Globe className="w-4 h-4 mr-2" />
              International Remote
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Trophy className="w-4 h-4 mr-2" />
              Senior/Staff Level
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="projects">All 6 Projects</TabsTrigger>
            <TabsTrigger value="prerequisites">Prerequisites</TabsTrigger>
            <TabsTrigger value="career">Career Impact</TabsTrigger>
            <TabsTrigger value="strategy">Strategy</TabsTrigger>
            <TabsTrigger value="vision">Future Vision</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {projects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedProject === index ? 'shadow-elegant border-primary' : 'hover:shadow-lg'
                  }`}
                  onClick={() => setSelectedProject(index)}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      {project.icon}
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Difficulty</span>
                          <span>{project.difficulty}%</span>
                        </div>
                        <Progress value={project.difficulty} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Market Demand</span>
                          <span>{project.marketDemand}%</span>
                        </div>
                        <Progress value={project.marketDemand} className="h-2" />
                      </div>
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-sm text-muted-foreground">Timeline</span>
                        <Badge variant="outline">{project.timeline}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Salary Impact</span>
                        <Badge className="gradient-primary text-primary-foreground">{project.salaryImpact}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Selected Project Details */}
            <Card className="shadow-elegant">
              <CardHeader>
                <div className="flex items-center gap-3">
                  {projects[selectedProject].icon}
                  <CardTitle className="text-2xl">{projects[selectedProject].title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="architecture" className="w-full">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="architecture">Architecture</TabsTrigger>
                    <TabsTrigger value="prerequisites">Prerequisites</TabsTrigger>
                    <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
                    <TabsTrigger value="cto-pitch">CTO Pitch</TabsTrigger>
                    <TabsTrigger value="testing">Testing</TabsTrigger>
                  </TabsList>

                  <TabsContent value="architecture" className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">System Components</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {projects[selectedProject].architecture.components.map((component, index) => (
                          <div key={index} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                            <Server className="w-4 h-4 text-primary" />
                            <span className="text-sm">{component}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Data Flow</h4>
                      <div className="p-4 bg-muted rounded-lg">
                        <code className="text-sm">{projects[selectedProject].architecture.flow}</code>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="prerequisites" className="space-y-4">
                    {projects[selectedProject].prerequisites.map((prereq, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{prereq.skill}</h4>
                          <Badge variant={prereq.level === 'Advanced' ? 'destructive' : prereq.level === 'Intermediate' ? 'default' : 'secondary'}>
                            {prereq.level}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{prereq.reason}</p>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="outcomes" className="space-y-4">
                    {projects[selectedProject].outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span className="text-sm">{outcome}</span>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="cto-pitch">
                    <div className="p-6 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-lg border border-primary/20">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        Executive Summary
                      </h4>
                      <p className="text-muted-foreground">{projects[selectedProject].ctoPitch}</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="testing" className="space-y-4">
                    <div className="p-4 bg-muted rounded-lg mb-4">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Brain className="w-5 h-5" />
                        Technical Interview Questions
                      </h4>
                      <p className="text-sm text-muted-foreground">Questions you should be able to answer confidently</p>
                    </div>
                    {projects[selectedProject].testingQuestions.map((question, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-start gap-3">
                          <Badge variant="outline" className="mt-1">{index + 1}</Badge>
                          <p className="text-sm">{question}</p>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="prerequisites" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Learning Roadmap - Master These First
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {overallPrerequisites.map((category, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-3">{category.category}</h4>
                      <div className="space-y-2 mb-3">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            <span className="text-sm">{skill}</span>
                          </div>
                        ))}
                      </div>
                      <Badge variant="secondary">{category.time}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-destructive/10 to-destructive/5 border-destructive/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <AlertCircle className="w-5 h-5" />
                  Critical Warning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Without these prerequisites, projects will become overwhelming and you'll likely give up. 
                  Invest 6-12 months mastering these fundamentals before starting complex platform builds.
                </p>
                <div className="flex items-center gap-2 text-sm text-destructive">
                  <AlertCircle className="w-4 h-4" />
                  <span>Success Rate: 90% with proper preparation vs 15% without</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="career" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Current vs Target Compensation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Current (14 LPA India)</span>
                      <span>$17K USD</span>
                    </div>
                    <Progress value={17} className="h-3" />
                  </div>
                  <div>
                        <div className="flex justify-between text-sm">
                          <span>Target (Staff Platform Engineer)</span>
                          <span>$210K USD</span>
                        </div>
                        <Progress value={100} className="h-3 mb-2" />
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg">
                        <p className="text-sm font-semibold text-primary">
                          Growth Potential: 1,135% increase
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Market Positioning</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Platform Engineering Demand</span>
                    <Badge className="gradient-primary text-primary-foreground">98%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Available Talent</span>
                    <Badge variant="destructive">12%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Competition Level</span>
                    <Badge variant="secondary">Low</Badge>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Perfect storm: High demand, low supply = Premium salaries
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Career Trajectory Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-sm font-semibold">0-6M</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Foundation Building</h4>
                      <p className="text-sm text-muted-foreground">Master prerequisites, build first platform</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/40 flex items-center justify-center">
                      <span className="text-sm font-semibold">6-12M</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Platform Development</h4>
                      <p className="text-sm text-muted-foreground">Complete 3 major projects, build portfolio</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary-foreground">12-18M</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Market Entry</h4>
                      <p className="text-sm text-muted-foreground">Apply for international roles, negotiate premium salaries</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="strategy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Strategic Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="projects">
                    <AccordionTrigger>Are 3 projects enough?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        <strong>Target: 6 complete projects for "companies compete for you" level:</strong>
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Project 1: Cloud-Native E-Commerce (Foundation)</li>
                        <li>• Project 2: Multi-Tenant SaaS Platform (Scaling)</li>
                        <li>• Project 3: Global CDN (Performance)</li>
                        <li>• Project 4: Multi-Cloud Disaster Recovery (Resilience)</li>
                        <li>• Project 5: Developer Experience Platform (Productivity)</li>
                        <li>• Project 6: Zero-Trust Security (Compliance)</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="timeline">
                    <AccordionTrigger>Realistic Timeline to Goal</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span>Prerequisites mastery:</span>
                          <Badge variant="secondary">8-12 months</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Core 6 projects:</span>
                          <Badge variant="secondary">18-24 months</Badge>
                        </div>
                        <div className="flex justify-between font-semibold">
                          <span>Total to Staff level:</span>
                          <Badge className="gradient-primary text-primary-foreground">26-36 months</Badge>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="target-companies">
                    <AccordionTrigger>Target Companies & Strategies</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold mb-2">Tier 1 Targets (Premium Pay):</h5>
                          <div className="grid md:grid-cols-2 gap-2 text-sm">
                            <span>• Netflix, Spotify, Uber</span>
                            <span>• DataDog, HashiCorp, GitLab</span>
                            <span>• Stripe, Figma, Discord</span>
                            <span>• Shopify, Slack, Zoom</span>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Strategy:</h5>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Open source contributions to their tools</li>
                            <li>• Technical blog posts about platform challenges</li>
                            <li>• LinkedIn content targeting their engineering leaders</li>
                            <li>• Conference talks on platform engineering</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="portfolio">
                    <AccordionTrigger>Portfolio Positioning</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          Position yourself as a "Staff Platform Engineer" not "Senior DevOps Engineer"
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <h5 className="font-semibold mb-2">Showcase:</h5>
                            <ul className="space-y-1 text-muted-foreground">
                              <li>• Business impact metrics</li>
                              <li>• Developer productivity gains</li>
                              <li>• Cost savings achieved</li>
                              <li>• Architecture decisions</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-2">Avoid:</h5>
                            <ul className="space-y-1 text-muted-foreground">
                              <li>• Basic deployment scripts</li>
                              <li>• Simple monitoring setups</li>
                              <li>• Tutorial-level projects</li>
                              <li>• Tool-focused descriptions</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card className="gradient-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Success Formula
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  <strong>Goal:</strong> Make companies compete to hire you at premium salaries
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h5 className="font-semibold mb-2">Technical Excellence</h5>
                    <ul className="space-y-1 opacity-90">
                      <li>• Production-grade projects</li>
                      <li>• Modern architecture patterns</li>
                      <li>• Measurable business impact</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Market Positioning</h5>
                    <ul className="space-y-1 opacity-90">
                      <li>• Platform Engineer identity</li>
                      <li>• Thought leadership content</li>
                      <li>• Open source contributions</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Strategic Execution</h5>
                    <ul className="space-y-1 opacity-90">
                      <li>• Target high-paying companies</li>
                      <li>• Network with engineering leaders</li>
                      <li>• Negotiate from strength</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vision" className="space-y-6">
            <Card className="bg-gradient-to-r from-primary/10 to-primary-glow/10 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Trophy className="w-6 h-6" />
                  Meet Arun Ponugoti 2.0: The Platform Engineering Architect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-lg text-muted-foreground">
                  After completing these 6 transformative projects, Arun will emerge as a world-class Platform Engineering Architect - 
                  a rare breed of engineer who designs and builds the infrastructure that powers the next generation of global companies.
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Brain className="w-5 h-5" />
                        Who He Will Be
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <h5 className="font-semibold">The Infrastructure Visionary</h5>
                          <p className="text-sm text-muted-foreground">Architects systems that handle millions of users across continents with zero downtime</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <h5 className="font-semibold">The Developer Productivity Catalyst</h5>
                          <p className="text-sm text-muted-foreground">Builds platforms that turn weeks of work into minutes of self-service automation</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <h5 className="font-semibold">The Business Impact Engineer</h5>
                          <p className="text-sm text-muted-foreground">Every line of code translates to millions in cost savings and revenue acceleration</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        Problems He'll Solve
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <h5 className="font-semibold">Scale Nightmares → Effortless Growth</h5>
                          <p className="text-sm text-muted-foreground">Transform apps that crash under load into systems that auto-scale globally</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <h5 className="font-semibold">Security Vulnerabilities → Zero-Trust Fortress</h5>
                          <p className="text-sm text-muted-foreground">Build unhackable infrastructure with automated compliance and threat detection</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Code className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <h5 className="font-semibold">Developer Chaos → Golden Path Excellence</h5>
                          <p className="text-sm text-muted-foreground">Replace months of onboarding with 2-hour self-service platform magic</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="w-5 h-5" />
                      How The World Will See Him
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                        <h5 className="font-semibold mb-2">Engineering Teams</h5>
                        <p className="text-sm text-muted-foreground">"The architect who makes impossible things simple"</p>
                      </div>
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                        <h5 className="font-semibold mb-2">CTOs & VPs</h5>
                        <p className="text-sm text-muted-foreground">"The engineer who saves millions while accelerating growth"</p>
                      </div>
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <Network className="w-8 h-8 text-primary mx-auto mb-2" />
                        <h5 className="font-semibold mb-2">Industry Peers</h5>
                        <p className="text-sm text-muted-foreground">"The platform engineer everyone wants to hire"</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5" />
                        Earning Potential Timeline
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <span className="font-semibold">2025 (Year 1-2)</span>
                          <Badge className="gradient-primary text-primary-foreground">$180K - $220K</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <span className="font-semibold">2026 (Year 2-3)</span>
                          <Badge className="gradient-primary text-primary-foreground">$250K - $300K</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <span className="font-semibold">2027+ (Senior Staff)</span>
                          <Badge className="gradient-primary text-primary-foreground">$350K - $500K</Badge>
                        </div>
                      </div>
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <p className="text-sm font-semibold text-primary">
                          + Equity, bonuses, and consulting opportunities
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Brain className="w-5 h-5" />
                        AI Integration Future
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Zap className="w-5 h-5 text-primary mt-0.5" />
                          <div>
                            <h5 className="font-semibold">AI-Powered Infrastructure</h5>
                            <p className="text-sm text-muted-foreground">Self-healing systems with ML-driven optimization</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Code className="w-5 h-5 text-primary mt-0.5" />
                          <div>
                            <h5 className="font-semibold">Intelligent Platform Automation</h5>
                            <p className="text-sm text-muted-foreground">AI that writes and deploys infrastructure code</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Target className="w-5 h-5 text-primary mt-0.5" />
                          <div>
                            <h5 className="font-semibold">Predictive Operations</h5>
                            <p className="text-sm text-muted-foreground">AI that prevents outages before they happen</p>
                          </div>
                        </div>
                      </div>
                      <Badge className="w-full gradient-primary text-primary-foreground text-center py-2">
                        Additional $100K+ premium for AI expertise
                      </Badge>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">The Ultimate Transformation</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-lg opacity-95">
                      From a $17K developer in India to a $500K+ Staff Platform Engineering Architect commanding 
                      respect from Silicon Valley's top companies.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                      <div>
                        <h5 className="font-semibold mb-2">Technical Authority</h5>
                        <p className="text-sm opacity-90">The go-to expert for infrastructure that scales to millions</p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Financial Freedom</h5>
                        <p className="text-sm opacity-90">Top 1% income with equity upside and consulting opportunities</p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Global Impact</h5>
                        <p className="text-sm opacity-90">Building platforms that power the next unicorn companies</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;