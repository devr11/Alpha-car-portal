"use client";
import "./BlobButton.css";

export default function BlobButton({ label }) {
  return (
    <div className="buttons">
      <button className="blob-btn">
        {label}
        <span className="blob-btn__inner">
          <span className="blob-btn__blobs">
            <span className="blob-btn__blob" />
            <span className="blob-btn__blob" />
            <span className="blob-btn__blob" />
            <span className="blob-btn__blob" />
          </span>
        </span>
      </button>
    </div>
  );
}
