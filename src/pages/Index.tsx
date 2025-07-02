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
  Globe
} from 'lucide-react';

const Index = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 'dx-platform',
      title: 'Developer Experience (DX) Platform',
      icon: <Code className="w-6 h-6" />,
      description: 'Self-service infrastructure portal with golden path templates',
      difficulty: 85,
      marketDemand: 95,
      salaryImpact: '$180K+ USD',
      timeline: '12-16 weeks',
      architecture: {
        components: [
          'React/TypeScript Frontend',
          'Node.js/Express Backend',
          'Backstage.io Core',
          'Terraform Templates',
          'ArgoCD GitOps',
          'Kubernetes Operators',
          'PostgreSQL Database',
          'Redis Cache'
        ],
        flow: 'Developer Request → Template Selection → Infrastructure Provisioning → CI/CD Setup → Monitoring Integration'
      },
      prerequisites: [
        { skill: 'Kubernetes Administration', level: 'Advanced', reason: 'Core platform runs on K8s with custom operators' },
        { skill: 'React/TypeScript', level: 'Intermediate', reason: 'Backstage plugins and custom UI components' },
        { skill: 'Terraform', level: 'Advanced', reason: 'Dynamic infrastructure template generation' },
        { skill: 'GitOps/ArgoCD', level: 'Intermediate', reason: 'Automated deployment workflows' },
        { skill: 'PostgreSQL', level: 'Basic', reason: 'Backstage catalog and user data storage' }
      ],
      outcomes: [
        'Reduce developer onboarding from 2 weeks to 2 hours',
        'Increase deployment frequency by 300%',
        'Standardize security and compliance across all services',
        'Save $2M+ annually in developer productivity'
      ],
      ctoPitch: 'Transform how developers ship code by eliminating toil and standardizing best practices. ROI: 400% in first year through reduced onboarding time and faster feature delivery.',
      testingQuestions: [
        'How would you implement dynamic Terraform template generation in Backstage?',
        'Design a plugin architecture for extending the platform capabilities',
        'How would you handle multi-tenant resource isolation?',
        'Explain your strategy for rolling updates with zero downtime',
        'How would you implement cost allocation and chargeback?'
      ]
    },
    {
      id: 'observability-platform',
      title: 'Observability & Reliability Platform',
      icon: <MonitorSpeaker className="w-6 h-6" />,
      description: 'Multi-cloud monitoring with SLO management and chaos engineering',
      difficulty: 90,
      marketDemand: 92,
      salaryImpact: '$190K+ USD',
      timeline: '14-18 weeks',
      architecture: {
        components: [
          'Prometheus/Grafana Stack',
          'OpenTelemetry Collectors',
          'Jaeger Tracing',
          'SLO Management API',
          'Chaos Engineering Engine',
          'ML Anomaly Detection',
          'PagerDuty Integration',
          'Cost Analytics Engine'
        ],
        flow: 'Data Collection → Processing → Storage → Analysis → Alerting → Incident Response → Post-mortem'
      },
      prerequisites: [
        { skill: 'Prometheus/Grafana', level: 'Advanced', reason: 'Core metrics collection and visualization' },
        { skill: 'OpenTelemetry', level: 'Intermediate', reason: 'Distributed tracing and metrics correlation' },
        { skill: 'Go Programming', level: 'Intermediate', reason: 'Custom exporters and operators' },
        { skill: 'Statistics/ML', level: 'Basic', reason: 'Anomaly detection algorithms' },
        { skill: 'SRE Principles', level: 'Advanced', reason: 'SLO/SLI design and error budget management' }
      ],
      outcomes: [
        'Achieve 99.99% uptime across all critical services',
        'Reduce MTTR from 45 minutes to 8 minutes',
        'Prevent 85% of incidents through proactive monitoring',
        'Save $5M+ annually through improved reliability'
      ],
      ctoPitch: 'Build bulletproof systems with predictive failure detection. ROI: 600% through prevented outages and optimized performance.',
      testingQuestions: [
        'Design a SLO framework for a microservices architecture',
        'How would you implement automated chaos experiments safely?',
        'Explain your approach to distributed tracing correlation',
        'How would you detect anomalies in time-series data?',
        'Design an incident response automation system'
      ]
    },
    {
      id: 'security-platform',
      title: 'Security & Compliance Platform',
      icon: <Shield className="w-6 h-6" />,
      description: 'Zero-trust security with policy-as-code and automated compliance',
      difficulty: 95,
      marketDemand: 98,
      salaryImpact: '$200K+ USD',
      timeline: '16-20 weeks',
      architecture: {
        components: [
          'Istio Service Mesh',
          'Open Policy Agent (OPA)',
          'HashiCorp Vault',
          'Falco Runtime Security',
          'Compliance Scanner',
          'Certificate Management',
          'Identity Provider (OIDC)',
          'Security Dashboard'
        ],
        flow: 'Policy Definition → Deployment → Runtime Enforcement → Monitoring → Compliance Reporting → Remediation'
      },
      prerequisites: [
        { skill: 'Security Fundamentals', level: 'Advanced', reason: 'Zero-trust architecture and threat modeling' },
        { skill: 'Istio Service Mesh', level: 'Advanced', reason: 'mTLS and traffic policy enforcement' },
        { skill: 'OPA/Rego', level: 'Intermediate', reason: 'Policy-as-code implementation' },
        { skill: 'PKI/Certificate Management', level: 'Intermediate', reason: 'Automated certificate lifecycle' },
        { skill: 'Compliance Frameworks', level: 'Basic', reason: 'SOC2, PCI-DSS, GDPR requirements' }
      ],
      outcomes: [
        'Achieve SOC2 Type II compliance in 6 months vs 18 months',
        'Reduce security incidents by 95%',
        'Automate 90% of compliance evidence collection',
        'Save $3M+ annually in audit and remediation costs'
      ],
      ctoPitch: 'Embed security into every deployment with zero friction for developers. ROI: 500% through automated compliance and prevented breaches.',
      testingQuestions: [
        'Design a zero-trust architecture for microservices',
        'How would you implement policy-as-code with OPA?',
        'Explain your approach to automated certificate rotation',
        'How would you detect and respond to runtime threats?',
        'Design a compliance evidence collection system'
      ]
    }
  ];

  const overallPrerequisites = [
    { category: 'Cloud Platforms', skills: ['GCP/AWS Core Services', 'Multi-cloud Architecture'], time: '2-3 months' },
    { category: 'Container Orchestration', skills: ['Kubernetes Advanced', 'Helm Charts', 'Operators'], time: '3-4 months' },
    { category: 'Infrastructure as Code', skills: ['Terraform Advanced', 'Ansible', 'GitOps'], time: '2-3 months' },
    { category: 'Programming', skills: ['Go', 'Python', 'TypeScript', 'Bash'], time: '4-6 months' },
    { category: 'Observability', skills: ['Prometheus', 'Grafana', 'OpenTelemetry', 'Logging'], time: '2-3 months' },
    { category: 'Security', skills: ['Zero-trust', 'PKI', 'RBAC', 'Policy Engines'], time: '3-4 months' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 gradient-primary opacity-10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Platform Engineering Mastery
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Build production-grade platforms that companies compete to hire you for. 
            Transform from DevOps Engineer to Platform Engineering Leader.
          </p>
          <div className="flex gap-4 justify-center items-center">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <DollarSign className="w-4 h-4 mr-2" />
              Target: $200K+ USD
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
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="prerequisites">Prerequisites</TabsTrigger>
            <TabsTrigger value="career">Career Impact</TabsTrigger>
            <TabsTrigger value="strategy">Strategy</TabsTrigger>
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
                    <div className="flex justify-between text-sm mb-2">
                      <span>Target (International Remote)</span>
                      <span>$200K USD</span>
                    </div>
                    <Progress value={100} className="h-3" />
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <p className="text-sm font-semibold text-primary">
                      Growth Potential: 1,076% increase
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
                        <strong>No - You need 5-6 projects for "companies compete for you" level:</strong>
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Core 3: DX Platform, Observability, Security (Foundation)</li>
                        <li>• +1: Multi-Cloud Disaster Recovery (Advanced)</li>
                        <li>• +1: ML/AI Platform for Dev Productivity (Cutting-edge)</li>
                        <li>• +1: Cost Optimization Engine (Business Impact)</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="timeline">
                    <AccordionTrigger>Realistic Timeline to Goal</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span>Prerequisites mastery:</span>
                          <Badge variant="secondary">6-8 months</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Core 3 projects:</span>
                          <Badge variant="secondary">8-10 months</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Advanced projects:</span>
                          <Badge variant="secondary">4-6 months</Badge>
                        </div>
                        <div className="flex justify-between font-semibold">
                          <span>Total to premium level:</span>
                          <Badge className="gradient-primary text-primary-foreground">18-24 months</Badge>
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
                          Position yourself as a "Platform Engineering Specialist" not "DevOps Engineer"
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
        </Tabs>
      </div>
    </div>
  );
};

export default Index;