
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';
import { examTasks } from "@/data/russianExamData";
import { ExamTaskList } from "@/components/ExamTaskList";
import { ExamResults } from "@/components/ExamResults";

const RussianExam = () => {
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (taskId: number, answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [taskId]: answer
    }));
  };

  const checkAnswers = () => {
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetExam = () => {
    setSelectedAnswers({});
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getScore = () => {
    let score = 0;
    examTasks.forEach(task => {
      if (selectedAnswers[task.id] === task.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const isExamCompleted = Object.keys(selectedAnswers).length === examTasks.length;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Тренировочные задания ОГЭ по русскому языку</h1>
          <Button variant="outline" onClick={() => navigate('/')}>
            На главную
          </Button>
        </div>

        {showResults && (
          <ExamResults 
            score={getScore()} 
            totalTasks={examTasks.length} 
            selectedAnswers={selectedAnswers} 
            examTasks={examTasks}
            onReset={resetExam}
          />
        )}

        <ExamTaskList 
          tasks={examTasks}
          selectedAnswers={selectedAnswers}
          onAnswerSelect={handleAnswerSelect}
          showCorrectAnswers={showResults}
        />

        <div className="mt-8 flex justify-between">
          <Button 
            onClick={() => navigate('/')} 
            variant="outline"
          >
            Назад
          </Button>
          <Button 
            onClick={checkAnswers} 
            disabled={!isExamCompleted || showResults}
            className="bg-primary hover:bg-primary/90"
          >
            Проверить ответы
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RussianExam;
