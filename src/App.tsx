import { Route, Switch, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { WelcomeRoute } from "./routes/welcome-route";
import ResultsRoute from "./routes/results-route";
import QuizScreen from "./pages/quiz";
import NotFound from "./pages/not-found";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-neutral-800 flex flex-col items-center justify-center">
          <Switch>
            <Route path="/" component={WelcomeRoute} />
            <Route path="/quiz" component={QuizScreen} />
            <Route path="/results" component={ResultsRoute} />
            <Route component={NotFound} />
          </Switch>

          <Toaster />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
