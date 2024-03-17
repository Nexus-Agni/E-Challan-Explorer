import waveSVG from "../assets/wave.svg";
import Car from "../assets/Car.json";
import Lottie from "react-lottie";

function Hero() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Car,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className="relative w-full bg-white"
      style={{
        backgroundImage: `url(${waveSVG})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto w-[1182px] px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16">
          <div className="flex">
            <div className="flex flex-col">
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl overflow-hidden  whitespace-nowrap animate-typewriter">
                E Challan Explorer
              </h1>
              <p className="mt-8 text-lg text-gray-700">
                Pay your Challans online anytime, anywhere and get rid of the
                hassle of standing in long queues.
              </p>
            </div>
            <div className="py-0 my-0 flex-grow">
              <Lottie options={defaultOptions} height="100%" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
