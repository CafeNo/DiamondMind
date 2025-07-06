import React, { useState } from "react";
import Alert from "./Alert";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <section id="contact" className="flex flex-col items-center justify-center px-6 bg-gradient-to-br from-gray-900 to-gray-800 py-16">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-shirin-blue to-shirin-purple bg-clip-text text-transparent">Contact Us</h2>
      <form
        className="w-full max-w-md flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          setShowAlert(true);
        }}
      >
        <input
          className="p-3 rounded bg-neutral-800 border border-shirin-blue/50 focus:border-shirin-blue transition-colors text-shirin-white"
          placeholder="Email"
        />
        <textarea
          rows={5}
          className="p-3 rounded bg-neutral-800 border border-shirin-purple/50 focus:border-shirin-purple transition-colors text-shirin-white"
          placeholder="Message"
        ></textarea>
        <button
          className="py-3 rounded bg-gradient-to-r from-shirin-blue to-shirin-purple text-white font-semibold hover:scale-105 transform transition-all duration-300"
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
