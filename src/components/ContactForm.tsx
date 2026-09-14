"use client";

import { useState, type FormEvent } from "react";

const fieldClass =
  "w-full border border-[color:rgba(11,11,58,0.13)] bg-paper-soft px-3.5 py-3 font-body text-[15px] text-ink focus:outline-2 focus:outline-red";
const labelClass = "mb-1.5 block font-mono text-xs text-steel";

export default function ContactForm() {
  const [note, setNote] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNote("Thanks — this is a design prototype, so nothing is actually sent yet.");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4.5">
        <label htmlFor="name" className={labelClass}>
          Full name
        </label>
        <input id="name" name="name" type="text" required className={fieldClass} />
      </div>
      <div className="mb-4.5">
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input id="email" name="email" type="email" required className={fieldClass} />
      </div>
      <div className="mb-4.5">
        <label htmlFor="company" className={labelClass}>
          Company
        </label>
        <input id="company" name="company" type="text" className={fieldClass} />
      </div>
      <div className="mb-4.5">
        <label htmlFor="message" className={labelClass}>
          What are you sourcing?
        </label>
        <textarea id="message" name="message" required rows={5} className={`${fieldClass} resize-y`} />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2.5 border border-ink bg-ink px-6.5 py-3.5 font-display text-[15px] text-paper hover:bg-transparent hover:text-ink"
      >
        Send message
      </button>
      {note && <p className="mt-3.5 font-mono text-[12.5px] text-steel">{note}</p>}
    </form>
  );
}