
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Тренажёр по русскому языку</h1>
        <p className="text-xl text-gray-600 mb-8">
          Подготовьтесь к экзаменам с помощью нашего интерактивного тренажёра. 
          Выполняйте задания, проверяйте свои знания и улучшайте результаты!
        </p>
        
        <div className="grid gap-4 sm:grid-cols-2 max-w-md mx-auto">
          <Button 
            className="h-16 text-lg"
            onClick={() => navigate('/russian-exam')}
          >
            Начать тест ОГЭ
          </Button>
          <Button 
            variant="outline" 
            className="h-16 text-lg"
          >
            О программе
          </Button>
        </div>
      </div>
      
      <div className="mt-16 text-center text-gray-500">
        <p>© 2024 Тренажёр по русскому языку. Все права защищены.</p>
      </div>
    </div>
  );
};

export default Index;
