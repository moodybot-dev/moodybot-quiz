import { useState, useEffect } from "react";
import { WelcomeScreen } from "@/components/welcome-screen";
import { QuizScreen } from "@/components/quiz-screen";
import { ResultsScreen } from "@/components/results-screen";
import { QUIZ_QUESTIONS, getPersonalityType } from "@/lib/quiz-data";
import { saveQuizProgress, loadQuizProgress, clearQuizProgress } from "@/lib/quiz-storage";
import { QuizProgress } from "@shared/schema";

type QuizState = 'welcome' | 'quiz' | 'results';

export default function Quiz() {
  const [state, setState] = useState<QuizState>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [totalScore, setTotalScore] = useState(0);

  // Load saved progress on mount
  useEffect(() => {
    const savedProgress = loadQuizProgress();
    if (savedProgress) {
      setCurrentQuestionIndex(savedProgress.currentQuestionIndex);
      setAnswers(savedProgress.answers);
      setTotalScore(savedProgress.totalScore);
      if (savedProgress.currentQuestionIndex > 0) {
        setState('quiz');
      }
    }
  }, []);

  // Save progress whenever state changes
  useEffect(() => {
    if (state === 'quiz') {
      const progress: QuizProgress = {
        currentQuestionIndex,
        answers,
        totalScore
      };
      saveQuizProgress(progress);
    }
  }, [state, currentQuestionIndex, answers, totalScore]);

  const handleStartQuiz = () => {
    setState('quiz');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setTotalScore(0);
    clearQuizProgress();
  };

  const handleAnswerSelect = (value: number) => {
    const newAnswers = [...answers];
    const oldValue = newAnswers[currentQuestionIndex] || 0;
    newAnswers[currentQuestionIndex] = value;
    setAnswers(newAnswers);
    setTotalScore(totalScore - oldValue + value);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleViewResults = () => {
    setState('results');
    clearQuizProgress();
  };

  const handleRetakeQuiz = () => {
    setState('welcome');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setTotalScore(0);
    clearQuizProgress();
  };

  const personalityType = getPersonalityType(totalScore);

  switch (state) {
    case 'welcome':
      return <WelcomeScreen onStartQuiz={handleStartQuiz} />;
    
    case 'quiz':
      return (
        <QuizScreen
          currentQuestionIndex={currentQuestionIndex}
          answers={answers}
          onAnswerSelect={handleAnswerSelect}
          onPreviousQuestion={handlePreviousQuestion}
          onNextQuestion={handleNextQuestion}
          onViewResults={handleViewResults}
        />
      );
    
    case 'results':
      return (
        <ResultsScreen
          personalityType={personalityType}
          totalScore={totalScore}
          onRetakeQuiz={handleRetakeQuiz}
        />
      );
    
    default:
      return <WelcomeScreen onStartQuiz={handleStartQuiz} />;
  }
}
