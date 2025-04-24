
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface ExamTaskProps {
  taskId: number;
  instruction: string;
  text: string;
  options: string[];
  selectedAnswer?: string;
  onAnswerSelect: (answer: string) => void;
  showCorrectAnswer: boolean;
  correctAnswer: string;
}

export const ExamTask = ({
  taskId,
  instruction,
  text,
  options,
  selectedAnswer,
  onAnswerSelect,
  showCorrectAnswer,
  correctAnswer
}: ExamTaskProps) => {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center text-xl mb-2">
          <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
            {taskId}
          </span>
          Задание {taskId}
        </CardTitle>
        <CardDescription className="text-base text-gray-700">{instruction}</CardDescription>
      </CardHeader>
      <CardContent>
        {text && (
          <div className="mb-6 p-4 bg-gray-50 rounded-md text-gray-800 text-sm whitespace-pre-line">
            {text}
          </div>
        )}
        
        <RadioGroup 
          value={selectedAnswer} 
          onValueChange={onAnswerSelect}
          className="space-y-3"
        >
          {options.map((option, index) => (
            <div key={index} className={`flex items-start space-x-2 p-3 rounded-md ${
              showCorrectAnswer && correctAnswer === String(index + 1) ? 'bg-green-50' : 
              showCorrectAnswer && selectedAnswer === String(index + 1) && correctAnswer !== String(index + 1) ? 'bg-red-50' : 
              'hover:bg-gray-50'
            }`}>
              <RadioGroupItem 
                value={String(index + 1)} 
                id={`option-${taskId}-${index + 1}`} 
                disabled={showCorrectAnswer}
                className="mt-1"
              />
              <Label 
                htmlFor={`option-${taskId}-${index + 1}`} 
                className="cursor-pointer text-base font-normal"
              >
                {option}
                {showCorrectAnswer && correctAnswer === String(index + 1) && (
                  <span className="ml-2 text-green-600 text-sm font-medium">(Правильный ответ)</span>
                )}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};
