"use client";

import { sendEmail } from "@/actions/sendEmail";

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await sendEmail(formData);
  };

  return (
    <section
      id="contact"
      className="my-10 sm:my-12 w-[min(100%,38rem) mx-4 sm:mx-10 text-center"
    >
      <h1 className="text-2xl sm:text-4xl">Contact Us</h1>
      <p className="text-gray-700 text-sm sm:text-xl">
        If you have any queries regaring our proudcts or want to place bulk
        orders contact us at {"  "}
        <a href="mailto:example@gmail.com" className="underline">
          example@gmail.com
        </a>{" "}
        {"  "}
        or through this form
      </p>

      <form className="mt-5 flex flex-col" onSubmit={handleSubmit}>
        <input
          className="h-14 rounded-lg border border-black/10 p-4"
          name="email"
          required
          type="email"
          placeholder="Your email"
          maxLength={250}
        />
        <textarea
          name="message"
          required
          placeholder="Your message"
          maxLength={500}
          className="borderBlack h-52 my-3 rounded-lg p-4"
        />
        <button
          type="submit"
          className="h-[3rem] w-[8rem] bg-green-900 text-white rounded-full outline-none"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
