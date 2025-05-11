import SiteLayout from "@/app/layout/site-layout";


export default function Home() {
  return (
    <SiteLayout>
      <section id="home" className="w-screen h-screen flex items-center justify-center bg-green-800 snap-start flex-shrink-0">
        <h1 className="text-5xl font-bold">Welcome to Manishkumar&#39;s Portfolio</h1>
      </section>
      <section id="about" className="w-screen h-screen flex items-center justify-center bg-green-800 snap-start flex-shrink-0">
        <h1 className="text-5xl font-bold">About Me</h1>
      </section>
      <section id="resume" className="w-screen h-screen flex items-center justify-center bg-green-800 snap-start flex-shrink-0">
        <h1 className="text-5xl font-bold">Resume</h1>
      </section>
      <section id="portfolio" className="w-screen h-screen flex items-center justify-center bg-green-800 snap-start flex-shrink-0">
        <h1 className="text-5xl font-bold">Portfolio</h1>
      </section>
      <section id="contact" className="w-screen h-screen flex items-center justify-center bg-green-800 snap-start flex-shrink-0">
        <h1 className="text-5xl font-bold">Contact</h1>
      </section>
    </SiteLayout>
  );
}
