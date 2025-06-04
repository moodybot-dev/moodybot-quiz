import { Route, Switch } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { WelcomeScreen } from "./components/welcome-screen";
import QuizScreen from "./pages/quiz";
import { ResultsScreen } from "./components/results-screen";
import NotFound from "./pages/not-found";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <main className="flex min-h-screen flex-col items-center justify-center">
          <Switch>
            <Route path="/">
  {() => (
    <WelcomeScreen onStartQuiz={() => console.log("Start clicked")} />
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
      onRetakeQuiz={() => console.log("Retake clicked")}
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
