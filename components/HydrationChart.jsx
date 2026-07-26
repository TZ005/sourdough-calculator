"use client";

const LEVELS = [
  { range: "50-60%", color: "#E8C9A0", name: "Stiff / Bagels", diff: "easy", emoji: "🟢", desc: "Tight dough, easiest to shape" },
  { range: "60-70%", color: "#E5B98A", name: "Standard Sandwich", diff: "easy", emoji: "🟢", desc: "Soft, even crumb. Great for daily loaves" },
  { range: "70-75%", color: "#D9A574", name: "Beginner Classic", diff: "medium", emoji: "🟡", desc: "Balanced hydration, easy to handle" },
  { range: "75-80%", color: "#C58F5E", name: "Artisan Country", diff: "medium", emoji: "🟡", desc: "Open crumb, rustic texture" },
  { range: "80-90%", color: "#B07A48", name: "Open Crumb", diff: "hard", emoji: "🔴", desc: "Large holes, requires skill" },
  { range: "90-100%", color: "#8B5A2B", name: "Ciabatta / Focaccia", diff: "hard", emoji: "🔴", desc: "Very wet, sticky. Advanced technique" },
];

const DIFF_LABEL = { easy: "Easy", medium: "Medium", hard: "Hard" };
const DIFF_STYLE = {
  easy: "bg-green-100 text-green-800",
  medium: "bg-amber-100 text-amber-800",
  hard: "bg-red-100 text-red-800",
};

export default function HydrationChart() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-3 text-brand-dark">
          Sourdough Hydration Chart (50%-100%)
        </h2>
        <p className="text-center text-[#5C4033] max-w-2xl mx-auto mb-10 text-lg">
          Different hydration levels produce very different breads. Here is a quick guide to choose the right one for you:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {LEVELS.map((level) => (
            <div
              key={level.range}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-[#F0E8DA]"
            >
              <div
                className="py-6 px-4 text-white text-center font-bold text-xl"
                style={{ backgroundColor: level.color }}
              >
                {level.range}
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-lg text-brand-dark leading-tight">{level.name}</h3>
                  <span className={"text-xs px-2 py-1 rounded-full font-semibold whitespace-nowrap flex-shrink-0 " + DIFF_STYLE[level.diff]}>
                    {level.emoji} {DIFF_LABEL[level.diff]}
                  </span>
                </div>
                <p className="text-sm text-[#5C4033] leading-relaxed">{level.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
