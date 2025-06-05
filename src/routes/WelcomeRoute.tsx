import { useLocation } from "wouter";
import { WelcomeScreen } from "../components/welcome-screen";

export function WelcomeRoute() {
  const [, navigate] = useLocation();

  return <WelcomeScreen onStartQuiz={() => navigate("/quiz")} />;
}
