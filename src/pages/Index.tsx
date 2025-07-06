import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { LearningForm } from '@/components/LearningForm';
import { BookOpen, Github, Eye, Lightbulb } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            EduTrack
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Document your learning journey and build your knowledge repository
          </p>
          <div className="flex gap-4 justify-center items-center flex-wrap">
            <Badge variant="secondary" className="text-base px-4 py-2">
              <Github className="w-4 h-4 mr-2" />
              GitHub: Arunponugotii
            </Badge>
            <Link to="/learnings">
              <Button variant="outline" className="text-base">
                <Eye className="w-4 h-4 mr-2" />
                View All Learnings
              </Button>
            </Link>
          </div>
        </div>

        {/* Main Learning Form */}
        <LearningForm onSave={() => {
          // Optional: Could trigger a refresh or navigation
        }} />

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardHeader>
              <BookOpen className="w-12 h-12 mx-auto text-primary mb-4" />
              <CardTitle>Structured Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Document concepts, implementation steps, and outcomes in a structured format
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Github className="w-12 h-12 mx-auto text-primary mb-4" />
              <CardTitle>GitHub Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Save your learnings as markdown files in your GitHub repository for version control
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Lightbulb className="w-12 h-12 mx-auto text-primary mb-4" />
              <CardTitle>Knowledge Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Build a searchable knowledge base of everything you learn, accessible anytime
              </p>
            </CardContent>
          </Card>
        </div>

        {/* GitHub Integration Note */}
        <Card className="mt-12 bg-muted/30 border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="font-semibold mb-2">🚀 Ready for GitHub Integration?</h3>
              <p className="text-muted-foreground mb-4">
                Currently storing locally. Connect to Supabase to automatically sync your learnings to your GitHub repository:
              </p>
              <p className="text-sm text-muted-foreground">
                Target Repository: {" "}
                <a 
                  href="https://github.com/Arunponugotii/1st-K8s-project" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-mono"
                >
                  Arunponugotii/1st-K8s-project
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;