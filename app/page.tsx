import BlogSection from "@/components/BlogSection/BlogSection";
import Header from "@/components/Header/Header";
import Project from "@/components/Project/Project";
import projects from "@/data/projects.json";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="flex flex-col max-w-screen-xl px-5 my-6 md:my-14 mx-auto">
        <h1>Hey-oh! I&apos;m Nikki Bright</h1>
        <div
          className="flex flex-col gap-10 lg:gap-16"
        >
          <section id="about">
            <div className="flex flex-col gap-3 max-w-xl md:text-xl">
              <p>I’m a Senior Frontend Engineer who specializes in building polished, high-performance user interfaces with Next.js and modern frontend tools. I care deeply about accessibility, performance, and design integrity, and I’m often brought in to lead complex UI work from early design through production.</p>
            </div>
          </section>

          <BlogSection />

          <section id="projects" className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold">Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {projects?.map((p, i) => (
                <Project key={i} project={p} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
