"use client";
import { useState, useRef } from "react";


export default function ImageCarousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const thumbRef = useRef(null);

  const scrollLeft = () => {
    thumbRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    thumbRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="space-y-1.5">
      {/* MAIN IMAGE */}
      <div className="relative">
        <img
          src={images[activeIndex]}
          alt="Car"
          className="w-full h-[360px] object-cover rounded-lg"
        />

        {/* Left Arrow */}
        <button
          onClick={() =>
            setActiveIndex(
              activeIndex === 0 ? images.length - 1 : activeIndex - 1
            )
          }
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 text-black p-2 rounded-full"
        >
          ◀
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => setActiveIndex((activeIndex + 1) % images.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 text-black p-2 rounded-full"
        >
          ▶
        </button>

        <p className="absolute bottom-3 right-3 bg-black/70 text-white text-sm px-2 py-1 rounded">
          {activeIndex + 1}/{images.length}
        </p>
      </div>

      {/* <div className="flex items-center gap-2 mb-2">
  <button
    onClick={scrollLeft}
    className="bg-white/80 text-black px-2 py-1 rounded"
  >
    ◀
  </button>

  <button
    onClick={scrollRight}
    className="bg-white/80 text-black px-2 py-1 rounded"
  >
    ▶
  </button>
</div> */}


      {/* THUMBNAILS */}

      <div className=" relative mt-2">
        <div className="flex items-center gap-2 mb-2">
          <button onClick={scrollLeft} className="absolute z-10 bg-white/80 rounded-full p-0.5 left-3 top-2/3 translate-y-8">◀</button>
          <button onClick={scrollRight} className="absolute z-10 bg-white/80 rounded-full p-0.5 right-3 top-1/2 translate-y-8">▶</button>
        </div>
      </div>

      <div className="relative">
        <div ref={thumbRef} className="flex gap-3 overflow-hidden overflow-y-hidden scrollbar-hide pb-2">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Thumbnail"
              onClick={() => setActiveIndex(index)}
              className={`h-20 w-28 flex-shrink-0 object-cover rounded cursor-pointer border-2 transition
          ${
            activeIndex === index
              ? "border-purple-500"
              : "border-transparent opacity-60 hover:opacity-100"
          }`}
            />
          ))}
        </div>
      </div>
      
    </div>
  );
}
