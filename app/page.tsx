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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black p-8 font-sans">
      <main className="w-full max-w-5xl">
        <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">
          IBM Plex Sans Font Tests
        </h1>

        <section className="mb-12 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between text-sm font-medium text-zinc-600 dark:text-zinc-400">
              <span>Alphabet sample</span>
              <span className="rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 px-3 py-1 text-xs uppercase tracking-[0.2em]">
                Upper &amp; lower case
              </span>
            </div>
            <div className="text-xl font-medium text-black dark:text-white leading-snug">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </div>
            <div className="text-xl font-medium text-black dark:text-white leading-snug">
              abcdefghijklmnopqrstuvwxyz
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
                {sizes.map(({ size, label: sizeLabel }) => (
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
