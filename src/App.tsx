// src/App.tsx
 import { Route, Switch, useLocation } from "wouter";
 import { QueryClientProvider } from "@tanstack/react-query";
 import { queryClient } from "./lib/queryClient";
 import { Toaster } from "./components/ui/toaster";
 import { TooltipProvider } from "./components/ui/tooltip";
 import Header from "./components/Header";

 import Home from "./pages/index";
 import NotFound from "./pages/not-found";
 import McuVillainWelcome from "./pages/quiz/mcu-villain/index";
import McuVillainQuizPage from "./pages/quiz/mcu-villain"; 
import EmotionalWeaponWelcome from "@/pages/emotional-weapon/index";
    import EmotionalWeaponQuizPage from "./pages/emotional-weapon/start";

 function App() {
   const [, navigate] = useLocation();

   return (
     <QueryClientProvider client={queryClient}>
       <TooltipProvider>
         <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-neutral-800 flex flex-col">
           <Header />

           <div className="flex-1 flex flex-col items-center justify-center">
             <Switch>
               <Route path="/" component={Home} />

+             <Route path="/emotional-weapon" component={EmotionalWeaponWelcome} />
              <Route path="/emotional-weapon/index" component={EmotionalWeaponWelcome} />
+              <Route path="/emotional-weapon/start" component={EmotionalWeaponQuizPage} />

               {/* MCU Villain */}
               <Route path="/quiz/mcu-villain" component={McuVillainWelcome} />
                <Route path="/quiz/mcu-villain/start" component={McuVillainQuizPage} />

               {/* fallback etc. */}
               <Route component={NotFound} />
             </Switch>
           </div>

           <Toaster />
         </main>
       </TooltipProvider>
     </QueryClientProvider>
   );
 }

 export default App;
