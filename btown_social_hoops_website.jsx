export default function BtownSocialHoopsWebsite() {
  const quickFacts = [
    "Starts after April 21",
    "Wednesday nights",
    "Thursday backup",
    "$20 per player",
    "6-week season",
    "Outdoor first",
  ];

  const highlights = [
    {
      title: "Low-cost league",
      text: "$20 covers the full 6-week session.",
    },
    {
      title: "Balanced teams",
      text: "Players sign up individually and teams are built from self-ratings.",
    },
    {
      title: "7-player max rosters",
      text: "Smaller teams mean better run and more playing time.",
    },
    {
      title: "Rain backup",
      text: "Thursday and indoor options are part of the plan when needed.",
    },
  ];

  const format = [
    "4-week regular season",
    "2-week playoffs",
    "Full-court 5v5",
    "Two 20-minute halves",
    "Running clock",
    "Self-officiated",
  ];

  const rules = [
    "Final 4 minutes stop on dead balls",
    "No full-court press",
    "No zone defense",
    "Contested calls: shoot for it",
    "Everyone sits once before someone sits twice",
    "League marshal keeps order and time",
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <section className="border-b border-black">
        <div className="mx-auto max-w-5xl px-5 py-10 sm:px-6 sm:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-black px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]">
              Burlington, Vermont
            </div>
            <h1 className="mt-5 text-4xl font-black uppercase tracking-tight sm:text-6xl">
              Btown Basketball League
            </h1>
            <div className="mt-3 h-1 w-24 bg-orange-500" />
            <div className="mt-5 max-w-2xl space-y-3 text-base leading-7 text-neutral-700 sm:text-lg">
              <p>
                A simple, low-cost basketball league built around Wednesday nights, balanced teams, and good full-court runs.
              </p>
              <p>
                This is a relatively serious pickup league for players who already know how to play organized full-court basketball.
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#signup"
                className="rounded-xl bg-black px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-white"
              >
                Join the League
              </a>
              <a
                href="#details"
                className="rounded-xl border border-black px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-black"
              >
                League Details
              </a>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {quickFacts.map((fact) => (
              <div
                key={fact}
                className="rounded-xl border border-black px-3 py-3 text-center text-xs font-semibold uppercase tracking-wide sm:text-sm"
              >
                {fact}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="details" className="mx-auto max-w-5xl px-5 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-2xl border border-black p-5">
              <h2 className="text-lg font-black uppercase tracking-wide">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-black bg-black text-white">
        <div className="mx-auto max-w-5xl px-5 py-10 sm:px-6 sm:py-14">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">Format</p>
              <div className="mt-4 space-y-3">
                {format.map((item) => (
                  <div key={item} className="border-b border-white/20 pb-3 text-sm font-medium uppercase tracking-wide">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">Rules</p>
              <div className="mt-4 space-y-3">
                {rules.map((item) => (
                  <div key={item} className="border-b border-white/20 pb-3 text-sm font-medium uppercase tracking-wide">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="signup" className="mx-auto max-w-5xl px-5 py-10 sm:px-6 sm:py-14">
        <div className="rounded-2xl border-2 border-black p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">Player Signup</p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Want In?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-700 sm:text-base">
            Fill out the signup form to register, rate your skill level, and request to be paired with a friend if you want. This league is not designed for total beginners still learning the basic rules and flow of full-court basketball.
          </p>

          <div className="mt-6 rounded-xl border border-dashed border-black p-5">
            <div className="text-sm font-bold uppercase tracking-wide">Google Form goes here</div>
            <p className="mt-2 text-sm leading-6 text-neutral-700">
              Replace this with your form link or embed when you are ready.
            </p>
            <a
              href="#"
              className="mt-5 inline-flex rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold uppercase tracking-wide text-black"
            >
              Open Signup Form
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-black px-5 py-6 sm:px-6">
        <div className="mx-auto max-w-5xl text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          Btown Basketball League
        </div>
      </footer>
    </div>
  );
}
