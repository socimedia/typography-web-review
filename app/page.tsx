"use client";

import { useState } from "react";

export default function Home() {
  const weights = [
    { weight: 300, label: "Light" },
    { weight: 400, label: "Regular" },
    { weight: 500, label: "Medium" },
    { weight: 600, label: "Semibold" },
    { weight: 700, label: "Bold" },
  ];

  const sizes = [
    { size: "text-sm", label: "Small (14px)" },
    { size: "text-base", label: "Base (16px)" },
    { size: "text-lg", label: "Large (18px)" },
    { size: "text-xl", label: "XL (20px)" },
    { size: "text-2xl", label: "2XL (24px)" },
    { size: "text-3xl", label: "3XL (30px)" },
  ];

  const [selectedSizes, setSelectedSizes] = useState(["text-base", "text-2xl"]);
  const [sampleText, setSampleText] = useState("The quick brown fox");
  const activeSizeLabels = sizes
    .filter((item) => selectedSizes.includes(item.size))
    .map((item) => item.label)
    .join(", ");

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((item) => item !== size) : [...prev, size],
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black p-8 font-sans">
      <main className="w-full max-w-5xl">
        <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">
          IBM Plex Sans Font Tests
        </h1>

        <section className="mb-12 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5">
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5">
              <div className="flex items-center justify-between text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-3">
                <span>Alphabet sample</span>
                <span className="rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 px-2.5 py-1.5 text-xs uppercase tracking-[0.2em]">
                  3XL preview
                </span>
              </div>
              <div className="text-black dark:text-white">
                <div className="text-3xl font-medium leading-snug">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </div>
                <div className="text-3xl font-medium leading-snug mt-1">
                  abcdefghijklmnopqrstuvwxyz
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5">
              <div className="flex items-center justify-between text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-3">
                <span className="rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 px-2.5 py-1.5 text-xs uppercase tracking-[0.2em]">
                  Controls
                </span>
              </div>
              <div className="flex flex-wrap gap-1 mb-3">
                {sizes.map(({ size, label }) => (
                  <label
                    key={size}
                    className="flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm text-black dark:text-white transition hover:border-sky-500 dark:hover:border-sky-400 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedSizes.includes(size)}
                      onChange={() => toggleSize(size)}
                      className="h-4 w-4 rounded accent-sky-600"
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <label className="flex flex-col gap-2 text-zinc-700 dark:text-zinc-300">
                  <span className="text-xs uppercase tracking-[0.2em]">Sample text</span>
                  <input
                    value={sampleText}
                    onChange={(event) => setSampleText(event.target.value)}
                    className="w-full rounded border border-zinc-300 bg-white px-3 py-2 text-sm text-black outline-none transition focus:border-sky-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                  />
                </label>
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-500 mt-3">
                Upper sample stays at 3XL; the checkbox list controls the examples below.
              </div>
            </div>
          </div>
        </section>

        <div className="space-y-12">
          {weights.map(({ weight, label }) => (
            <div key={weight} className="space-y-4">
              <div className="text-sm font-medium text-zinc-600 dark:text-zinc-400 border-b border-zinc-300 dark:border-zinc-700 pb-2">
                {label} ({weight})
              </div>

              <div className="space-y-3">
                {sizes
                  .filter((item) => selectedSizes.includes(item.size))
                  .map(({ size, label: sizeLabel }) => (
                    <div key={sizeLabel} className="space-y-1">
                      <div className="text-xs text-zinc-500 dark:text-zinc-500">
                        {sizeLabel}
                      </div>
                      <div className="flex gap-6">
                        <div
                          className={`${size} text-black dark:text-white p-3 bg-white dark:bg-zinc-900 rounded border border-zinc-200 dark:border-zinc-800 flex-1`}
                          style={{ fontWeight: weight }}
                        >
                          The quick brown fox
                        </div>
                        <div
                          className={`${size} text-black dark:text-white p-3 bg-white dark:bg-zinc-900 rounded border border-zinc-200 dark:border-zinc-800 flex-1 uppercase`}
                          style={{ fontWeight: weight }}
                        >
                          The quick brown fox
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
