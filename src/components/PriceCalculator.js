"use client";
import { useState } from "react";

export default function PriceCalculator({ basePrice }) {
  const [invites, setInvites] = useState(50);
  const [days, setDays] = useState(1);

  const total = invites * days * 10;

  return (
    <div className="border rounded p-4">
      <h2 className="text-xl font-semibold mb-3">Price Calculator</h2>

      <label className="block mb-2">
        Number of Invites
        <input
          type="range"
          min="10"
          max="500"
          value={invites}
          onChange={(e) => setInvites(e.target.value)}
          className="w-full"
        />
        {invites}
      </label>

      <label className="block mb-2">
        Duration (days)
        <input
          type="range"
          min="1"
          max="30"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          className="w-full"
        />
        {days}
      </label>

      <p className="mt-4 font-bold">
        Estimated Price: ₹{total}
      </p>
    </div>
  );
}
