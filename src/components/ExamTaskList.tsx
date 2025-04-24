
import { Separator } from "@/components/ui/separator";
import { ExamTask } from "@/components/ExamTask";
import { ExamTaskData } from "@/data/russianExamData";

interface ExamTaskListProps {
  tasks: ExamTaskData[];
  selectedAnswers: Record<number, string>;
  onAnswerSelect: (taskId: number, answer: string) => void;
  showCorrectAnswers: boolean;
}

export const ExamTaskList = ({ 
  tasks, 
  selectedAnswers, 
  onAnswerSelect, 
  showCorrectAnswers 
}: ExamTaskListProps) => {
  return (
    <div className="space-y-8">
      {tasks.map((task, index) => (
        <div key={task.id}>
          <ExamTask
            taskId={task.id}
            instruction={task.instruction}
            text={task.text}
            options={task.options}
            selectedAnswer={selectedAnswers[task.id]}
            onAnswerSelect={(answer) => onAnswerSelect(task.id, answer)}
            showCorrectAnswer={showCorrectAnswers}
            correctAnswer={task.correctAnswer}
          />
          {index < tasks.length - 1 && <Separator className="my-8" />}
        </div>
      ))}
    </div>
  );
};
