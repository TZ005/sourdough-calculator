const LEVELS = [
  { range: "50–60%", color: "#E8C9A0", name: "Stiff / Bagels", desc: "Tight crumb, easy to shape" },
  { range: "60–70%", color: "#E5B98A", name: "Standard Sandwich", desc: "Soft, even crumb" },
  { range: "70–75%", color: "#D9A574", name: "Beginner Classic", desc: "Balanced, easy to handle" },
  { range: "75–80%", color: "#C58F5E", name: "Artisan Country", desc: "Open crumb, rustic" },
  { range: "80–90%", color: "#B07A48", name: "Open Crumb", desc: "Large holes, requires skill" },
  { range: "90–100%", color: "#8B5A2B", name: "Ciabatta / Focaccia", desc: "Very wet, sticky" },
];

export default function HydrationChart() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center mb-3">Sourdough Hydration Chart (50%–100%)</h2>
        <p className="text-center text-[#5C4033] max-w-2xl mx-auto mb-10">
          Different hydration levels produce very different breads. Here is a quick guide:
        </p>

        <div className="max-w-3xl mx-auto">
          {LEVELS.map((level) => (
            <div
              key={level.range}
              className="grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] gap-5 items-center py-3.5 border-b border-[#F0E8DA] last:border-b-0"
            >
              <div
                className="py-3 px-3 text-white font-bold text-center rounded-md text-base"
                style={{ backgroundColor: level.color }}
              >
                {level.range}
              </div>
              <div className="text-brand-dark">
                <strong>{level.name}</strong> · {level.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
