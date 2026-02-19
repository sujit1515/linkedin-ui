import Heropage from "./Heropage";
import Ctasection from "./Ctasection";
import Networksection from "./Networksection";
// import Footer from "./Students/Footer";
import Pricingsection from "./Pricingsection";
import Appsection from "./Appsection";
import Finalctasection from "./Finalctasection";
import Footerfull from "./Footerfull";
// import Navbar from "./Students/Navbar"

export default function Students() {
  return (
    <>
      {/* <Navbar/> */}
      <Heropage />
      <Networksection />
      <Ctasection />
      <Pricingsection/>
      <Appsection/>
      <Finalctasection/>
      <Footerfull/>
      {/* <Footer /> */}
    </>
  );
}