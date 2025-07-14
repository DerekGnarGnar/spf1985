'use client';

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer"
import Video from "@/components/Video"
import react from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';





export default function Home() {
  return (
    <>
    <Hero />
    <Features />
    <Video />
    
    <Footer />

    </>
    
  );
}
