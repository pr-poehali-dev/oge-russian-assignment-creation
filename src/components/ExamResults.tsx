
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExamTaskData } from "@/data/russianExamData";

interface ExamResultsProps {
  score: number;
  totalTasks: number;
  selectedAnswers: Record<number, string>;
  examTasks: ExamTaskData[];
  onReset: () => void;
}

export const ExamResults = ({
  score,
  totalTasks,
  selectedAnswers,
  examTasks,
  onReset
}: ExamResultsProps) => {
  return (
    <Card className="mb-8 p-6 bg-white shadow-md animate-fade-in">
      <h2 className="text-2xl font-bold mb-4">Результаты</h2>
      <p className="text-lg mb-2">
        Вы правильно выполнили <span className="font-bold text-primary">{score}</span> из {totalTasks} заданий.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4 mt-6">
        {examTasks.map(task => {
          const isCorrect = selectedAnswers[task.id] === task.correctAnswer;
          return (
            <div key={task.id} className="flex items-center">
              <span className="mr-2">Задание {task.id}:</span>
              <span className={`font-medium ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                {isCorrect ? 'Верно' : 'Неверно'}
              </span>
            </div>
          );
        })}
      </div>
      
      <Button onClick={onReset} className="mt-4">Пройти ещё раз</Button>
    </Card>
  );
};
