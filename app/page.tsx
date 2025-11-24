import Image from "next/image";
import LandingPage from "../components/landingPage";
import Programs from '../components/programs'
import Volunteer from '../components/volunteer'
import Footer from "@/components/footer";


export default function Home() {
  return (
    <div>
      <LandingPage/>
      <Programs/>
      <Volunteer/>
      <Footer/>
    </div>
  );
}
