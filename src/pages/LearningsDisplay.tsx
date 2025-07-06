import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Github, BookOpen, Target, Lightbulb, Cog } from 'lucide-react';

interface LearningEntry {
  id: string;
  title: string;
  concept: string;
  why: string;
  how: string;
  outcomes: string;
  createdAt: string;
}

const LearningsDisplay = () => {
  const [learnings, setLearnings] = useState<LearningEntry[]>([]);

  useEffect(() => {
    const savedLearnings = JSON.parse(localStorage.getItem('learningEntries') || '[]');
    setLearnings(savedLearnings);
  }, []);

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (learnings.length === 0) {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="outline" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Add Learning
              </Button>
            </Link>
          </div>
          
          <Card className="text-center py-16">
            <CardContent>
              <BookOpen className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-2xl font-semibold mb-2">No Learnings Yet</h2>
              <p className="text-muted-foreground mb-6">
                Start documenting your learning journey by adding your first entry.
              </p>
              <Link to="/">
                <Button>Add Your First Learning</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Add Learning
            </Button>
          </Link>
          
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Your Learning Journey
            </h1>
            <p className="text-muted-foreground text-lg">
              {learnings.length} learning {learnings.length === 1 ? 'entry' : 'entries'} documented
            </p>
            <Badge variant="secondary" className="mt-2">
              <Github className="w-4 h-4 mr-1" />
              GitHub: Arunponugotii
            </Badge>
          </div>
        </div>

        {/* Learning Entries */}
        <div className="space-y-6">
          {learnings.map((learning) => (
            <Card key={learning.id} className="shadow-elegant">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl text-primary">
                    {learning.title}
                  </CardTitle>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(learning.createdAt)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Concept Section */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-lg">What is the Concept?</h3>
                  </div>
                  <p className="text-foreground leading-relaxed pl-7">
                    {learning.concept}
                  </p>
                </div>

                {learning.why && (
                  <>
                    <Separator />
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Lightbulb className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Why Learn This?</h3>
                      </div>
                      <p className="text-foreground leading-relaxed pl-7">
                        {learning.why}
                      </p>
                    </div>
                  </>
                )}

                {learning.how && (
                  <>
                    <Separator />
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Cog className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">How to Implement</h3>
                      </div>
                      <div className="pl-7">
                        <pre className="whitespace-pre-wrap text-foreground leading-relaxed font-mono text-sm bg-muted p-4 rounded-md">
                          {learning.how}
                        </pre>
                      </div>
                    </div>
                  </>
                )}

                {learning.outcomes && (
                  <>
                    <Separator />
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Learning Outcomes</h3>
                      </div>
                      <p className="text-foreground leading-relaxed pl-7">
                        {learning.outcomes}
                      </p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub Integration Note */}
        <Card className="mt-12 bg-muted/50">
          <CardContent className="pt-6">
            <div className="text-center">
              <Github className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
              <p className="text-muted-foreground">
                <strong>GitHub Integration:</strong> To automatically save your learnings to your GitHub repository 
                ({" "}
                <a 
                  href="https://github.com/Arunponugotii/1st-K8s-project" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Arunponugotii/1st-K8s-project
                </a>
                {" "}), you'll need to connect this app to Supabase for backend functionality.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LearningsDisplay;