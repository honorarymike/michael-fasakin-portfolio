import { useState } from "react";

const experience = [
  {
    period: "Spring 2026",
    role: "Stacks Maintenance Assistant",
    place: "Memorial University of Newfoundland",
    detail:
      "Keeping library spaces organized, dependable, and ready for the people who use them.",
    tag: "Work",
  },
  {
    period: "2025 — now",
    role: "Volunteer Worker",
    place: "CMFI NL Church · Teens Department",
    detail:
      "Supporting teen events, outreach programs, community service, and choir ministry.",
    tag: "Community",
  },
  {
    period: "2024 — 2025",
    role: "Head Boy",
    place: "Lead British Int’l School · Ibadan, Nigeria",
    detail:
      "Representing students, coordinating activities, and working with staff to build an organized school community.",
    tag: "Leadership",
  },
  {
    period: "2021 — 2025",
    role: "Orchestra Section Leader",
    place: "Lead British Int’l School · Ibadan, Nigeria",
    detail:
      "Leading rehearsals and performances with a group, while playing saxophone, keyboard, violin, lead guitar, and viola.",
    tag: "Creative",
  },
];

const skills = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "HTML",
  "CSS",
  "Tailwind CSS",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="amateur min-h-screen overflow-hidden">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#top" className="font-display text-lg font-bold text-ink">
          MF<span className="text-coral">.</span>
        </a>
        <button
          className="text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          {menuOpen ? "x" : "="}
        </button>
        <div
          className={`${menuOpen ? "block" : "hidden"} absolute left-0 top-18 z-10 w-full bg-paper px-6 py-5 md:static md:block md:w-auto md:p-0`}
        >
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="nav-link mr-6 block py-2 md:inline"
          >
            About
          </a>
          <a
            href="#work"
            onClick={() => setMenuOpen(false)}
            className="nav-link mr-6 block py-2 md:inline"
          >
            Work
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="nav-link block py-2 md:inline"
          >
            Contact
          </a>
        </div>
        <a
          href="mailto:michaelfasakin09@gmail.com"
          className="hidden text-sm font-bold md:block"
        >
          Let's talk -&gt;
        </a>
      </nav>

      <section
        id="top"
        className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-14 md:grid-cols-2 md:items-center md:gap-16 lg:px-10 lg:pb-36 lg:pt-24"
      >
        <div>
          <p className="eyebrow">
            Computer science student - Newfoundland, Canada
          </p>
          <h1 className="mt-6 text-6xl font-bold leading-tight text-ink md:text-7xl">
            I build with
            <br />
            <span className="text-coral">curiosity.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
            I'm Michael Fasakin, a dependable developer in progress with a love
            for turning ideas into thoughtful, useful digital experiences.
          </p>
          <a
            href="#work"
            className="mt-8 inline-block rounded bg-ink px-5 py-3 font-bold text-paper hover:bg-coral"
          >
            See selected work -&gt;
          </a>
        </div>
        <div className="border-l-4 border-coral pl-6">
          <img
            src="/IMG_20260904_165715364_HDR.jpg"
            alt="Michael Fasakin"
            className="h-auto w-52 rounded border-4 border-gray-300 object-contain"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink/60">
            Currently studying Computer Science at Memorial University of
            Newfoundland.
          </p>
          <p className="mt-2 text-sm text-ink/50">
            Expected graduation: 2029 or 2030.
          </p>
        </div>
      </section>

      <div className="border-y border-ink/10 bg-sage py-4">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-8 gap-y-2 px-6 text-sm font-semibold text-ink/70 lg:px-10">
          {skills.map((skill) => (
            <span key={skill} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" />
              {skill}
            </span>
          ))}
        </div>
      </div>

      <section
        id="about"
        className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-36"
      >
        <div>
          <p className="eyebrow">01 / About me</p>
          <h2 className="font-display mt-5 max-w-sm text-5xl font-bold leading-[.95] tracking-[-0.06em]">
            Early days.
            <br />
            <span className="text-coral">Big intent.</span>
          </h2>
        </div>
        <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-ink/70">
          <p>
            I’m a second-year Computer Science student who enjoys the satisfying
            parts of making software: finding the shape of a problem, debugging
            patiently, and making the final experience feel clear.
          </p>
          <p>
            Outside code, I’ve learned to lead through music, school
            communities, and volunteer work. Those experiences taught me how to
            listen, take responsibility, and keep showing up.
          </p>
          <div className="grid grid-cols-2 gap-5 border-t border-ink/15 pt-7 text-sm">
            <div>
              <strong className="font-display text-3xl text-ink">7+</strong>
              <p>technologies in my toolkit</p>
            </div>
            <div>
              <strong className="font-display text-3xl text-ink">5</strong>
              <p>instruments I play</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="bg-ink px-6 py-24 text-paper lg:px-10 lg:py-36"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-coral">02 / Selected work</p>
              <h2 className="font-display mt-5 text-5xl font-bold leading-none tracking-[-0.06em] md:text-7xl">
                Learning by
                <br />
                making.
              </h2>
            </div>
            <a
              href="https://github.com/honorarymike/100-days-of-Python-Coding"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-bold text-paper/70 hover:text-paper"
            >
              Open GitHub -&gt;
            </a>
          </div>
          <article className="mt-16 grid overflow-hidden border border-paper/20 bg-sage text-ink md:grid-cols-[.9fr_1.1fr]">
            <div className="relative flex min-h-70 flex-col justify-between overflow-hidden bg-coral p-7">
              <span className="font-display text-7xl font-bold tracking-[-0.08em] text-ink/15">
                100
              </span>
              <div>
                <p className="eyebrow text-ink/60">Python practice / 2025</p>
                <h3 className="font-display mt-3 text-4xl font-bold leading-none tracking-tighter">
                  100 Days of
                  <br />
                  Python Coding
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-10 p-7 md:p-10">
              <div>
                <p className="max-w-md text-xl leading-relaxed">
                  A daily collection of small programs, exercises, and
                  experiments built to strengthen my programming fundamentals.
                </p>
                <ul className="mt-8 space-y-3 text-sm text-ink/65">
                  <li>↳ Loops, conditions, and functions</li>
                  <li>↳ Debugging and improving efficiency</li>
                  <li>↳ Building consistency through practice</li>
                </ul>
              </div>
              <a
                className="inline-flex w-fit items-center gap-2 border-b border-ink pb-1 text-sm font-bold"
                href="https://github.com/honorarymike/100-days-of-Python-Coding"
                target="_blank"
                rel="noreferrer"
              >
                View the repository -&gt;
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">03 / Experience</p>
            <h2 className="font-display mt-5 text-5xl font-bold leading-[.95] tracking-[-0.06em]">
              People
              <br />
              first.
            </h2>
          </div>
          <div className="divide-y divide-ink/15">
            {experience.map((item) => (
              <div
                key={item.role}
                className="grid gap-4 py-7 md:grid-cols-[120px_1fr_auto] md:gap-8"
              >
                <p className="text-sm text-ink/50">{item.period}</p>
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-coral">
                    {item.place}
                  </p>
                  <p className="mt-3 max-w-xl leading-relaxed text-ink/65">
                    {item.detail}
                  </p>
                </div>
                <span className="h-fit w-fit border border-ink/15 px-3 py-1 text-xs font-semibold uppercase tracking-[.12em] text-ink/50">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-coral px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-12 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-ink/60">04 / Get in touch</p>
            <h2 className="font-display mt-5 max-w-xl text-6xl font-bold leading-[.88] tracking-[-0.07em] md:text-8xl">
              Let’s make
              <br />
              something.
            </h2>
          </div>
          <div className="md:text-right">
            <p className="mb-5 text-sm text-ink/65">
              Open to part-time opportunities
              <br />
              and good conversations.
            </p>
            <a
              href="mailto:michaelfasakin09@gmail.com"
              className="font-display text-xl font-bold underline decoration-1 underline-offset-4"
            >
              michaelfasakin09@gmail.com
            </a>
            <div className="mt-5 flex gap-4 md:justify-end">
              <a
                aria-label="GitHub"
                href="https://github.com/honorarymike"
                target="_blank"
                rel="noreferrer"
                className="icon-link"
              >
                GitHub -&gt;
              </a>
              <a
                aria-label="Send email"
                href="mailto:michaelfasakin09@gmail.com"
                className="icon-link"
              >
                Email -&gt;
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-20 flex max-w-6xl justify-between border-t border-ink/20 pt-5 text-xs text-ink/55">
          <span>Michael Fasakin © 2026</span>
          <span>Built with curiosity.</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
