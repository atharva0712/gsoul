import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Features from "./components/Features";
import Hero from "./components/Hero";
import HowToUse from "./components/HowToUse";
import ScheduleForm from "./components/ScheduleForm";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Features />
        <HowToUse />
        <ScheduleForm />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
