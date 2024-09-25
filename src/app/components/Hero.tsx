import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Hero() {

  useEffect(() => {
    AOS.init({
      duration: 1200, 
      offset: 200,
      easing: 'ease-out',
    });
  }, []);

  return (
    <section className="mt-24">
      <div className="kontainer text-center">
        <div className="row text-md sm:text-xl text-white flex flex-col items-center gap-8">
          <h1 
            data-aos="fade-up"
            className="text-2xl text-yellow-400 font-bold"
          >
            PSDtoXCF CLI Tool
          </h1>
          <h2 
            data-aos="fade-up"
            className="text-6xl font-black text-white sm:text-8xl leading-relaxed"
          >
            Effortlessly <span className="text-yellow-400">Batch</span> Convert Your <span className="text-yellow-400">PSD to XCF</span>
          </h2>
          <p
            data-aos="fade-up"
            className=" text-md text-white font-regular mt-4 py-2 px-4 rounded-full"
          >
            Leap between <span className="text-yellow-400 font-bold">Photoshop</span> and <span className="text-yellow-400 font-bold">GIMP</span>, <span className="text-yellow-400 font-bold">preserving </span>your layer structures.
          </p>
          {/* <CommandPrompt data-aos="fade-up" /> */}
          <button 
            type="button" 
            data-aos="fade-up"
          >
            <Link
              href="mailto:layerleapcli@gmail.com"
              className="bg-yellow-500 hover:bg-yellow-400 rounded-full text-lg lg:text-2xl text-framify-grey px-8 py-4 font-bold mt-24 transition ease-in-out"
            >
              Sign Up for Updates!
            </Link>
          </button>
          {/* <div className="mt-32 animate-bounce flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4" data-aos="fade-up">
            <Link
              href="https://www.producthunt.com/posts/packship?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-packship"
              target="_blank"
              rel="noopener noreferrer"
            > */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {/* <img
                src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?product_id=600712&theme=neutral"
                alt="PackShip - Ship your NPM packages in hours, not years | Product Hunt"
                style={{ width: "250px", height: "54px" }}
                width="250"
                height="54"
              />
            </Link>
            <Link
              href="https://fazier.com/launches/packship"
              target="_blank"
              rel="noopener noreferrer"
            > */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {/* <img
                src="https://fazier.com/api/v1/public/badges/embed_image.svg?launch_id=1261&badge_type=featured&template=true" 
                width="270" 
                alt="PackShip - Ship your NPM packages in hours, not years | Fazier" 
                style={{ width: "250px", height: "54px" }}
              />
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};