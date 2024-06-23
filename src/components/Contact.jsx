import Aos from 'aos';
import { useEffect } from 'react';

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: 'ease-in' });
  });

  return (
    <section className="pt-16" id="contact">
      <div>
        <h1 className="text-lg md:text-2xl inline ml-14 md:ml-20 font-bold" data-aos="fade-up">Contact me</h1>
        <p className="ml-14 md:ml-20 mt-2 text-sm md:text-base" data-aos="fade-up">Let's get in touch</p>
        <form method="POST" action="https://getform.io/f/navvkeya" className="flex flex-col container mx-auto w-[70%] md:w-[50%] space-y-5 py-6" data-aos="zoom-in">
          <input type="text" name="name" placeholder="Name" className="form-input" />
          <input type="email" name="email" placeholder="Email" className="form-input" />
          <textarea name="message" cols="30" rows="10" placeholder="Message" className="form-input"></textarea>
          <div className="mx-auto pt-2">
            <button type="submit" className=" bg-gray-400 text-black ease-in-out duration-700 hover:bg-[#000300] hover:text-white p-2 rounded w-36 md:w-48 mx-auto">Send</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact;