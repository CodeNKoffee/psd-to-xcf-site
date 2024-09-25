"use client"

import Navigation from "@/shared/Navigation";
import { Suspense, useEffect } from "react";
import Footer from "@/shared/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import FileConversionImg from "../app/assets/photoshop-gimp.jpg";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      offset: 200,
      easing: 'ease-out',
    });
  }, []);

  return (
    <Suspense>
      <div className="relative min-h-screen">
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat z-[-10] blur-md opacity-50"
          style={{ backgroundImage: `url(${FileConversionImg.src})` }}
        ></div>
        <Navigation />
        <main>
          <Hero />
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}