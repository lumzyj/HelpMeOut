import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Homepage from "./pages/Homepage";
import VideoRecorded from "./pages/VideoRecorded.jsx";
import Profile from "./pages/Profile.jsx";
import ProfileVideoDetails from "./pages/ProfileVideoDetails.jsx";
import Signup from "./pages/Signup.jsx";
// import Features from "./components/Features.jsx";
// import HowItWorks from "./components/HowItWorks.jsx";


export default function App() {
  return (
    <main className="relative">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/videorecorded" element={<VideoRecorded/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/profilevideodetails" element={<ProfileVideoDetails/>} />
      <Route path="/signup" element={<Signup/>} />
      {/* <Route path="/features" element={<Features/>} />
      <Route path="/howitworks" element={<HowItWorks/>} /> */}
      </Routes>
      <Footer/>
    </main>
  )
}
