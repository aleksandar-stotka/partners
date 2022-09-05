import type { NextPage } from "next";

import HomePage from "./home/HomePage";
import "tailwindcss/tailwind.css";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
const Home: NextPage = () => {
  return (
    <div className="h-screen black-bg  ">
      <Navbar />
      <HomePage />

      <Footer />
    </div>
  );
};

export default Home;
