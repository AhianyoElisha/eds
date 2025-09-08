import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Truck from "@/components/Truck";
import VisionMission from "@/components/VisionMission";

export default function Home() {
  return (
    <>
      <Hero />
      <VisionMission />
      <Truck />
      <Guide />
      <Features />
      <GetApp />
    </>
  )
}
