const Contact = () => (
  <section className="flex flex-col items-center justify-center px-6 bg-black">
    <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
    <form
      className="w-full max-w-md flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thank you! We'll be in touch.");
      }}
    >
      <input
        className="p-3 rounded bg-neutral-800 border border-neutral-700"
        placeholder="Aurelia"
      />
      <input
        className="p-3 rounded bg-neutral-800 border border-neutral-700"
        placeholder="Email"
      />
      <textarea
        rows={5}
        className="p-3 rounded bg-neutral-800 border border-neutral-700"
        placeholder="Message"
      ></textarea>
      <button
        className="py-3 rounded bg-white text-neutral-900 font-semibold"
        type="submit"
      >
        Send
      </button>
    </form>
  </section>
);

export default Contact;
