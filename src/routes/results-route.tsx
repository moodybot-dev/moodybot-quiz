import { useLocation } from "wouter";
import { ResultsScreen } from "../components/results-screen";

export default function ResultsRoute() {
  const [, navigate] = useLocation();

  return (
    <ResultsScreen
      personalityType="Spiral Thinker"
      totalScore={42}
      onRetakeQuiz={() => navigate("/")}
    />
  );
}
