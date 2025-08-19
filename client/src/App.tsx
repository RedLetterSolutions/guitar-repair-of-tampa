import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AlertBar from "@/components/ui/alert-bar";
import Home from "@/pages/Home";
import GuitarRepairs from "@/pages/GuitarRepairs";
import CustomGuitars from "@/pages/CustomGuitars";
import About from "@/pages/About";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Directions from "@/pages/Directions";
import Suppliers from "@/pages/Suppliers";
import Quote from "@/pages/Quote";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <AlertBar />
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/guitar-repairs" component={GuitarRepairs} />
          <Route path="/custom-guitars" component={CustomGuitars} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="/directions" component={Directions} />
          <Route path="/suppliers" component={Suppliers} />
          <Route path="/quote" component={Quote} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
