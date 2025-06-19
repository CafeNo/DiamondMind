import React, { useState } from "react";
import Alert from "./Alert";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <section className="flex flex-col items-center justify-center px-6 bg-black">
      <h2 className="text-4xl font-bold mb-6 text-white">Contact Us</h2>
      <form
        className="w-full max-w-md flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          setShowAlert(true);
        }}
      >
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
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>
          Thank for your message!
        </Alert>
      )}
    </section>
  );
};

export default Contact;
