"use client";
import gsap from "gsap";
import { useEffect } from "react";

export default function Gsap() {
  useEffect(() => {
    gsap.to("option", {
        y:20,
        stagger: 1
    })
  }, []);

  return null;
}
