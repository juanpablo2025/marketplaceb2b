import Topbar from "../../components/topbar/Topbar";

import Footer from "../../components/Footer";

import Products from "../../components/Products";
import Categories from "../../components/Categories";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Categories />
        <Products />
        <Footer />
      </div>
    </>
  );
}
