const Services = () => (
  <section className="min-h-screen flex flex-col items-center justify-center gap-6 px-6">
    <h2 className="text-4xl font-bold">Services</h2>
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
      {["Branding", "Web Development", "Digital Campaigns"].map((s) => (
        <div key={s} className="p-6 border border-neutral-700 rounded-md">
          <h3 className="text-2xl font-semibold mb-2">{s}</h3>
          <p className="opacity-70">
            We provide high‑quality {s.toLowerCase()} services tailored to your needs.
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
