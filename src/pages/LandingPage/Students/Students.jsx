import Heropage from "./Heropage";
import Ctasection from "./Ctasection";
import Networksection from "./Networksection";
// import Footer from "./Students/Footer";
import Pricingsection from "./Pricingsection";
import Appsection from "./Appsection";
import Finalctasection from "./Finalctasection";
import Footerfull from "./Footerfull";
import Featuredin from "./Featuredin"
// import Navbar from "./Students/Navbar"

export default function Students() {
  return (
    <>
      {/* <Navbar/> */}
      <Heropage />
      <Featuredin/>
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