
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExamTask } from "@/components/ExamTask";
import { useNavigate } from 'react-router-dom';

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
    const correctAnswers = {
      1: "3",
      2: "1",
      3: "4",
      4: "2",
      5: "3",
      6: "4"
    };

    let score = 0;
    Object.keys(selectedAnswers).forEach(taskId => {
      if (selectedAnswers[Number(taskId)] === correctAnswers[Number(taskId) as keyof typeof correctAnswers]) {
        score++;
      }
    });

    return score;
  };

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
          <Card className="mb-8 p-6 bg-white shadow-md">
            <h2 className="text-2xl font-bold mb-4">Результаты</h2>
            <p className="text-lg mb-2">Вы правильно выполнили <span className="font-bold text-primary">{getScore()}</span> из 6 заданий.</p>
            <div className="grid grid-cols-3 gap-4 mb-4 mt-6">
              {Array.from({ length: 6 }, (_, i) => i + 1).map(taskId => {
                const isCorrect = selectedAnswers[taskId] === {
                  1: "3", 2: "1", 3: "4", 4: "2", 5: "3", 6: "4"
                }[taskId];

                return (
                  <div key={taskId} className="flex items-center">
                    <span className="mr-2">Задание {taskId}:</span>
                    <span className={`font-medium ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                      {isCorrect ? 'Верно' : 'Неверно'}
                    </span>
                  </div>
                );
              })}
            </div>
            <Button onClick={resetExam} className="mt-4">Пройти ещё раз</Button>
          </Card>
        )}

        <div className="space-y-8">
          <ExamTask
            taskId={1}
            instruction="В каком варианте ответа содержится информация, необходимая для обоснования ответа на вопрос: «Почему мальчик решил выполнить просьбу Лидии Михайловны?»"
            text={`
            (1)На следующий день Лидия Михайловна после звонка с урока не ушла, а, дождавшись, когда все выйдут из класса, сказала:
            — Ты останься, мне нужно поговорить с тобой.
            (2)Я остался, думая, что она станет упрекать меня за вчерашнее, но Лидия Михайловна, неповышая голоса, сказала:
            — Я хочу попросить тебя об одной услуге. (3)Ты мне не откажешь?
            — Я не знаю… — растерялся я, готовясь в уме отказаться, если она надумала пригласить меня к себе домой.
            — (4)Понимаешь, я вижу, что ты продолжаешь голодать. (5)Мне очень хочется тебе помочь. (6)Если ты не хочешь ходить ко мне на квартиру, давай встречаться в каком-нибудь другом месте.
            — (7)Зачем?
            — (8)Я буду приносить тебе что-нибудь и передавать. (9)Мне так хочется, чтобы ты был сытым.
            (10)Я молчал и, кажется, даже не удивился ее словам. (11)Но не только застенчивость заставляла меня молчать.
            — (12)Ну, что же? — спросила она, заглядывая мне в глаза. — (13)Конечно, ты мне откажешь?
            — (14)Нет, — выдавил я из себя отрицание.
            — (15)Вот и хорошо. (16)Тогда встретимся завтра. (17)Идёт?
            (18)Я кивнул.
            (по В. Г. Распутину)
            `}
            options={[
              "Учительница не повышала голоса, разговаривая с мальчиком.",
              "Учительница настойчиво приглашала мальчика к себе домой.",
              "Мальчик даже не удивился словам Лидии Михайловны, но не только застенчивость заставляла его молчать.",
              "Мальчик боялся отказать учительнице."
            ]}
            selectedAnswer={selectedAnswers[1]}
            onAnswerSelect={(answer) => handleAnswerSelect(1, answer)}
            showCorrectAnswer={showResults}
            correctAnswer="3"
          />

          <Separator />

          <ExamTask
            taskId={2}
            instruction="Укажите, в каком значении употребляется в тексте слово «заставляла» (предложение 11)."
            text=""
            options={[
              "Побуждала, вынуждала.",
              "Принуждала делать что-либо.",
              "Закрывала чем-нибудь (проём).",
              "Наполняла до предела."
            ]}
            selectedAnswer={selectedAnswers[2]}
            onAnswerSelect={(answer) => handleAnswerSelect(2, answer)}
            showCorrectAnswer={showResults}
            correctAnswer="1"
          />

          <Separator />

          <ExamTask
            taskId={3}
            instruction="Укажите предложение, в котором средством выразительности речи является метафора."
            text=""
            options={[
              "Я остался, думая, что она станет упрекать меня за вчерашнее, но Лидия Михайловна, не повышая голоса, сказала.",
              "Я хочу попросить тебя об одной услуге.",
              "Мне так хочется, чтобы ты был сытым.",
              "Я молчал и, кажется, даже не удивился ее словам."
            ]}
            selectedAnswer={selectedAnswers[3]}
            onAnswerSelect={(answer) => handleAnswerSelect(3, answer)}
            showCorrectAnswer={showResults}
            correctAnswer="4"
          />

          <Separator />

          <ExamTask
            taskId={4}
            instruction="Из предложений 10-13 выпишите слово, в котором правописание приставки зависит от глухости/звонкости звука, обозначаемого следующей после приставки буквой."
            text={`(10)Я молчал и, кажется, даже не удивился ее словам. (11)Но не только застенчивость заставляла меня молчать.
(12)Ну, что же? — спросила она, заглядывая мне в глаза. — (13)Конечно, ты мне откажешь?`}
            options={[
              "молчать",
              "застенчивость",
              "удивился",
              "откажешь"
            ]}
            selectedAnswer={selectedAnswers[4]}
            onAnswerSelect={(answer) => handleAnswerSelect(4, answer)}
            showCorrectAnswer={showResults}
            correctAnswer="2"
          />

          <Separator />

          <ExamTask
            taskId={5}
            instruction="Из предложений 1-3 выпишите слово, в котором правописание суффикса определяется правилом: «В прилагательных, образованных от существительных с помощью суффиксов -ЕНН-, -ОНН-, пишется НН»."
            text={`(1)На следующий день Лидия Михайловна после звонка с урока не ушла, а, дождавшись, когда все выйдут из класса, сказала:
— Ты останься, мне нужно поговорить с тобой.
(2)Я остался, думая, что она станет упрекать меня за вчерашнее, но Лидия Михайловна, не повышая голоса, сказала:
— Я хочу попросить тебя об одной услуге. (3)Ты мне не откажешь?`}
            options={[
              "следующий",
              "вчерашнее",
              "услуге",
              "откажешь"
            ]}
            selectedAnswer={selectedAnswers[5]}
            onAnswerSelect={(answer) => handleAnswerSelect(5, answer)}
            showCorrectAnswer={showResults}
            correctAnswer="3"
          />

          <Separator />

          <ExamTask
            taskId={6}
            instruction="Замените разговорное слово «НАДУМАЛА» из предложения 3 стилистически нейтральным синонимом. Напишите этот синоним."
            text="(3)Я не знаю… — растерялся я, готовясь в уме отказаться, если она надумала пригласить меня к себе домой."
            options={[
              "захотела",
              "возжелала",
              "вздумала",
              "решила"
            ]}
            selectedAnswer={selectedAnswers[6]}
            onAnswerSelect={(answer) => handleAnswerSelect(6, answer)}
            showCorrectAnswer={showResults}
            correctAnswer="4"
          />
        </div>

        <div className="mt-8 flex justify-between">
          <Button 
            onClick={() => navigate('/')} 
            variant="outline"
          >
            Назад
          </Button>
          <Button 
            onClick={checkAnswers} 
            disabled={Object.keys(selectedAnswers).length < 6 || showResults}
          >
            Проверить ответы
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RussianExam;
