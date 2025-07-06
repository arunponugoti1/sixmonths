import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Target, Lightbulb, Rocket, Star, TrendingUp } from "lucide-react";

const ProjectGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            {[...Array(10)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Your Vision: Project Execution Mastery
          </h1>
          <Badge variant="secondary" className="text-lg px-6 py-2">
            10/10 - Architect-Level Approach
          </Badge>
        </div>

        {/* Vision Statement */}
        <Card className="mb-8 border-primary/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-6 h-6 text-primary" />
              The Foundation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">
              Your approach is EXACTLY right. Building to understand deeply, not just to complete, 
              is what separates architects from operators. Here's your battle-tested template for 
              transforming learning into mastery.
            </p>
          </CardContent>
        </Card>

        {/* Phase 1: Project Initiation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <CheckCircle className="w-7 h-7 text-primary" />
              PHASE 1: PROJECT INITIATION
            </CardTitle>
            <p className="text-muted-foreground">(Before Writing Any Code)</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">1. PROBLEM DEFINITION</h4>
              <ul className="space-y-2 ml-4">
                <li>□ What business problem does this solve?</li>
                <li>□ What happens if we DON'T solve this? (Cost/Impact)</li>
                <li>□ Who are the stakeholders? (Users/DevOps/Security/Business)</li>
                <li>□ What are current solutions and why do they fail?</li>
              </ul>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">2. SUCCESS METRICS</h4>
              <ul className="space-y-2 ml-4">
                <li>□ Technical KPIs: (Latency &lt; Xms, Uptime %, RTO/RPO)</li>
                <li>□ Business KPIs: (Cost reduction %, Developer productivity)</li>
                <li>□ Scale targets: (Users, RPS, Data volume)</li>
              </ul>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">3. CONSTRAINTS & TRADE-OFFS</h4>
              <ul className="space-y-2 ml-4">
                <li>□ Budget constraints?</li>
                <li>□ Team size assumptions?</li>
                <li>□ Compliance requirements?</li>
                <li>□ What are we explicitly NOT solving?</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Phase 2: Architecture Design */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Lightbulb className="w-7 h-7 text-primary" />
              PHASE 2: ARCHITECTURE DESIGN
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">4. HIGH-LEVEL DESIGN</h4>
              <ul className="space-y-2 ml-4">
                <li>□ Draw architecture diagram (Excalidraw/Draw.io)</li>
                <li>□ Data flow diagram</li>
                <li>□ Failure scenarios diagram</li>
                <li>□ Security boundaries diagram</li>
              </ul>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">5. TECHNOLOGY SELECTION MATRIX</h4>
              <p className="text-sm text-muted-foreground mb-3">For EACH tool/technology chosen:</p>
              <div className="bg-background/50 p-3 rounded border-l-4 border-primary">
                <p className="font-medium">Tool: [Istio/Kubernetes/Terraform/etc]</p>
                <div className="mt-2 space-y-1 text-sm">
                  <p>• Problem it solves:</p>
                  <p>• Alternatives considered: [List 3]</p>
                  <p>• Why rejected: [Specific reasons]</p>
                  <p>• Trade-offs accepted:</p>
                  <p>• Cost implications:</p>
                  <p>• Learning curve vs benefit:</p>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">6. DEEP DIVE QUESTIONS</h4>
              <ul className="space-y-2 ml-4">
                <li>□ What happens when this component fails?</li>
                <li>□ How do we monitor this?</li>
                <li>□ How do we debug issues?</li>
                <li>□ How do we scale this?</li>
                <li>□ Security implications?</li>
                <li>□ Cost at 10x scale?</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Success Formula */}
        <Card className="mb-8 border-primary/40 bg-gradient-to-r from-primary/5 to-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Rocket className="w-7 h-7 text-primary" />
              YOUR SUCCESS FORMULA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center p-6 bg-background/50 rounded-lg">
              <p className="text-xl font-mono">
                Deep Understanding = 
              </p>
              <p className="text-lg font-mono mt-2">
                (Building + Breaking + Fixing + Documenting) × Consistency
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Expected Outcome */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <TrendingUp className="w-7 h-7 text-primary" />
              THE OUTCOME AFTER 6 PROJECTS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">500+</Badge>
                  <span>pages of documentation (your second brain)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">50+</Badge>
                  <span>failure scenarios handled and understood</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">30+</Badge>
                  <span>architectural decisions defended</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">$2000+</Badge>
                  <span>cloud spend = real production experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">100+</Badge>
                  <span>daily journals = growth story</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Staff Level</Badge>
                  <span>thinking patterns developed</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="border-primary bg-gradient-to-r from-primary/10 to-primary/5">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Rating: 10/10</h3>
            <p className="text-lg mb-4">
              This is EXACTLY how staff engineers think. You're not just learning tools, 
              you're learning judgment.
            </p>
            <Badge variant="default" className="text-lg px-6 py-2">
              Start this weekend. Your future self will thank you.
            </Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectGuide;