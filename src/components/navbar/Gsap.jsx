"use client";
import gsap from "gsap";
import { useEffect } from "react";

export default function Gsap() {
  useEffect(() => {
    gsap.to("button", {
        x:100
    })
  }, []);

  return null;
}
