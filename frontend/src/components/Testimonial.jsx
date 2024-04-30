import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    text: "This is a fantastic product. It really helped my !",
    name: "N.Dhanunjaya",
    role: "Business Owner",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    text: "I love this service. It's really improved my workflow!",
    name: "N.Kanthi Kiran",
    role: "Freelancer",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    text: "Incredible product, really helped me out",
    name: "N.Rugved",
    role: "Business Owner",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    text: "I don't know how I lived without this product",
    name: "P.V.M. Prem Sai",
    role: "Web Designer",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    text: "I don't know how I lived without this product",
    name: "M.S.Satwick",
    role: "Web Designer",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
];
function Testimonial() {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="px-2 py-10 md:px-0">
      <div>
        <h2 className="text-4xl font-bold text-center text-black">
          OUR TEAM MEMBERS
        </h2>
      </div>
      <div className="mx-auto max-w-4xl flex items-center py-4">
        <button
          className="text-black font-bold py-2 px-4 rounded"
          onClick={prevSlide}
        >
          <ArrowLeft />
        </button>
        <div className="flex-grow max-w-[40rem]">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={index === current ? "block" : "hidden"}>
              <div className="md:flex md:items-center md:justify-center md:space-x-14">
                {/* <div className="relative h-48 w-48 flex-shrink-0">
                  <img
                    className="relative h-15 w-15 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                </div> */}
                <div className="mt-10 md:mt-0 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <blockquote>
                    <p className="text-xl text-black overflow-x-hidden ">{testimonial.text}</p>
                  </blockquote>
                  <p className="mt-7 text-lg font-semibold text-black">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-base text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="text-black font-bold py-2 px-4 rounded"
          onClick={nextSlide}
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}

export default Testimonial;
