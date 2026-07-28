"use client";

import { useState, type ChangeEvent } from "react";

interface Preset {
  name: string;
  h: number;
}

const PRESETS: Preset[] = [
  { name: "Bagel (65%)", h: 65 },
  { name: "Sandwich (70%)", h: 70 },
  { name: "Classic (75%)", h: 75 },
  { name: "Country (80%)", h: 80 },
  { name: "Open Crumb (85%)", h: 85 },
  { name: "Ciabatta (100%)", h: 100 },
];

function formatGrams(n: number): string {
  if (n >= 1000) return (n / 1000).toFixed(2) + " kg";
  return n.toFixed(1) + " g";
}

export default function Calculator(): JSX.Element {
  const [flour, setFlour] = useState<number>(500);
  const [hydration, setHydration] = useState<number>(75);
  const [salt, setSalt] = useState<number>(2);
  const [starter, setStarter] = useState<number>(20);

  const water = flour * (hydration / 100);
  const saltGrams = flour * (salt / 100);
  const totalStarter = flour * (starter / 100);
  const starterFlour = totalStarter * 0.5;
  const starterWater = totalStarter * 0.5;
  const flourToAdd = flour - starterFlour;
  const waterToAdd = water - starterWater;
  const totalDough = flourToAdd + waterToAdd + saltGrams + totalStarter;

  const applyPreset = (h: number): void => {
    setHydration(h);
  };

  const onNumber = (setter: (n: number) => void) =>
    (e: ChangeEvent<HTMLInputElement>): void => setter(parseFloat(e.target.value) || 0);

  return (
    <div className="bg-white rounded-2xl shadow-lg shadow-brand-brown/10 p-8 max-w-3xl mx-auto">
      <h2 className="text-center text-[25px] mb-8">🥖 Calculate Your Recipe</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-7">
        <div className="flex flex-col">
          <label className="font-semibold mb-1.5 text-brand-dark">Flour Weight (g)</label>
          <input
            type="number"
            value={flour}
            onChange={onNumber(setFlour)}
            min="1"
            className="px-3.5 py-3 border-2 border-[#E8DDC8] rounded-lg text-base focus:outline-none focus:border-brand-brown"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1.5 text-brand-dark">Hydration (%)</label>
          <input
            type="number"
            value={hydration}
            onChange={onNumber(setHydration)}
            min="50"
            max="150"
            className="px-3.5 py-3 border-2 border-[#E8DDC8] rounded-lg text-base focus:outline-none focus:border-brand-brown"
          />
          <small className="text-brand-muted text-sm mt-1">Beginner: 70% · Classic: 75% · Open crumb: 85%</small>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1.5 text-brand-dark">Salt (%)</label>
          <input
            type="number"
            value={salt}
            onChange={onNumber(setSalt)}
            min="0"
            max="5"
            step="0.1"
            className="px-3.5 py-3 border-2 border-[#E8DDC8] rounded-lg text-base focus:outline-none focus:border-brand-brown"
          />
          <small className="text-brand-muted text-sm mt-1">Standard: 2%</small>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1.5 text-brand-dark">Starter (% of flour)</label>
          <input
            type="number"
            value={starter}
            onChange={onNumber(setStarter)}
            min="0"
            max="50"
            className="px-3.5 py-3 border-2 border-[#E8DDC8] rounded-lg text-base focus:outline-none focus:border-brand-brown"
          />
          <small className="text-brand-muted text-sm mt-1">Standard: 20%</small>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-[#E8DDC8]">
        <h3 className="text-center text-brand-brown text-[25px] mb-6">Your Recipe</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-3 px-4 py-3.5 bg-brand-cream rounded-lg">
            <span className="text-2xl">💧</span>
            <div>
              <div className="text-xs text-brand-muted font-medium">Water to Add</div>
              <div className="text-xl font-bold text-brand-dark">{formatGrams(waterToAdd)}</div>
              <div className="text-[10px] text-brand-muted mt-0.5">total {formatGrams(water)} incl. starter</div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-3.5 bg-brand-cream rounded-lg">
            <span className="text-2xl">🧂</span>
            <div>
              <div className="text-xs text-brand-muted font-medium">Salt</div>
              <div className="text-xl font-bold text-brand-dark">{formatGrams(saltGrams)}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-3.5 bg-brand-cream rounded-lg">
            <span className="text-2xl">🌾</span>
            <div>
              <div className="text-xs text-brand-muted font-medium">Flour to Add</div>
              <div className="text-xl font-bold text-brand-dark">{formatGrams(flourToAdd)}</div>
              <div className="text-[10px] text-brand-muted mt-0.5">excl. {formatGrams(starterFlour)} in starter</div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-3.5 bg-brand-cream rounded-lg">
            <span className="text-2xl">🫙</span>
            <div>
              <div className="text-xs text-brand-muted font-medium">Total Starter</div>
              <div className="text-xl font-bold text-brand-dark">{formatGrams(totalStarter)}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-3.5 bg-brand-tan rounded-lg">
            <span className="text-2xl">🥖</span>
            <div>
              <div className="text-xs text-brand-muted font-medium">Starter Flour</div>
              <div className="text-xl font-bold text-brand-dark">{formatGrams(starterFlour)}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-3.5 bg-brand-tan rounded-lg">
            <span className="text-2xl">🥛</span>
            <div>
              <div className="text-xs text-brand-muted font-medium">Starter Water</div>
              <div className="text-xl font-bold text-brand-dark">{formatGrams(starterWater)}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-3.5 bg-brand-brown text-white rounded-lg md:col-span-2">
            <div>
              <div className="text-xs text-white/80 font-medium">Total Dough Weight</div>
              <div className="text-xl font-bold">{formatGrams(totalDough)}</div>
            </div>
          </div>
        </div>

        <div className="text-center pt-4 border-t border-dashed border-[#E8DDC8]">
          <p className="text-brand-muted text-[25px] mb-3">Try a preset:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {PRESETS.map((p) => (
              <button
                key={p.h}
                onClick={() => applyPreset(p.h)}
                className="px-3.5 py-2 bg-white text-brand-brown border-[1.5px] border-brand-brown rounded-md text-sm font-medium hover:bg-brand-brown hover:text-white transition-colors"
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}