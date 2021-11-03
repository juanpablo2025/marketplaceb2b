import Navbar from "../../components/Navbar";


import Footer from "../../components/Footer";

import Products from "../../components/Products";
import Categories from "../../components/Categories";



export default function Home() {
  return (
    <>
      <Navbar />
      <div className="homeContainer">
        
        
        
        <Categories/>
        <Products/>
        <Footer/>
      </div>
    </>
  );
}

