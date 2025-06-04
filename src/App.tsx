import { Route, Switch, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { WelcomeScreen } from "./components/welcome-screen";
import QuizScreen from "./pages/quiz";
import { ResultsScreen } from "./components/results-screen";
import NotFound from "./pages/not-found";

function App() {
  const [, navigate] = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <main className="min-h-screen bg-gradient-to-b from-purple-600 via-pink-500 to-white flex flex-col items-center justify-center">
          <Switch>
            <Route path="/">
              {() => (
                <WelcomeScreen onStartQuiz={() => navigate("/quiz")} />
              )}
            </Route>

            <Route path="/quiz">
              {() => <QuizScreen />}
            </Route>

            <Route path="/results">
              {() => (
                <ResultsScreen
                  personalityType="Spiral Thinker"
                  totalScore={42}
                  onRetakeQuiz={() => navigate("/")}
                />
              )}
            </Route>

            <Route>
              {() => <NotFound />}
            </Route>
          </Switch>

          <Toaster />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
