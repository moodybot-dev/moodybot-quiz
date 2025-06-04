import { Route, Switch, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { WelcomeScreen } from "./components/welcome-screen";
import { ResultsScreen } from "./components/results-screen";
import QuizScreen from "./pages/quiz";
import NotFound from "./pages/not-found";

function App() {
  const [, navigate] = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-neutral-800 flex flex-col items-center justify-center">
          <Switch>
            <Route path="/" component={() => (
              <WelcomeScreen onStartQuiz={() => navigate("/quiz")} />
            )} />
            <Route path="/quiz" component={QuizScreen} />
            <Route path="/results" component={() => (
              <ResultsScreen
                personalityType="Spiral Thinker"
                totalScore={42}
                onRetakeQuiz={() => navigate("/")}
              />
            )} />
            <Route component={NotFound} />
          </Switch>

          <Toaster />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
