// import ChatPage from "@/components/pages/ChatPage";
import { Hero } from "@/components/common/Hero";
import { NavBar } from "@/components/common/Navbar";
import STTComponent from "@/components/common/STTComponent";

const LandingPage = () => {

  return (
    <>
      <NavBar/>
      <main id="main" className="min-h-dvh ">
        <Hero />
        <STTComponent />
      </main>
    </>
  )
}

export default LandingPage;