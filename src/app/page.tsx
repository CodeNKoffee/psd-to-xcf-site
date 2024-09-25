"use client"

import Navigation from "@/shared/Navigation";
import { Suspense, useEffect } from "react";
import Footer from "@/shared/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";

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
      <Navigation />
      <main>
        <Hero />
      </main>
      <Footer />
    </Suspense>
  );
}