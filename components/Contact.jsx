"use client";

// import { sendEmail } from "@/actions/sendEmail";

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await sendEmail(formData);
  };

  return (
    <section
      id="contact"
      className=" p-5 min-w-full bg-[#F2F8EA] flex flex-col justify-center items-center px-10 sm:w-[85vh] rounded-lg"
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="font-syne text-2xl sm:text-4xl">
            <strong>Contact Us</strong>
          </h1>
          <p className="font-montserrat text-gray-700 text-sm sm:text-xl">
            If you have any queries regarding our products or want to place bulk
            orders, contact us at{" "}
            <a href="mailto:sales@agadafoods.com" className="underline">
              sales@agadafoods.com
            </a>
            .
          </p>
        </div>
        {/* Commented out form */}
        {/* <form className="mt-5 flex flex-col" onSubmit={handleSubmit}>
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
        </form> */}
      </div>
    </section>
  );
};

export default Contact;
