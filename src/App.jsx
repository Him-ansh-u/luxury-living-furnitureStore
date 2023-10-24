import { Navbar } from "./Components/Navbar";
import { Ads } from "./Components/Ads";
import { BestSeller } from "./Components/BestSeller";
import { Footer } from "./Components/Footer";

import { AboutSection } from "./Components/AboutSection";
import { NewArrival } from "./Components/NewArrival";
import { ReviewSection } from "./Components/ReviewSection";
function App() {
  return (
    <div>
      <Navbar />
      <div className='content'>
        <Ads />
        <AboutSection />
        <BestSeller />
        <NewArrival />
        <ReviewSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
