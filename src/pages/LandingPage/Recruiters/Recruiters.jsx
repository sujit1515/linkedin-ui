import Hireverifyhero from "./Hireverifyhero";
import Trustedgiantsstrip from "./Trustedgiantsstrip";
import Hiringlifecyclesection from "./Hiringlifecyclesection";
import Backgroundverificationsection from "./Backgroundverificationsection";
import Hireverifyctafooter from "./Hireverifyctafooter";
import Footerfull from "../Students/Footerfull";

export default function HireVerifyApp() {
  return (
    <div className="bg-[#080d1a]">
      {/* 1. Navbar + Hero */}
      <Hireverifyhero />

      {/* 2. Trusted by Global Giants — scrolling marquee */}
      <Trustedgiantsstrip />

      {/* 3. The Complete Hiring Lifecycle */}
      <Hiringlifecyclesection />

      {/* 4. Comprehensive Background Verification */}
      <Backgroundverificationsection />

      {/* 5. CTA + Footer */}
      <Hireverifyctafooter />  
      <Footerfull/>
    </div>
  );
}