import Topbar from "../../components/topbar/Topbar";
import Slider from "../../components/Slider";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Topbar />

      <Slider />
      <div className="homeContainer">
        <Footer />
      </div>
    </>
  );
}
