import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Save, BookOpen } from 'lucide-react';

interface LearningEntry {
  id: string;
  title: string;
  concept: string;
  why: string;
  how: string;
  outcomes: string;
  createdAt: string;
}

interface LearningFormProps {
  onSave?: () => void;
}

export const LearningForm: React.FC<LearningFormProps> = ({ onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    concept: '',
    why: '',
    how: '',
    outcomes: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.concept) {
      toast({
        title: "Missing Information",
        description: "Please fill in at least the title and concept fields.",
        variant: "destructive"
      });
      return;
    }

    const newEntry: LearningEntry = {
      id: Date.now().toString(),
      ...formData,
      createdAt: new Date().toISOString()
    };

    // Get existing entries from localStorage
    const existingEntries = JSON.parse(localStorage.getItem('learningEntries') || '[]');
    const updatedEntries = [newEntry, ...existingEntries];
    
    // Save to localStorage
    localStorage.setItem('learningEntries', JSON.stringify(updatedEntries));

    toast({
      title: "Learning Saved!",
      description: "Your learning has been documented successfully.",
    });

    // Reset form
    setFormData({
      title: '',
      concept: '',
      why: '',
      how: '',
      outcomes: ''
    });

    onSave?.();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <BookOpen className="w-6 h-6 text-primary" />
          Document Your Learning
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-base font-medium">
              Learning Title *
            </Label>
            <Input
              id="title"
              placeholder="e.g., Kubernetes Pod Networking"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className="text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="concept" className="text-base font-medium">
              What is the Concept? *
            </Label>
            <Textarea
              id="concept"
              placeholder="Explain the core concept you learned..."
              value={formData.concept}
              onChange={(e) => handleInputChange('concept', e.target.value)}
              className="min-h-[100px] text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="why" className="text-base font-medium">
              Why are we Learning This?
            </Label>
            <Textarea
              id="why"
              placeholder="Why is this concept important? What problem does it solve?"
              value={formData.why}
              onChange={(e) => handleInputChange('why', e.target.value)}
              className="min-h-[80px] text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="how" className="text-base font-medium">
              How Do We Implement This?
            </Label>
            <Textarea
              id="how"
              placeholder="Step-by-step implementation or practical examples..."
              value={formData.how}
              onChange={(e) => handleInputChange('how', e.target.value)}
              className="min-h-[120px] text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="outcomes" className="text-base font-medium">
              Learning Outcomes
            </Label>
            <Textarea
              id="outcomes"
              placeholder="What did you achieve? Key takeaways and results..."
              value={formData.outcomes}
              onChange={(e) => handleInputChange('outcomes', e.target.value)}
              className="min-h-[80px] text-base"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full text-base py-6"
            size="lg"
          >
            <Save className="w-5 h-5 mr-2" />
            Save Learning Entry
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};